// Add to cart function
const addCartBtn = (section) => {
  let cartBtn = document.querySelectorAll(section);
  let cartQuantityNr = 0;
  cartBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      const img = btn.parentElement.parentElement.children[0].children[1];
      const title = btn.parentElement.parentElement.children[1];
      const author = btn.parentElement.parentElement.children[2];
      const price = btn.parentElement.parentElement.children[3];

      let cart = document.querySelector('.cart .items');

      let item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = 
      `
          <div class="image"><img src="${img.src}" alt=""></div>
          <div class="item-info">
              <div class="title">${title.textContent}</div>
              <div class="author">${author.textContent}</div>
          </div>
          <div class="price-info">
              <div class="price">${price.textContent}</div>
              <div class="delivery">Dostawa od 9,99 zł</div>
          </div>
          <div class="quantity">
              <div class="minus">-</div>
              <div class="number">1</div>
              <div class="plus">+</div>
          </div>
          <div class="buttons">
              <button class="add-fav-btn"><i class="fa-regular fa-heart"></i></button>
              <button class="rm-item"><i class="fa-regular fa-trash-can"></i></button>
          </div>
      `

    cart.appendChild(item);
    alert("Dodano ten produkt do koszyka");

    // Changing cart quantity
    let cartQuantitySpan = document.querySelector(".cart-quantity");
    cartQuantityNr++;
    cartQuantitySpan.innerHTML = "(" + cartQuantityNr + ")";

    // Removing item from cart
    removeCartItem();

    // Changing item's quantity
    itemQuantitySystem();

    // Clear all cart
    clearAllCart();
})
})}

const removeCartItem = () => {
  let removeCartItemBtn = document.querySelectorAll(".cart .rm-item");
  removeCartItemBtn.forEach(e => {
    e.addEventListener("click", () => {
      e.parentElement.parentElement.remove();
    })
  })
}

// Quantity system
const itemQuantitySystem = () => {
  let minus = document.querySelectorAll(".quantity .minus");
  let plus = document.querySelectorAll(".quantity .plus");
  
  plus.forEach(e => {
    let quantity = 1;
    e.addEventListener("click", () => {
      let number = e.previousElementSibling;
      quantity++;
      number.innerHTML = quantity;
    })
  })
  
  // minus.forEach(e => {
  //   e.addEventListener("click", () => {
  //     let quantity = e.nextElementSibling.innerText;
  //     let number = e.nextElementSibling;
  //     quantity--;
  //     number.innerHTML = quantity;
  //   })
  // })
}

// Rating system
const ratingSystem = (section) => {
  let rate = document.querySelectorAll(section);
  rate.forEach(rt => {
    let nr = rt.innerText;
    let icon = '<i class="fa-solid fa-star"></i>';
    let result = icon.repeat(nr);
    rt.innerHTML = result;
  })
  
}

// isSale function
function isSale() {
  let sale = document.querySelectorAll(".sale");
  sale.forEach(pr => {
    if (pr.innerText === "") {
      pr.style.display = "none";
    }
  }) 
}

const clearAllCart = () => {
  const clearAllCartBtn = document.querySelector(".clear-cart");
  clearAllCartBtn.addEventListener("click", () => {
    let items = document.querySelectorAll(".cart .items .item");
    items.forEach((item) => {
      item.remove();
    })
  })
}


// Displaying recommended books from a JSON file
fetch("json/recommended.json").then(function(response){
	return response.json();
})
.then(function(products){
	let book = document.querySelector("#recommended .swiper-wrapper");
	let out = "";

	for(let product of products){
		out += `
            <div class="box swiper-slide">
              <div class="image">
                  <div class="sale">${product.sale}</div>
                  <img src="${product.img}" alt="${product.author}/${product.title}">
                  <div class="fav-btn"><i class="fa-solid fa-heart-circle-plus"></i></div>
              </div>
              <div class="title">${product.title}</div>
              <div class="author">${product.author}</div>
              <div class="price">${product.price} <span class="discount">${product.discount}</span></div>
              <div class="rating">${product.rating}</div>
              <div class="btn"><button class="add-cart-btn"><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
          </div>
		`;

    book.innerHTML = out;

    addCartBtn("#recommended .add-cart-btn");
    ratingSystem("#recommended .rating");
    isSale();
  }
});




// Displaying new books from a JSON file
fetch("json/news.json").then(function(response){
	return response.json();
})
.then(function(products){
	let book = document.querySelector("#news .swiper-wrapper");
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
              <div class="rating">${product.rating}</div>
              <div class="btn"><button class="add-cart-btn"><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
          </div>
		`;

    book.innerHTML = out;

    addCartBtn("#news .add-cart-btn");
    ratingSystem("#news .rating");
    isSale();
	}
});



// Displaying sale books from a JSON file
fetch("json/sale.json").then(function(response){
	return response.json();
})
.then(function(products){
	let book = document.querySelector("#sale .swiper-wrapper");
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
              <div class="rating">${product.rating}</div>
              <div class="btn"><button class="add-cart-btn"><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
          </div>
		`;

    book.innerHTML = out;

    addCartBtn("#sale .add-cart-btn");
    ratingSystem("#sale .rating");
    isSale();
	}
});


// Viewing shopping cart
const cartLinkBtn = document.querySelectorAll(".cart-btn");
cartLinkBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let cart = document.querySelector('.cart');
    cart.classList.toggle("active");
  })
})

// Closing shopping cart
const closeCartBtn = document.querySelector(".close-cart");
closeCartBtn.addEventListener("click", () => {
  let cart = document.querySelector('.cart');
  cart.classList.remove("active");
})



// About Us - Swiper
const about = new Swiper('.reviews-swiper', {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  grabCursor: 'true',
  spaceBetween: 30,
  fade: 'true',
  centerSlide: 'true',
  direction: 'horizontal',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Breakpoints (responsibility)
  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 1,
    }
  }
});


// Books - Swiper
const books = new Swiper('.book-swiper', {
  slidesPerView: 6,
  slidesPerGroup: 1,
  grabCursor: 'true',
  spaceBetween: 20,
  fade: 'true',
  centerSlide: 'true',
  direction: 'horizontal',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 6,
    },
  }
});



