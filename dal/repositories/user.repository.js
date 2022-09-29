const BaseRepository = require("./base.repository");


//users es el nombre de la tabla
class UserRepository extends BaseRepository {
    constructor({ db }) {
      super(db, "User");
    }
  }

module.exports = UserRepository;