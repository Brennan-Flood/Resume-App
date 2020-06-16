const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 32
  },
  admin: {
    type: Boolean,
    default: false,
  },
  rootAdmin: {
    type: Boolean,
    default: false
  },
  member: {
    type: Boolean,
    default: false
  },
  draft: {
    type: Schema.Types.ObjectId,
    ref: "drafts"
  },
  recentDrafts: [{
    type: Schema.Types.ObjectId,
    ref: "drafts"
  }]
});

UserSchema.statics.toggleUserMembership = function (id) {
  return this.findById(id)
  .then((user) => {
    let draft = null;
    if (!user.member) {
      user.member = true;
      if (!user.draft) {
        const Draft = mongoose.model("drafts");
        draft = new Draft();
      }
      
    } else {
      user.member = false;
      user.admin = false;
      user.rootAdmin = false;
    }
    if (draft === null) {
      return Promise.all([user.save()])
        .then(([user]) => user);
    } else {
      return draft.save()
      .then((draft) => {
        user.draft = draft;
        return user.save()
        .then((user) => {
          return user;
        });
      })
    }

  })
};

UserSchema.statics.toggleAdmin = function (id) {
  return this.findById(id)
    .then((user) => {
      if (!user.admin) {
        user.admin = true;
        user.member = true;
      } else {
        user.admin = false;
        user.rootAdmin = false;
      }
      return Promise.all([user.save()])
        .then(([user]) => user);
    })
};

UserSchema.statics.toggleRootAdmin = function (id) {
  return this.findById(id)
    .then((user) => {
      if (!user.rootAdmin) {
        user.rootAdmin = true;
        user.admin = true;
        user.member = true;
      } else {
        user.rootAdmin = false;
      }
      return Promise.all([user.save()])
        .then(([user]) => user);
    })
};

UserSchema.statics.addDraftToUser = function (id) {
  return this.findById(id)
  .then((user) => {
    const Draft = mongoose.model("drafts");
    Draft.findById(draftId)
    .then((draft) => {
      user.draft = draft;
    })
    return Promise.all([ user.save()])
      .then(([user]) => user)
  })
};

UserSchema.statics.findDraft = function (id) {
  return this.findById(id)
    .populate("draft")
    .then(user => {
      const Draft = mongoose.model("drafts");
      return Draft.findById(user.draft);
    });
};

UserSchema.statics.findRecentDrafts = function (id) {
  return this.findById(id)
    .populate("recentDrafts")
    .then(user => {
      const Draft = mongoose.model("drafts");
      const recentDrafts = user.recentDrafts;
      let returnArr = [];
      recentDrafts.forEach(draftId => {
        returnArr.push(Draft.findById(draftId));
      })
      return returnArr;
    })
};

UserSchema.statics.addRecentDraft = function (id, state) {
  return this.findById(id)
    .populate("recentDrafts")
    .then(user => {
      let recentDrafts = user.recentDrafts;
      const Draft = mongoose.model("drafts");
      let newDraft = new Draft({state: state});
      return newDraft.save()
      .then(draft => {
        recentDrafts.unshift(draft);
        if (recentDrafts.length > 10) {
          let lastDraft = recentDrafts.pop();
          Draft.findByIdAndDelete(lastDraft._id, function(err){
            if (err) {
              console.log(err);
            }
          });
        }
        user.recentDrafts = recentDrafts;
        return user.save()
        .then(user => {
          return user;
        })
      })
    })
};

module.exports = mongoose.model("users", UserSchema);