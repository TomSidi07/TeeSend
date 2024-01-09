export class User {
  id;
  firstName;
  lastName;
  constructor(firstName, lastName) {
    this.id =
      firstName.slice(0, 3) +
      lastName.slice(0, 3) +
      Math.round(Math.random() * 100 + 1);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
export class Message {
  id;
  username;
  content;
  constructor(username, content) {
    this.id = User.id;
  }
}
export let SUBMIT = {
  // user: this.user,
  // message: this.message,
};
