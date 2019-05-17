const controller = require('./controller');

module.exports = app => {

    app.post('/tasks/:title/:desc/', controller.add);
    app.get('/tasks', controller.index);
    app.get('/tasks/:id', controller.getOne);    
    app.put('/tasks/:id/:title/:desc', controller.update);
    app.delete('/tasks/:id', controller.destroy);
};