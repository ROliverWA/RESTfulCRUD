var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Tasks', {useNewUrlParser:true}).then(console.log('Mongoose Conected'));

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 2},
    description: {type: String, default:""},
    completed: {type: Boolean, default:false},
}, {timestamps:true});

module.exports = mongoose.model("Task", TaskSchema);