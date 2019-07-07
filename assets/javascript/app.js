$(document).ready(function() {
    $("button").on("click", function() {
        var searchTerm = $(this).attr("data-search");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          searchTerm + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
  
            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div>");
  
              var rating = results[i].rating;
  
              var p = $("<p>").text("Rating: " + rating);
  
              var gifElement = $("<img>");
              gifElement.attr("src", results[i].images.fixed_height.url);
  
              gifDiv.prepend(p);
              gifDiv.prepend(gifElement);
  
              $("#gifs-appear-here").prepend(gifDiv);
            }
          });
      });

});