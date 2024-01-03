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
              <div class="btn add-cart-btn"><button><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
          </div>
		`;

    book.innerHTML = out;

    // Rating system
    let rate = document.querySelectorAll("#recommended .rating");
    rate.forEach(rt => {
      let nr = rt.innerText;
      let icon = '<i class="fa-solid fa-star"></i>';
      let result = icon.repeat(nr);
      rt.innerHTML = result;
    })

    // Checking whether the product is on sale
    let sale = document.querySelectorAll(".sale");
    sale.forEach(pr => {
      if (pr.innerText === "") {
        pr.style.display = "none";
      }
    }) 
  
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
              <div class="btn"><button><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
          </div>
		`;

    book.innerHTML = out;

    // Rating system
    let rate = document.querySelectorAll("#news .rating");
    rate.forEach(rt => {
      let nr = rt.innerText;
      let icon = '<i class="fa-solid fa-star"></i>';
      let result = icon.repeat(nr);
      rt.innerHTML = result;
    })

    // Checking whether the product is on sale
    let sale = document.querySelectorAll(".sale");
    sale.forEach(pr => {
      if (pr.innerText === "") {
        pr.style.display = "none";
      }
    }) 

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
              <div class="btn"><button><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
          </div>
		`;

    book.innerHTML = out;

    // Rating system
    let rate = document.querySelectorAll("#sale .rating");
    rate.forEach(rt => {
      let nr = rt.innerText;
      let icon = '<i class="fa-solid fa-star"></i>';
      let result = icon.repeat(nr);
      rt.innerHTML = result;
    })

	}
});




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




