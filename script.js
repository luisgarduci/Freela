
const burguer_menu = document.getElementById("burguer");
const phone_menu = document.getElementById("phone-menu");
const name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const form = document.getElementById("form");
const message = document.getElementById("messageCostumer");
const warning = document.getElementById("warning");
const loader = document.getElementById("loader");
const submit = document.getElementById("submit");
const notification = document.getElementById("notification");

burguer_menu.addEventListener("click", (e) => {
      if (phone_menu.style.visibility === "visible") {
        phone_menu.style.transition = "0.5s";
        phone_menu.style.visibility = "hidden";
      }
      else {
        phone_menu.style.visibility = "visible";
        phone_menu.style.transition = "0.5s";
      }
})


form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.style.display = "block";
  submit.style.display = "none";
  fetch("https://freela-30dw.onrender.com/message", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name.value, email: email.value, number: number.value, message: message.value})
  })
  .then(response => response.text())
  .then((data) => {
    loader.style.display = "none";
    warning.innerHTML = data;
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
      submit.style.display = "block";
      name.value = "";
      number.value = "";
      email.value = "";
      message.value = "";
    }, 5000)
  }) 
});





