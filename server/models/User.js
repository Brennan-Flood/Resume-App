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
  }
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
        draft.save().
        then((draft) => {
          user.draft = draft;
        });
      }
      
    } else {
      user.member = false;
      user.admin = false;
      user.rootAdmin = false;
    }
    // if (draft === null) {
      return Promise.all([user.save()])
        .then(([user]) => user);
    // } else {
    //   user.save()
    //   .then((user) => {
    //     draft.save()
    //       .then((draft) => {
    //         user.draft = draft;
    //         return Promise.all([user.save()])
    //           .then(([user]) => {
    //             console.log(user);
    //             return user
    //           })
    //       })
    //   })
    // }

  })
}

UserSchema.statics.toggleAdmin = function (id) {
  return this.findById(id)
    .then((user) => {
      if (!user.admin) {
        user.admin = true;
      } else {
        user.admin = false;
        user.rootAdmin = false;
      }
      return Promise.all([user.save()])
        .then(([user]) => user);
    })
}

UserSchema.statics.toggleRootAdmin = function (id) {
  return this.findById(id)
    .then((user) => {
      if (!user.rootAdmin) {
        user.rootAdmin = true;
      } else {
        user.rootAdmin = false;
      }
      return Promise.all([user.save()])
        .then(([user]) => user);
    })
}

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
}

UserSchema.statics.findDraft = function (id) {
  return this.findById(id)
    .populate("draft")
    .then(user => {
      const Draft = mongoose.model("drafts");
      return Draft.findById(user.draft);
    });
}

module.exports = mongoose.model("users", UserSchema);