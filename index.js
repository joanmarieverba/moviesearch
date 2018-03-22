"use strict"

    // This .on("click") function will trigger the AJAX Call
    $("#find-movie").on("click", function (event) {

        // Preventing the submit button from trying to submit the form
        // We're optionally using a form so the user may hit Enter to search instead of clicking the button
        event.preventDefault();

    // Here we grab the text from the input box
    let movie = $("#movie-input").val();

        //clear previous input
        $("#movie-poster").empty();

    // Here we construct our URL
    let queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=a4010c8b";

    // request data from ODB
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function (response) {
        console.log(response);

            //clear previous input
            $("#title").empty();
            $("#year").empty();
            $("#actors").empty();
            $("#plot").empty();
            $("#rating").empty();

        $("#title").append(`Title: ${response.Title}`);
        $("#year").append(`Year: ${response.Year}`);
        $("#actors").append(`Actors: ${response.Actors}`);
        $("#plot").append(`Plot: ${response.Plot}`);
        $("#rating").append(`Rated: ${response.Rated}`);

        // Retrieving the URL for the image
        let imgURL = response.Poster;
        console.log ("response.Poster ", response.Poster);
        console.log ("imgURL ", imgURL);
        // Creating an element to hold the image
        let image = $("<img>").attr("src", imgURL);
        // Appending the image
        $("#movie-poster").append(image);
});

});