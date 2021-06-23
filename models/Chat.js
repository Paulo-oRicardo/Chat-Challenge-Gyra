const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
  from: {
    type:String,
    required:true,
    unique: true
  },
  content: {
    type:String,
    required:true,
  }
},
{
  timestamps:true
});
module.exports = mongoose.model("Chat", ChatSchema)