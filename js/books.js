// Filter on mobile
let filter = document.querySelectorAll(".filter");

filter.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("active");
    })
})

// Displaying all books from a JSON file
fetch("json/all.json").then(function(response){
	return response.json();
})
.then(function(products){
	let book = document.querySelector(".books .boxes");
	let out = "";
	for(let product of products){
		out += `
            <div class="swiper-slide box">
              <div class="image">
                  <div class="sale">${product.sale}</div>
                  <img src="${product.img}" alt="${product.author}/${product.title}">
                  <div class="fav-btn"><i class="fa-solid fa-heart-circle-plus"></i></div>
              </div>
              <div class="title">${product.title}</div>
                <div class="author">${product.author}</div>
              <div class="price">${product.price} <span class="discount">${product.discount}</span></div>
              <div class="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
              <div class="btn"><button><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
          </div>
		`;

        book.innerHTML = out;

        // Checking whether the product is on sale
        let sale = document.querySelectorAll(".sale");
        sale.forEach(pr => {
          if (pr.innerText === "") {
            pr.style.display = "none";
          }
        }) 
        
	}
});