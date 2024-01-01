let filter = document.querySelectorAll(".filter");

filter.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("active");
    })
})