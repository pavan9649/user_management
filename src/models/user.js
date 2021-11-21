const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, default:"123456" },
  phone: { type: String, required: true }
});
userSchema.virtual("id").get(function () {
    return this._id.toHexString();
  });
  
  userSchema.set("toJSON", {

    virtuals: true,
  });
  exports.User = mongoose.model("User", userSchema);