const { Router }  = require("express");
const bodyParser = require("body-parser");

module.exports = function ({ UserController }) {
    const router = Router();

    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());

    router.get('/',UserController.getUsers.bind(UserController));
    router.get('/:id',UserController.getUser.bind(UserController));
    router.post('/',UserController.createUser.bind(UserController));
    router.put("/:id", UserController.updateUser.bind(UserController));
    router.delete("/:id", UserController.deleteUser.bind(UserController));
    
    router.get('/hello/',UserController.sayHello);
    return router;
};