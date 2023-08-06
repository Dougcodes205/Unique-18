const users = [];
let thoughtIdCounter = 1;

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.thoughts = [];
    this.friends = [];
  }

  addThought(thoughtText) {
    const newThought = {
      _id: thoughtIdCounter++,
      thoughtText,
      createdAt: new Date().toISOString(),
    };
    this.thoughts.push(newThought);
    return newThought;
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  toJSON() {
    return {
      username: this.username,
      email: this.email,
      thoughts: this.thoughts,
      friends: this.friends,
      friendCount: this.friends.length,
    };
  }

  static getAllUsers() {
    return users;
  }

  static createUser(username, email) {
    const newUser = new User(username, email);
    users.push(newUser);
    return newUser;
  }

  static getUserByUsername(username) {
    return users.find((user) => user.username === username);
  }

  static createThought(username, thoughtText) {
    const user = users.find((user) => user.username === username);
    if (!user) throw new Error('User not found');
    return user.addThought(thoughtText);
  }
}

module.exports = User;