export class User {
  id;
  username;
  email;
  constructor(username, email) {
    try {
      if (
        typeof email === "string" &&
        typeof username === "string" &&
        email.length >= 3 &&
        username.length >= 3
      ) {
        this.id =
          username.slice(0, 3) +
          email.slice(0, 3) +
          Math.round(Math.random() * 100 + 1);
        this.username = username;
        this.email = email;
      } else
        throw new Error(
          "Your name and your email must be at least 3 caracter length"
        );
    } catch (error) {
      console.log(error);
    }
  }
}
export class Message {
  constructor(content) {
    this.content = content;
  }
}
export class SUBMIT {
  constructor(submitter, message) {
    this.id =
      submitter.id.slice(3) + 0 + 0 + Math.floor(Math.random() * 100) ** 5;
    this.submitter = submitter;
    this.message = message;
  }
  stat() {
    if ((this.id = this.submitter.id)) return "SUBMITED";
  }
}
