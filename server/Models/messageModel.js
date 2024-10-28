const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    chatId: String,
    senderId: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("Messege", messageSchema);

module.exports = messageModel;
