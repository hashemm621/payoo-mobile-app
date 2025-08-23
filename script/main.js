// login button functionality
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const mobileNumber = 123456789;
  const pinNumber = 1234;

  const mobile = document.getElementById("number").value.trim();
  const mobileValue = parseInt(mobile);

  const pin = document.getElementById("pin").value.trim();
  const pinValue = parseInt(pin);

  if (mobileNumber === mobileValue && pinNumber === pinValue) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid credential");
  }
});
