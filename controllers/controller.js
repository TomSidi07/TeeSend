import { User, Message, SUBMIT } from "../models/model.js";
import MessageView from "../views/MessageView.js";
let c = 0;
let LS = localStorage;
// add submit to local storage
function addSubmitToLs(submit) {
  let data = getSubmitFromLs(submit.submitter.id);
  if (Array.isArray(data)) {
    data.push(submit);
    LS.setItem(submit.submitter.id, JSON.stringify(data));
  }
  console.log(data);
}
// get submit from local storage
function getSubmitFromLs(id) {
  return JSON.parse(LS.getItem(id) || "[]");
}

let logMessage = (eve) => {
  try {
    eve.preventDefault();
    let { name, email, message } = MessageView;
    let newUser = new User(name, email);
    let newMessage = new Message(message);
    let newSubmit = new SUBMIT(newUser, newMessage);
    console.log(addSubmitToLs(newSubmit));
    console.log(getSubmitFromLs(newSubmit.id));

    console.log(newSubmit);
    gotoChat();
  } catch (error) {
    console.log(error);
  }
};
function gotoChat() {
  window.location = "/chat.html";
}
let init = () => {
  MessageView.Handler(logMessage);
  MessageView.cleanMsgInput();
};

init();
