const BaseService = require("./base.service");
class UserService extends BaseService {
  constructor({ UserBusiness }) {
    super(UserBusiness);
  }
}

module.exports = UserService;



/*
const { toDomainEntity } = require('../domain/mappers');
const { toDbEntity } = require('../dal/mappers');


class UserService {

    constructor({UserRepository}){
        this._userRepository = UserRepository;
    }
    async getUsers(){
        const users = await this._userRepository.getAll();

        //do something

        return users.map(toDomainEntity);
    }

    async createUser(user){
        user = toDomainEntity(user);
        const createUser = await this._userRepository.createUser(user);
        return created;
    }

}

module.exports = UserService;

*/