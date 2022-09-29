const BaseBusiness = require("./base.business");
const { User } = require("./models");

class UserBusiness extends BaseBusiness {
  constructor({ UserRepository }) {
    super(UserRepository, User);
  }
}

module.exports = UserBusiness;
