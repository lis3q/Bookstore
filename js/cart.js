// Responsive navbar
const openMobileNav = document.querySelector(".open-mobile-nav");
const closeMobileNav = document.querySelector(".close-mobile-nav");

openMobileNav.addEventListener("click", () => {
  document.querySelector("header.mobile").style.transform = "translateX(0)";
  document.querySelector("header.mobile").style.width = "100%";
  document.querySelector("header.mobile").style.height = "100vh";
})
closeMobileNav.addEventListener("click", () => {
  document.querySelector("header.mobile").style.width = "0";
  document.querySelector("header.mobile").style.transform = "translateX(-300px)";
})

// Sticky navbar
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 0)
})



// Quantity cart
let minus = document.querySelectorAll(".minus");
let plus = document.querySelectorAll(".plus");
let number = document.querySelectorAll(".quantity .number");
let quantity = 0;

plus.forEach(btn => {
  btn.addEventListener("click", () => {
    quantity++;
    number.innerHTML = quantity;
  })
})

// plus.forEach(addEventListener("click", btn => {
//   quantity++;
//   btn.innerHTML = quantity;
// }))

// minus.forEach(addEventListener("click", () => {
//   if (quantity <= 1) {
//     quantity = 1;
//     number.innerHTML = quantity;
//   } else {
//     quantity--;
//     number.innerHTML = quantity;
//   }
// }))
