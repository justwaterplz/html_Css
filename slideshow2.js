var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;
var maxLength = slides.length;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n){
    // set every image invisible
    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    // then set nth image visible
    slides[n].style.display = "block";
}

function prevSlide(){
    if(current > 0){
        current--;
    }
    // if image is slides[0] then it becomes slides[2]
    else{
        current = maxLength-1;
    }
    showSlides(current);
}

function nextSlide(){
    if(current < maxLength-1){
        current ++;
    }
    // when current is 2 it becomes 0
    else{
        current = 0;
    }
    showSlides(current);
}