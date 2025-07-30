const burguer_menu = document.getElementById("burguer");
const phone_menu = document.getElementById("phone-menu");

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

