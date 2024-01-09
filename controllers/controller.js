import { User, Message } from "../models/model.js";
import MessageView from "../views/MessageView.js";

let tom = new User("Tom", "Sidibe");
let logMessage = (eve) => {
  eve.preventDefault();

  console.log(tom);
  //   let newMsg = new Message();
  console.log("ok");
};

let init = () => {
  MessageView.Handler(logMessage);
};

init();
