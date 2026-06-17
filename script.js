function searchCards() {

let query = document
.getElementById("searchInput")
.value
.toLowerCase()
.trim();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(query) || query === ""){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}

/* Smooth page fade-in */

document.addEventListener("DOMContentLoaded", () => {

document.body.style.opacity = "0";

setTimeout(() => {
document.body.style.transition = "opacity 0.8s ease";
document.body.style.opacity = "1";
}, 100);

});

/* Scroll animations */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".card").forEach(card => {
observer.observe(card);
});

document.getElementById("topBtn").onclick = () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

};
