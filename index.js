
var slideIndex = 1;
window.onload = function() {
  showSlides(1);
};
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}
function open_nav(x) {
  x.classList.toggle("change");
  if (x.classList.contains("change")){
      /* Close-nav */
      document.getElementById("mySidenav").style.width = "270px";
      document.getElementById("main").style.marginLeft = "270px";    
  }
  else{
      /* open-nav */ 
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
  }
}
