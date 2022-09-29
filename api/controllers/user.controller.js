const mapper = require("automapper-js");
const { UserDto } = require("../dtos/");

class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
  }

  sayHello(req,res){
    return res.send({message: "Hello World!"});
  }

  async getUsers(req, res) {
    let users = await this._userService.getAll();
    users = users.map(user => mapper(UserDto, user));
    return res.send({
      payload: users
    });
  }

  async getUser(req, res) {
    const { id } = req.params;
    let user = await this._userService.get(id);
    if (!user) {
      return res.status(404).send();
    }
    user = mapper(UserDto, user);
    return res.send({
      payload: user
    });
  }

  async createUser(req, res) {
    const { body } = req;
    const createdUser = await this._userService.create(body);
    const user = mapper(UserDto, createdUser);
    return res.status(201).send({
      payload: user
    });
  }

  async updateUser(req, res) {
    const { body } = req;
    const { id } = req.params;
    console.log ('Id:' + req.params);
    console.log(req.body);

    await this._userService.update(id, body);
    return res.status(204).send();
  }

  async deleteUser(req, res) {
    const { id } = req.params;

    await this._userService.delete(id);
    return res.status(204).send();
  }
}

module.exports = UserController;



/*
class UserController{
    constructor({ UserService }){
        this._userService = UserService;
    }

    sayHello(req,res){
        return res.send({message: "Hello World!"});
    }

    async getUsers(req,res) {
        let users = await this._userService.getAll();
        return res.send({
            error: false,
            payload: users
        });
    }

    async createUser(req,res) {
        const { body } = req;
        const createdUser = await this._userService.createUser(body);
        return res.status(201).send({
            payload: createdUser
        })
    }
}

module.exports = UserController;

*/