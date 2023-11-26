const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { firstNaeName: String, lastNaeName: String },
  age: Number,
  email: { type: String, require: true },
  isActive: { type: Boolean, default: true },
  hobbies: [String],
  address: { street: String, city: String, country: String },
  orders: [
    {
      productionName: String,
      price: Number,
      quantity: Number,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
