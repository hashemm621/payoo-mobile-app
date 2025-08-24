const validPin = 1234;
const transactionData = [];
// reuseable function starts

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

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// function to toggle buttons
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-200");
  }
  document.getElementById(id).classList.remove("border-gray-200");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// reuseable function ends

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

  const data ={
    name: 'Add Money',
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data);
});

// add money functionality ends here

// cashOut money functionality starts here
document.getElementById("cashOut-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
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

  const data ={
    name: 'Cash Out',
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data);
});
// cashOut money functionality ends here

// transfer money functionality starts here
document.getElementById("transferMoney-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const transferMoneyNumber = getInputValue("transferMoney-number");
  const transferMoneyAmount = getInputValueNumber("transferMoney-amount");
  const transferMoneyPin = getInputValueNumber("transferMoney-pin");

  const availableBalance = getInnerText("available-balance");
  if (transferMoneyNumber.length !== 11) {
    alert("Please provide valid agent number");
    return;
  }
  if (transferMoneyPin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }
  const newAvailableBalance = availableBalance - transferMoneyAmount;
  setInnerText(newAvailableBalance);

  const data ={
    name: 'Transfer Money',
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data);
});
// transfer money functionality ends here

// get Bonus functionality starts
document.getElementById("getBonus-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const coupon = getInputValue("getBonus-number");
  if (coupon !== "hashem20") {
    alert("Invalid your coupon. Please enter valid coupon");
    return;
  }
  const availableBalance = getInnerText("available-balance");
  const newBalance = availableBalance + 200;
  setInnerText(newBalance);

  const data ={
    name: 'Get Bonus',
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data);
});
// get Bonus functionality ends

// pay bill section starts here
document.getElementById("payBill-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const payBillNumber = getInputValue("payBill-number");
  const payBillAmount = getInputValueNumber("payBill-amount");
  const payBillPin = getInputValueNumber("payBill-pin");
  const availableBalance = getInnerText("available-balance");

  if (payBillNumber.length != 11) {
    alert("Please provide valid account number");
    return;
  }

  if (payBillPin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }

  const totalNewAvailableBalance = payBillAmount + availableBalance;

  setInnerText(totalNewAvailableBalance);

  const data ={
    name: 'Pay Bill',
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data);
});
// pay bill section ends here

// transaction section starts here
document.getElementById("transaction-toggle").addEventListener("click",function(){
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `

        transactionContainer.appendChild(div)


    }
})

// transaction section ends here

// toggle section start
const addMoneyToggle = document.getElementById("add-money-toggle");
const cashOutToggle = document.getElementById("cashOut-toggle");
const transferMoneyToggle = document.getElementById("transferMoney-toggle");
const getBonusToggle = document.getElementById("getBonus-toggle");
const payBillToggle = document.getElementById("payBill-toggle");
const transactionToggle = document.getElementById("transaction-toggle");

addMoneyToggle.addEventListener("click", () => {
  handleToggle("addMoney-input");
  handleButtonToggle("add-money-toggle");
});

cashOutToggle.addEventListener("click", () => {
  handleToggle("cashOut-input");
  handleButtonToggle("cashOut-toggle");
});

transferMoneyToggle.addEventListener("click", () => {
  handleToggle("transferMoney-input");
  handleButtonToggle("transferMoney-toggle");
});

getBonusToggle.addEventListener("click", () => {
  handleToggle("getBonus-input");
  handleButtonToggle("getBonus-toggle");
});

payBillToggle.addEventListener("click", () => {
  handleToggle("payBill-input");
  handleButtonToggle("payBill-toggle");
});

transactionToggle.addEventListener("click", () => {
  handleToggle('transaction-display');
  handleButtonToggle('transaction-toggle');
});
// toggle section end
