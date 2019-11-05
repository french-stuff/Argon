// Mobile Nav Bar
$(document).ready(function(){
  $('.sidenav').sidenav();
});

// Slide Show Javascript
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Submit button of form
$(document).ready(function(){
  $('select').formSelect();
});

$("#submit-btn").on("click", function (event) {
  event.preventDefault();
  
  var genre =$("#select-categories :selected").val();
  
  var queryURL =  "https://api.rawg.io/api/games?page_size=5&genres="+genre;
            
  
   
  $.ajax({
     url: queryURL,
     method: "GET"
   })
     
     .then(function(response) {
  
      console.log(response);
      for (let index = 0; index < 5; index++) {
       var name= response.results[index].name
        console.log(name);
        let 
      }
     });

})