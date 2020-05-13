var arrowDown = document.querySelector(".fa-chevron-down");

var cardVH = document.querySelector(".FAQ-card");

var card1arrowUp = document.querySelector(".card1arrowUp");
var card1arrowDown = document.querySelector(".card1arrowDown");

var card2arrowUp = document.querySelector(".card2arrowUp");
var card2arrowDown = document.querySelector(".card2arrowDown");

var card3arrowUp = document.querySelector(".card3arrowUp");
var card3arrowDown = document.querySelector(".card3arrowDown");

var card4arrowUp = document.querySelector(".card4arrowUp");
var card4arrowDown = document.querySelector(".card4arrowDown");

var cardVH1 = document.querySelector(".card1");
var cardVH2 = document.querySelector(".card2");
var cardVH3 = document.querySelector(".card3");
var cardVH4 = document.querySelector(".card4");

//aloooooooooooooooot of functions

//card1
card1arrowDown.addEventListener("click", () => {
  card1arrowDown.style.display = "none";
  cardVH1.style.height = "700px";
  cardVH1.style.transition = ".5s";
  card1arrowUp.style.display = "inline-block";
});

card1arrowUp.addEventListener("click", () => {
  card1arrowUp.style.display = "none";
  cardVH1.style.height = "50px";
  cardVH1.style.transition = ".5s";
  card1arrowDown.style.display = "inline-block";
});

//card2
card2arrowDown.addEventListener("click", () => {
  card2arrowDown.style.display = "none";
  cardVH2.style.height = "250px";
  cardVH2.style.transition = ".5s";
  card2arrowUp.style.display = "inline-block";
});

card2arrowUp.addEventListener("click", () => {
  card2arrowUp.style.display = "none";
  cardVH2.style.height = "50px";
  cardVH1.style.transition = ".5s";
  card2arrowDown.style.display = "inline-block";
});

// //card3
card3arrowDown.addEventListener("click", () => {
  card3arrowDown.style.display = "none";
  cardVH3.style.height = "230px";
  card3arrowUp.style.display = "inline-block";
});

card3arrowUp.addEventListener("click", () => {
  card3arrowUp.style.display = "none";
  cardVH3.style.height = "50px";
  card3arrowDown.style.display = "inline-block";
});

//card4
card4arrowDown.addEventListener("click", () => {
  card4arrowDown.style.display = "none";
  cardVH4.style.height = "250px";
  card4arrowUp.style.display = "inline-block";
});

card4arrowUp.addEventListener("click", () => {
  card4arrowUp.style.display = "none";
  cardVH4.style.height = "50px";
  card4arrowDown.style.display = "inline-block";
});
