// Quantity cart
let minus = document.querySelectorAll(".minus");
let plus = document.querySelectorAll(".plus");
let number = document.querySelectorAll(".number");
let quantity = 0;

plus.forEach(e => {
  e.addEventListener("click", () => {
    console.log(e.target);
  })
})

minus.forEach(e => {
  e.addEventListener("click", () => {
    if (quantity <= 1) {
      quantity = 1;
    } else {
      quantity--;
      number.forEach(num => {
        num.innerHTML = quantity;
      })
    }
  })
})