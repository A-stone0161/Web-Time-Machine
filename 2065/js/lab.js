// index.js - purpose and description here
// Author: Your Name
// Date:

// Add a button to each special-sections
$(".theme").append("<button class='button-special'>Change Theme</button>");
// Add a click listener for each Make Special button
$(".theme .button-special").click(function() {
    // add or remove the special class from its parent section.
    $(this).parent().toggleClass("special");
});
