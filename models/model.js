export class User {
  id;
  firstName;
  lastName;
  constructor(firstName, lastName) {
    try {
      if (
        typeof lastName == "string" &&
        typeof firstName == "string" &&
        lastName.length >= 3 &&
        firstName.length >= 3
      ) {
        this.id =
          firstName.slice(0, 3) +
          lastName.slice(0, 3) +
          Math.round(Math.random() * 100 + 1);
        this.firstName = firstName;
        this.lastName = lastName;
      } else
        throw new Error(
          "Your name and your lastname must be at least 3 caracter length"
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
}
