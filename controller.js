const Task = require('./models');

module.exports = {

index: (req, res) => {
    Task.find()
    .then(results=>res.json(results))
    .catch();
},

getOne: (req, res) => {
    Task.findOne({_id: req.params.id})
    .then(results=>res.json(results))
    .catch();
},

add: (req, res) => {
    const task = new Task({title: req.params.title, description: req.params.desc,
    completed: true});
    task.save()
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
},

update: (req, res) => {
    Task.findByIdAndUpdate(req.params.id, {title: req.params.title,
    description: req.params.desc})
    .then(results=> res.json(results))
    .catch();
},

destroy: (req, res) => {
    Task.findByIdAndDelete(req.params.id)
    .then(results=>res.json(results))
    .catch();
}
};