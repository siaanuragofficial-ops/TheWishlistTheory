/* =========================
   SEARCH FUNCTION
========================= */

function searchCards() {

const searchInput = document.getElementById("searchInput");

if(!searchInput) return;

let query = searchInput.value
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

/* Search on Enter Key */

document.addEventListener("DOMContentLoaded", () => {

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keypress", function(event){

if(event.key === "Enter"){
searchCards();
}

});

}

});

/* =========================
   PAGE FADE IN
========================= */

document.addEventListener("DOMContentLoaded", () => {

document.body.style.opacity = "0";

setTimeout(() => {

document.body.style.transition = "opacity 0.8s ease";

document.body.style.opacity = "1";

},100);

});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
});

document.querySelectorAll(".card").forEach(card => {

observer.observe(card);

});

});

/* =========================
   BACK TO TOP BUTTON
========================= */

document.addEventListener("DOMContentLoaded", () => {

const topBtn = document.getElementById("topBtn");

if(!topBtn) return;

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

topBtn.style.display = "block";

}
else{

topBtn.style.display = "none";

}

});

topBtn.style.display = "none";

topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

});

/* =========================
   ACTIVE NAV LINK
========================= */

document.addEventListener("DOMContentLoaded", () => {

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link => {

const href = link.getAttribute("href");

if(href === currentPage){

link.style.color = "#60a5fa";

}

});

});

/* =========================
   HEADER SCROLL EFFECT
========================= */

document.addEventListener("DOMContentLoaded", () => {

const header = document.querySelector("header");

if(!header) return;

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background =
"rgba(17,24,39,0.95)";

header.style.backdropFilter =
"blur(10px)";

}
else{

header.style.background =
"#111827";

}

});

});

/* =========================
   FLOATING BUTTON GLOW
========================= */

document.addEventListener("DOMContentLoaded", () => {

const topBtn = document.getElementById("topBtn");

if(!topBtn) return;

setInterval(() => {

topBtn.animate(
[
{ transform: "scale(1)" },
{ transform: "scale(1.08)" },
{ transform: "scale(1)" }
],
{
duration: 2000
}
);

},2500);

});
