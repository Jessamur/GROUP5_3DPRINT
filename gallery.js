const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        //slide.classList.remove("active");
    }); 
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });
   
    slideNumber++;

    if(slideNumber > (numberOfSlides -1)) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });
   
    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            //slide.classList.remove("active");
        }); 
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });
   
        slideNumber++;

        if(slideNumber > (numberOfSlides -1)) {
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });

            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 3000);//4000);
}
repeater();

//Pause autoplay on hover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

//Resume autoplay when no longer hovering
slider.addEventListener("mouseout", () => {
    repeater();    
})

/*var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 9){
    counter = 1;
  }
}, 5000);*/