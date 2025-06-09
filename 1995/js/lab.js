// index.js - purpose and description here
// Author: Nadia Yasin
// Date: 9 June 2025
//Javascript for 1995-2005 Page

$(document).ready(function() {
    const yearData = {
        1995: {
            pop: "Toy Story was released and it was the first entirely computer-animated film.",
            news: "Oklahoma City bombing killed 168 people.",
            tech: "Windows 95 launched, and the internet began its boom.", 
            imageSrcs: {
                pop: './img/windows-xp-star-folder.png',
                news: './img/windows-xp-folders-icon-page.png',
                tech: './img/closebuttonicon.png'
            }
        },
        1996: {
            pop: "Macarena became a dance craze.",
            news: "Mad Cow disease panic in the UK.",
            tech: "DVDs were introduced; Nintendo 64 released.",
            imageSrcs: {
                pop: './img/solitareicon.png',
                news: '../img/YouTube_logo_2005.svg',
                tech: './img/closebuttonicon.png'
            }
        },
        1997: {
            pop: "Titanic hit theaters and broke records.",
            news: "Princess Diana tragically died in a car crash.",
            tech: "Wi-Fi standard was introduced.",
            imageSrcs: {
                pop: './img/windows-xp-star-folder.png',
                news: '../img/YouTube_logo_2005.svg',
                tech: './img/closebuttonicon.png'
            }
        },
        1998: {
            pop: "Google was founded.",
            news: "Bill Clinton was impeached by the House.",
            tech: "Apple released the iMac G3.",
            imageSrcs: {
                pop: './img/windows-xp-star-folder.png',
                news: '../img/YouTube_logo_2005.svg',
                tech: './img/closebuttonicon.png'
            }
        },
        1999: {
            pop: "The Matrix changed sci-fi forever.",
            news: "Y2K panic started growing.",
            tech: "Bluetooth launched; Napster debuted.",
            imageSrcs: {
                pop: './img/windows-xp-star-folder.png',
                news: '../img/YouTube_logo_2005.svg',
                tech: './img/closebuttonicon.png'
            }
        },
        2000: {
            pop: "Reality TV took off with Survivor.",
            news: "Bush v. Gore U.S. presidential election.",
            tech: "Dot-com bubble burst.",
            imageSrcs: {
                pop: './img/windows-xp-star-folder.png',
                news: '../img/YouTube_logo_2005.svg',
                tech: './img/closebuttonicon.png'
            }
        },
        2001: {
            pop: "Harry Potter film franchise began.",
            news: "9/11 attacks reshaped global politics.",
            tech: "Apple launched iPod; Wikipedia was created.",
            imageSrcs: {
                pop: './img/windows-xp-star-folder.png',
                news: '../img/YouTube_logo_2005.svg',
                tech: './img/closebuttonicon.png'
            }
        },
        2002: {
            pop: "American Idol premiered.",
            news: "Euro became the official currency in 12 EU countries.",
            tech: "Friendster launched, early social media starts.",
            imageSrcs: {
                pop: './img/windows-xp-star-folder.png',
                news: '../img/YouTube_logo_2005.svg',
                tech: './img/closebuttonicon.png'
            }
        },
        2003: {
            pop: "Finding Nemo became a box office hit.",
            news: "U.S. invaded Iraq.",
            tech: "MySpace launched.",
            imageSrcs: {
                pop: './img/windows-xp-star-folder.png',
                news: '../img/YouTube_logo_2005.svg',
                tech: './img/closebuttonicon.png'
            }
        },
        2004: {
            pop: "Mean Girls became a cultural reference point.",
            news: "Facebook was founded.",
            tech: "Gmail was introduced by Google.",
            imageSrcs: {
                pop: './img/windows-xp-star-folder.png',
                news: '../img/YouTube_logo_2005.svg',
                tech: './img/closebuttonicon.png'
            }
        }
    }


  $('#year-select').on('change', function () {
    const selectedYear = $(this).val();

    if (yearData[selectedYear]) {
        const year = yearData[selectedYear];
        const imageSrcs = year.imageSrcs || {};

        $('#info-year').text(selectedYear);
        $('#pop-culture').text(year.pop);
        $('#news').text(year.news);
        $('#technology').text(year.tech);
        $('#year-info').fadeIn();

        // Remove previous images
        //Wesbot suggested I add some elements that remove the images after putting them in 
        $('#pop-culture').next('img').remove();
        $('#news').next('img').remove();
        $('#technology').next('img').remove();

        // Create new image elements
        const popImg = $('<img>').attr('src', imageSrcs.pop || './img/default_pop.png').addClass('info-img');
        const newsImg = $('<img>').attr('src', imageSrcs.news || './img/default_news.png').addClass('info-img');
        const techImg = $('<img>').attr('src', imageSrcs.tech || './img/default_tech.png').addClass('info-img');

        // Append images after each section
        $('#news').after(newsImg);
        $('#technology').after(techImg);
        $('#pop-culture').after(popImg);
    } else {
        $('#year-info').hide();
    }
});

    //old code(might need)
        // const imgElement = $('<img>');
        //     imgElement.attr('src', yearData[selectedYear].imageSrc);

        //   $('#year-info img').remove();
        //   $('#year-info').append(imgElement);

    //     } else {
    //         $('#year-info').hide();
    //     }
    // });

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
    document.getElementById('homepage-info').style.display = 'inline';
    document.getElementById('opening-computer').style.display = 'none';
    document.getElementById('computer-screen').style.display = 'none';
    
}

var clicked2 = false;

function contentButtonClicked() {
    clicked2 = true;
    document.getElementById('content').style.display = 'block';
     document.getElementById('homepage-info').style.display = 'none';

    // Re-show the close button
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.style.display = 'inline'; 
    }

    console.log("Content display:", document.getElementById('content').style.display);
}

var clicked3 = false;

function closeWindowButtonClicked() {
    clicked3 = true;
    document.getElementById('content').style.display = 'none';
    document.getElementById('second-button').style.display = 'inline';
}

var clicked4 = false;

function closeInfoButtonClicked() {
    clicked4 = true;
    document.getElementById('homepage-info').style.display = 'none';
}
