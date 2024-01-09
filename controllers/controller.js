import { User, Message, SUBMIT } from "../models/model.js";
import MessageView from "../views/MessageView.js";

let logMessage = (eve) => {
  try {
    eve.preventDefault();
    let { name, email, message } = MessageView;
    let newUser = new User(name, email);
    let newMessage = new Message(message);
    let newSubmit = new SUBMIT(newUser, newMessage);
    console.log(newSubmit);
  } catch (error) {
    console.log(error);
  }
};

let init = () => {
  MessageView.Handler(logMessage);
};

init();
