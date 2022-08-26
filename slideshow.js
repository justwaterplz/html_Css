/* 자동으로 이미지 슬라이딩하는 코드*/
var current = 0;
showSlides();

function showSlides(){
  var slides = document.querySelectorAll("#slides > img");
  //set every slide invisible
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  //move to next page
  current++;
  if(current > slides.length){
    current = 1;
  }
  slides[current-1].style.display = "block";
  // showSlides every 2 second
  setTimeout(showSlides,2000);

}