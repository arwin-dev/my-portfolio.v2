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