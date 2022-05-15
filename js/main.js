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

//Contact Form 

(function() {
    emailjs.init('HgYSTPQZXeYxPuJc_');
    console.log(emailjs);
})();

function sendmail(){

    let form_name = document.getElementById("form_name").value;
    let form_email = document.getElementById("form_email").value;
    let form_sub = document.getElementById("form_subject").value;
    let form_mesg = document.getElementById("form_message").value;

        var contactParams = {
            from_name: form_name,
            from_email: form_email,
            subject: form_sub,
            message: form_mesg
        };
        
    emailjs.send('service_c9xsmai','contact_form',contactParams).then(function(res){});
}