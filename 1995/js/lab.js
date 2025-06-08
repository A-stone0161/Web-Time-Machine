// index.js - purpose and description here
// Author: Nadia Yasin
// Date: 9 June 2025
//Javascript for 1995-2005 Page

$(document).ready(function() {
    const yearData = {
        1995: {
            pop: "Toy Story was released – the first entirely computer-animated film.",
            news: "Oklahoma City bombing killed 168 people.",
            tech: "Windows 95 launched, and the internet began its boom.",
            imageSrc: "./img/newspaper.gif"
        },
        1996: {
            pop: "Macarena became a dance craze.",
            news: "Mad Cow disease panic in the UK.",
            tech: "DVDs were introduced; Nintendo 64 released."
        },
        1997: {
            pop: "Titanic hit theaters and broke records.",
            news: "Princess Diana tragically died in a car crash.",
            tech: "Wi-Fi standard was introduced."
        },
        1998: {
            pop: "Google was founded.",
            news: "Bill Clinton was impeached by the House.",
            tech: "Apple released the iMac G3."
        },
        1999: {
            pop: "The Matrix changed sci-fi forever.",
            news: "Y2K panic started growing.",
            tech: "Bluetooth launched; Napster debuted."
        },
        2000: {
            pop: "Reality TV took off with Survivor.",
            news: "Bush v. Gore U.S. presidential election.",
            tech: "Dot-com bubble burst."
        },
        2001: {
            pop: "Harry Potter film franchise began.",
            news: "9/11 attacks reshaped global politics.",
            tech: "Apple launched iPod; Wikipedia was created."
        },
        2002: {
            pop: "American Idol premiered.",
            news: "Euro became the official currency in 12 EU countries.",
            tech: "Friendster launched, early social media starts."
        },
        2003: {
            pop: "Finding Nemo became a box office hit.",
            news: "U.S. invaded Iraq.",
            tech: "MySpace launched."
        },
        2004: {
            pop: "Mean Girls became a cultural reference point.",
            news: "Facebook was founded.",
            tech: "Gmail was introduced by Google."
        },
        2005: {
            pop: "YouTube was founded.",
            news: "Hurricane Katrina devastated New Orleans.",
            tech: "Xbox 360 released; Google Maps launched."
        }
    };

    $('#year-select').on('change', function() {
        const selectedYear = $(this).val();
        if (yearData[selectedYear]) {
            $('#info-year').text(selectedYear);
            $('#pop-culture').text(yearData[selectedYear].pop);
            $('#news').text(yearData[selectedYear].news);
            $('#technology').text(yearData[selectedYear].tech);
            $('#year-info').fadeIn();

        const imgElement = $('<img>');
            imgElement.attr('src', yearData[selectedYear].imageSrc);

          $('#year-info img').remove();
          $('#year-info').append(imgElement);

        } else {
            $('#year-info').hide();
        }
    });

    $('#year-info').hide(); 
});



//change the background image of the site 
function changeBackgroundImage(button) {
    document.body.style.backgroundImage = "url('./img/HD-Windows-XP-Wallpaper-Backgrounds.jpg')";
    //hide the button after its clicked
    button.style.display = "none";
}


var clicked = false;

function firstButtonClicked() {
    clicked = true;
    document.getElementById('second-button').style.display = 'inline';
    document.getElementById('starter-text').style.display = 'none';
    document.getElementById('desktop-icons').style.display = 'inline';
    
}

var clicked2 = false;

function contentButtonClicked() {
    clicked2 = true;
    // document.getElementById('desktop-icons').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    console.log("Content display:", document.getElementById('content').style.display);
    // document.getElementById('content').style.backgroundColor = 'yellow';
}





