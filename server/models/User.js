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
  }
});

UserSchema.statics.toggleUserMembership = function (id) {
  return this.findById(id)
  .then((user) => {
    if (!user.member) {
      user.member = true;
    } else {
      user.member = false;
    }
    return Promise.all([user.save()])
      .then(([user]) => user);
  })
}

UserSchema.statics.toggleAdmin = function (id) {
  return this.findById(id)
    .then((user) => {
      if (!user.admin) {
        user.admin = true;
      } else {
        user.admin = false;
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

module.exports = mongoose.model("users", UserSchema);