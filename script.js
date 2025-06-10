let currentBanner = 1;
const burguer_menu = document.getElementById("burguer-menu");
const phone_menu = document.getElementById("phone-menu");
const back_top = document.getElementById("back-top");
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");
const banner = document.getElementById("banner");


setInterval(() => {
   if (currentBanner !== 3) {
    currentBanner = currentBanner + 1
   banner.src = `images/banner${currentBanner}.jpg`;
   }
   else {
   currentBanner = 1;
   banner.src = `images/banner${currentBanner}.jpg`
   }

}, 9000)


left_arrow.addEventListener("click", () => {
    if (currentBanner !== 1) {
     currentBanner = currentBanner - 1;
     banner.src = `images/banner${currentBanner}.jpg`;
   }
   else {
    currentBanner = 3;
    banner.src = `images/banner${currentBanner}.jpg`;
   }
})

right_arrow.addEventListener("click", () => {
  if (currentBanner !== 3) {
    currentBanner = currentBanner + 1;
    banner.src = `images/banner${currentBanner}.jpg`
  }
  else {
    currentBanner = 1;
    banner.src = `images/banner${currentBanner}.jpg`
  }
})

document.addEventListener("scroll", (event) => {
  back_top.style.display = "block";
  console.log(event)
})
back_top.addEventListener("click", (event) => {
  back_top.style.display = "none";
  window.scrollTo(0, 0);
})

burguer_menu.addEventListener("click", (e) => {
      
      if (phone_menu.style.visibility === "visible") {
        phone_menu.style.visibility = "hidden";
      }
      else {
        phone_menu.style.visibility = "visible"
      }
})

