// add money functionality starts here
const validPin = 1234;
document.getElementById("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const bank = document.getElementById("bank").value.trim();
  const accountNumber = document.getElementById("account-number").value.trim();
  const addAmount = parseInt(
    document.getElementById("add-amount").value.trim()
  );
  const addPin = parseInt(document.getElementById("add-pin").value.trim());

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (accountNumber.length != 11) {
    alert("Please provide valid account number");
    return;
  }

  if (addPin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }

  const totalNewAvailableBalance = addAmount + availableBalance;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});
// add money functionality ends here

// cashOut money functionality starts here
document.getElementById("cashOut-money-btn").addEventListener("click", (e) => {
  const cashOutNumber = document.getElementById("cashOut-number").value.trim();
  const cashOutAmount = parseInt(
    document.getElementById("cashOut-amount").value.trim()
  );
  const cashOutPin = parseInt(
    document.getElementById("cashOut-pin").value.trim()
  );

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (cashOutNumber.length !== 11) {
    alert("Please provide valid agent number");
    return;
  }
  if (cashOutPin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }
  const newAvailableBalance = availableBalance - cashOutAmount;
  document.getElementById("available-balance").innerText = newAvailableBalance;
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
