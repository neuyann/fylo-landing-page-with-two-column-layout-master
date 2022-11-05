const formInput = document.querySelector("form");
const button = document.querySelector("#getStarted1");
const emailInput = document.querySelector("#emailInput1");
const notValidMessage = document.querySelector(".notValid");

const notValidMessage2 = document.querySelector(".notValid2");
const button2 = document.querySelector("#getStarted2");
const emailInput2 = document.querySelector("#emailInput2");


const setSuccess = () => {
  emailInput.classList.remove("email-error-border");
  notValidMessage.classList.add("hidden");
};

const setSuccess2 = () => {
  emailInput2.classList.remove("email-error-border2");
  notValidMessage2.classList.add("hidden2");
};

const setError = () => {
  emailInput.classList.add("email-error-border");
  notValidMessage.classList.remove("hidden");
};

const setError2 = () => {
 emailInput2.classList.add("email-error-border2");
 notValidMessage2.classList.remove("hidden2");
};


const validateEmail = (email) => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(String(email).toLowerCase()))
 return re.test(String(email).toLowerCase());
};

const checkEmail = () => {
  const emailValue = emailInput.value.trim();
  if (emailValue === "" || !validateEmail(emailValue)) {
    setError();
  } else if (validateEmail(emailValue)) {
    setSuccess();
  }
};


const checkEmail2 = () => {
  const emailValue2 = emailInput2.value.trim();
  console.log(emailValue2);
  if (emailValue2 === "" || !validateEmail(emailValue2)) {
    setError2();
  } else if (validateEmail(emailValue2)) {
    setSuccess2();
  }
};
button.addEventListener("click", checkEmail);
button2.addEventListener("click", checkEmail2);
