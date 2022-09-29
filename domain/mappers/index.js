const { User } = require('../user.business');

module.exports = {
    toDbEntity(user){
        const {id, name, lastname } = user;
        return new User({id, name , lastname })
    }
}