let users = [
  { id: 1, username: "lol" },
  { id: 2, username: "wew" }
]

class UsersDal {
  async getUsers(result) {
    try {
      let answer = await users
      answer.push({ id: 3, username: "000" })
      result(null, answer)
    } catch (err) {
      result(err)
    }
  }
}

module.exports = new UsersDal()