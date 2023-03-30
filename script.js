// function extend(){
//     console.log("Hello,world!");

// }
// extend();

// // using Es6 standard
// const funcName = () => {
//     console.log("Hello world!");

// }

// funcName();

// // to link an html to trigger the js


// main_btn.addEventListener("click", () => {
//     console.log("button works");

// })

// to link the function inside the event listener 


const main_btn = document.querySelector("#main-button");

const modal = document.querySelector("#modal");

const buttonFunc = () => {
    modal.classList.add("show");
}

main_btn.addEventListener("click",buttonFunc)

// to remove it
const modal_btn = document.querySelector("#modal-button");

const removeMod = () => {
    modal.classList.remove("show");
}

modal_btn.addEventListener("click",removeMod)
// using  toggle
const nav = document.querySelector("#navigation");
const burger = document.querySelector("#burger");

const navbar = () => {
    nav.classList.toggle("show");
    burger.classList.add("color");
}

burger.addEventListener("click",navbar);