//////////////////////////////////////////////////// Mobile Nav Bar////////////////////////////////////////////////////////////
$(document).ready(function () {
  $('.sidenav').sidenav();
});

/////////////////////////////////////////////////// Slide Show Javascript////////////////////////////////////////////////////////
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

///////////////////////////////////////////////////////Submit button of form/////////////////////////////////////////////////////////////
$(document).ready(function () {
  $('select').formSelect();
});

$("#submit-btn").on("click", function (event) {
  event.preventDefault();
  $("#links").empty();
  var genre = $("#select-categories :selected").val();
  var year=$("#select-year :selected").val();
  var platform=$("#select-platform :selected").val();
  var queryURL = "https://api.rawg.io/api/games?page_size=5&genres=" + genre + "&ordering=-rating&dates="+year+"-01-01,"+year+"-12-31&parent_platforms="+platform;


//////////////////////////////////////////////API of Categories////////////////////////////////////////////////////////////////////////

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {

      console.log(response);
      for (let index = 0; index < 5; index++) {
        var name = response.results[index].name;
        
        let game = $("<div>");
        let trailerp = $("<p>")
        let trailer = $("<a>");
        game.css("color","white")
        game.css("font-size","20px")
        game.text("Game#"+(index+1)+": "+response.results[index].name);
        if (response.results[index].clip != null) {
          trailerp.text(" click on the follow url to watch the trailer:  ")
          trailerp.css("font-size", "15px")
          trailerp.append(trailer);
          trailer.html(response.results[index].clip.clips.full);
          trailer.attr("target", "_blank")
          trailer.attr("href", response.results[index].clip.clips.full)
          trailer.css("font-size","15px")
          game.append(trailerp);
        }

        $("#links").append(game);


      }

      
    });

})

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});