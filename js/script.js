// ... navbar....

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
    personform.classList.remove('active');

}
// ... cart-item....
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    personform.classList.remove('active');
    navbar.classList.remove('active');
  

}
// ...search-form...

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    personform.classList.remove('active');
}
// ... person-form ...
let persondetails = document.querySelector('.person-form');

document.querySelector('#person-btn').onclick = () =>{
    persondetails.classList.toggle('active');
   
    
  }




window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
    personform.classList.remove('active');

}


const showPopupBtn = document.querySelector("#person-btn");
const personForm = document.querySelector(".person-form");
const hidePopupBtn = document.querySelector(".person-form #close-btn");
const LoginSignupLink = document.querySelectorAll(".form .bottom-link a");
// show form popup
showPopupBtn.addEventListener("click",() => {
    document.body.classList.toggle("show-popup");
});
// Hide form popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

LoginSignupLink.forEach(link => {
link.addEventListener("click", (e) => {
e.preventDefault();
 personForm.ClassList[link.id === "signup-link" ? 'add' : 'remove']("show-sign-up");

});
});
