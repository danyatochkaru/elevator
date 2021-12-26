const md5 = require("md5");
const usersDal = require("../dal/users.dal");

class UsersService {
  #generateToken(text) { // usage: this.#generateToken(email+password) // где 'email+password' происходит конкатенация. использовать эту функцию надо при создании пользователя и при изменении информации ибо токен будет зависить от почты и пароля, то есть если что то измениться, то токен тоже поменяется
    return md5("s3cr3t__"+text+text)
  }
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