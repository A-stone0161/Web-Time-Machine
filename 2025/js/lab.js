// index.js - purpose and description here
// Author: Your Name
// Date:

$(document).ready(function() {
    // button
    $("#head").append("<button class='button-special'>Change Theme</button>");

    // Add click listener to theme
    $(document).on("click", ".button-special", function () {
        $("body").toggleClass("special");
    });
    
});

