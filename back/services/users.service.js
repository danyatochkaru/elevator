const usersDal = require("../dal/users.dal");

class UsersService {
  async getUsers() {
    function getAnswer(err, resultat) {
      if (err != null) console.error(err);
      else {
        console.log(resultat);
      }
    }
    usersDal.getUsers(getAnswer)
  }
}

module.exports = new UsersService()