class MessageView {
  teeBtn = document.querySelector(".tee-btn");
  // Form
  teeForm = this.teeBtn.form;
  //The user name
  userName = this.teeForm[0];
  // User email
  userEmail = this.teeForm[1];
  // user message
  userMessage = this.teeForm[2];
  btn = document.querySelector("tee-btn");
  Handler(func) {
    this.teeBtn.addEventListener("click", func.bind(this));
  }
  get name() {
    return this.userName.value;
  }
  get email() {
    return this.userEmail.value;
  }
  get message() {
    return this.userMessage.value;
  }
  cleanMsgInput() {
    this.teeBtn.addEventListener("click", () => {
      this.userMessage.value = "";
    });
  }
}
export default new MessageView();
/* class AddTransactionView {
  parentElement = document.querySelector(".form");
  valueInput = this.parentElement.querySelector(".value-input");
  typeSelect = this.parentElement.querySelector("#transaction_type");
  constructor() {
    this.typeSelect.addEventListener("change", () => {
      console.log(`Type changed to ${this.typeSelect.value}`);
    });
  }
  addSubmitHandler(handler) {
    this.parentElement.addEventListener("submit", handler.bind(this));
  }
  get amount() {
    return parseFloat(this.valueInput.value);
  }
  get type() {
    return this.typeSelect.value;
  }
  clearForm() {
    this.valueInput.value = "";
    this.typeSelect.value = transactionType.INCOME;
  }
}
export default new AddTransactionView(); */
