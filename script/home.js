const validPin = 1234;
// reuseable function

// function to get input value
function getInputValueNumber(id) {
  const inputValue = parseInt(document.getElementById(id).value.trim());
  return inputValue;
}
function getInputValue(id) {
  const inputfield = document.getElementById(id).value.trim();
  return inputfield;
}

// function to get inner text
function getInnerText(id) {
  const textItem = parseInt(document.getElementById(id).innerText);
  return textItem;
}

// function to set inner text
function setInnerText(value) {
  const setText = (document.getElementById("available-balance").innerText =
    value);
  return setText;
}

// add money functionality starts here
document.getElementById("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const bank = getInputValue("bank");
  const accountNumber = getInputValue("account-number");
  const addAmount = getInputValueNumber("add-amount");
  const addPin = getInputValueNumber("add-pin");
  const availableBalance = getInnerText("available-balance");

  if (accountNumber.length != 11) {
    alert("Please provide valid account number");
    return;
  }

  if (addPin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }

  const totalNewAvailableBalance = addAmount + availableBalance;

  setInnerText(totalNewAvailableBalance);
});

// add money functionality ends here

// cashOut money functionality starts here
document.getElementById("cashOut-money-btn").addEventListener("click", (e) => {
  const cashOutNumber = getInputValue("cashOut-number");
  const cashOutAmount = getInputValueNumber("cashOut-amount");
  const cashOutPin = getInputValueNumber("cashOut-pin");

  const availableBalance = getInnerText("available-balance");
  if (cashOutNumber.length !== 11) {
    alert("Please provide valid agent number");
    return;
  }
  if (cashOutPin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }
  const newAvailableBalance = availableBalance - cashOutAmount;
  setInnerText(newAvailableBalance);
});
// cashOut money functionality ends here

// toggle in add money section and cash out section start
const addMoneyToggle = document.getElementById("add-money-toggle");
const cashOutToggle = document.getElementById("cashOut-toggle");
const addMoneyInput = document.getElementById("addMoney-input");
const cashOutInput = document.getElementById("cashOut-input");

addMoneyToggle.addEventListener("click", () => {
  addMoneyToggle.classList.add("active");
  addMoneyInput.classList.add("display-block");
  cashOutInput.classList.add("display-none");
  cashOutToggle.classList.remove("active");
  cashOutInput.classList.remove("display-block");
});

cashOutToggle.addEventListener("click", () => {
  addMoneyToggle.classList.remove("active");
  addMoneyInput.classList.add("display-none");
  addMoneyInput.classList.remove("display-block");
  cashOutToggle.classList.add("active");
  cashOutInput.classList.add("display-block");
});
// toggle in add money section and cash out section end
