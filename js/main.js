//Navigation bar effect on scroll

window.addEventListener("scroll",function()
{
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Experience Card 

const experienceModels = document.querySelectorAll(".work-card-content");
const learnMoreBtn = document.querySelectorAll(".learnMoreBtn");
const closeCardBtn = document.querySelectorAll(".work-card-closebtn")

var model = function(modalCLick){
    experienceModels[modalCLick].classList.add("active");
}

learnMoreBtn.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        model(i);
    });
});

closeCardBtn.forEach((closeCardBtn) => {
    closeCardBtn.addEventListener("click", () => {
        experienceModels.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Forms

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit",(e) => {
    e.preventDefault();
    
});

//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closebtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
});

closebtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem) =>{
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});