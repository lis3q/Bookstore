// Displaying recommended books from a JSON file
fetch("recommended.json").then(function(response){
	return response.json();
})
.then(function(products){
	let books = document.querySelector("#recommended .boxes");
	let out = "";
	for(let product of products){
		out += `
            <div class="box">
                <div class="image"><img src="${product.img}" alt="${product.author}/${product.title}"></div>
                <div class="title">${product.title}</div>
                <div class="author">${product.author}</div>
                <div class="price">${product.price} <span>${product.discount}</span></div>
                <div class="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="btn"><button><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
                <div class="btn"><button><i class="fa-solid fa-heart"></i> Dodaj do ulubionych</button></div>
            </div>
		`;
	}

	books.innerHTML = out;
});

// Displaying new books from a JSON file
fetch("news.json").then(function(response){
	return response.json();
})
.then(function(products){
	let books = document.querySelector("#news .boxes");
	let out = "";
	for(let product of products){
		out += `
            <div class="box">
                <div class="image"><img src="${product.img}" alt="${product.author}/${product.title}"></div>
                <div class="title">${product.title}</div>
                <div class="author">${product.author}</div>
                <div class="price">${product.price} <span>${product.discount}</span></div>
                <div class="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div class="btn"><button><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
                <div class="btn"><button><i class="fa-solid fa-heart"></i> Dodaj do ulubionych</button></div>
            </div>
		`;
	}

	books.innerHTML = out;
});

// Displaying daily book from a JSON file
fetch("dailybook.json").then(function(response){
	return response.json();
})
.then(function(products){
	let books = document.querySelector("#dailybook .content");
	let out = "";
	for(let product of products){
		out += `
            <div class="box">
                <div class="image"><img src="${product.img}" alt="${product.author}/${product.title}"></div>
                <div class="info">
                    <div class="title">${product.title}</div>
                    <div class="author">${product.author}</div>
                    <div class="price">${product.price} <span>${product.discount}</span></div>
                    <div class="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <p>Kiedy Thomas budzi się w windzie, pamięta tylko swoje imię. Otaczają go nieznajomi – chłopcy, których wspomnienia również zniknęły.
                       <br><br>Poza wysokimi kamiennymi ścianami, które ich otaczają, znajduje się bezkresny, nieustannie zmieniający się labirynt. To jedyna droga ucieczki — a nikt nigdy nie wyszedł z niego żywy.</p>
                    <div class="btn"><button><i class="fa-solid fa-cart-plus"></i> Dodaj do koszyka</button></div>
                    <div class="btn"><button><i class="fa-solid fa-heart"></i> Dodaj do ulubionych</button></div>
                </div>
            </div>
		`;
	}

	books.innerHTML = out;
});




// Books slider
// function scroll_l() {
//     let left = document.querySelector(".boxes");
//     left.scrollBy(-600, 0);
// }

// function scroll_r() {
//     let right = document.querySelector(".boxes");
//     right.scrollBy(600, 0);
// }

let boxes = document.querySelector(".content .boxes");
let prevBtn = document.querySelector(".sliderbtn.pre")
let nextBtn = document.querySelector(".sliderbtn.next")

prevBtn.addEventListener("click", () => {
    boxes.scrollBy(-600, 0);
})
nextBtn.addEventListener("click", () => {
    boxes.scrollBy(600, 0);
})