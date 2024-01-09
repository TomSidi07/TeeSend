import { User, Message, SUBMIT } from "../models/model.js";
import MessageView from "../views/MessageView.js";

let logMessage = (eve) => {
  try {
    eve.preventDefault();
    let tom = new User("Tom", "Sidibe");
    let content = "Hello im tom";
    let msg = new Message(content);
    let submit = new SUBMIT(tom, msg);
    console.log(submit);
  } catch (error) {
    console.log(error);
  }
};

let init = () => {
  MessageView.Handler(logMessage);
};

init();
