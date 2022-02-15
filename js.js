


// -------------------OPEN AND CLOSE MODAL ------------------ //
const education = document.getElementById("openedModal_Education")
// ^ the modal div itself within the main overlay container 

const openEducation = document.getElementById("openModalButton")
// ^ the button to open the modal 


const overlayContainer = document.getElementById("overlay")
// ^the main overlay container 








openEducation.addEventListener("click", function () { 
    overlayContainer.style.display = "block"
    // document.querySelector("body").style.overflow = 'hidden';


})

// function openModal () {
//     overlayContainer.style.display = "block"
// }



const closeEducation = document.getElementById("closeModalButton")

closeEducation.addEventListener("click", function () {
    overlayContainer.style.display = "none"
    // document.querySelector("body").style.overflow = 'visible';

})

// function closeModal () {
//     overlayContainer.style.display = "none"
// }









// document.getElementById("open-modal").addEventListener("click", function() {
//     document.getElementById("overlay").style.display = "block";
// })


// document.getElementById("close-modal").addEventListener("click", function() {
//     document.getElementById("overlay").style.display = "none"

// -------------------CARASOUL ------------------ //





const slides = document.getElementsByClassName("carousel-item")
const next = document.getElementById("carousel-button-next")
const prev = document.getElementById("carousel-button-prev")
const totalSlides = slides.length 
let slidePosition = 0

next.addEventListener("click", moveToNextSlide)

prev.addEventListener("click", moveToPrevSlide)




function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}



