var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: { type: String },
},
{ 
timestamps: true });
module.exports = mongoose.model('user', userSchema);