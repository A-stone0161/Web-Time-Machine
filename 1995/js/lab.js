// index.js - purpose and description here
// Author: Nadia Yasin
// Date: 9 June 2025
//Javascript for 1995-2005 Page

$(document).ready(function() {
    const yearData = {
        1995: {
            pop: "Toy Story was released and it was the first entirely computer-animated film. Toy Story proved CGI's commercial viability. With a budget over $30 million, the future of computer animation hinged on financial success. The film grossed $373 million worldwide, signaling CG's profit potential and paving the way for CGI dominance.",
            news: "Oklahoma City Bombing Incident. The bombing of the Alfred P. Murrah Federal Building in Oklahoma City on April 19, 1995 was the deadliest act of homegrown terrorism in U.S. history, resulting in the deaths of 168 people.",
            tech: "Windows 95 first launched. This was a major milestone in the evolution of personal computing, introducing a more user-friendly interface and significant improvements over its predecessor, Windows 3.1. This is where the internet began its boom.", 
            imageSrcs: {
                pop: './img/Infoimg/toystoryjpg.jpg',
                news: './img/Infoimg/oklahomabombing.webp',
                tech: './img/Infoimg/Windows95launch.jpg'
            }
        },
        1996: {
            pop: "Macarena became the hottest new dance. It became notable for its easily learned and reproduced dance moves and the 1993 song “Macarena” that inspired the choreography—became a staple of 1990s popular culture, dubbed by VH1 as the greatest one hit wonder of all time and the hottest dance craze to hit the United States since “The Twist” in the 1960s.",
            news: "Mad Cow disease ravenged the UK. The outbreak was linked to 232 human deaths and delivered a devastating blow to the British beef industry.",
            tech: "Nintendo 64 released was released. It ushered in a new era of gaming, one that still influences the field today. Before the Nintendo 64 (N64 for short) there were almost no high-quality 3D games on the market.",
            imageSrcs: {
                pop: './img/Infoimg/macarena.webp',
                news: './img/Infoimg/madcow.avif',
                tech: './img/Infoimg/n64.webp'
            }
        },
        1997: {
            pop: "Titanic hit theaters and broke records. The film's groundbreaking use of CGI revolutionized visual effects and set new standards for realism in cinema. The success of “Titanic” sparked a technological arms race in the film industry, pushing filmmakers to embrace digital effects and explore the potential of computer-generated imagery.",
            news: "Princess Diana's Death. Diana, princess of Wales, was known for her charm and charisma and for using her celebrity status to aid charitable causes. She tragically lost her life in a car crash that has since cause deacdes long consipracies.",
            tech: "Wi-Fi standard was introduced. 802.11-1997 was the first wireless standard in the family. This standard defined the protocol and compatible interconnection of data communication equipment in a local area network (LAN) using Carrier Sense Multiple Access protocol with Collision Avoidance.",
            imageSrcs: {
                pop: './img/Infoimg/titanic_movie.webp',
                news: './img/Infoimg/princessdiana.avif',
                tech: './img/Infoimg/wifi.jpg'
            }
        },
        1998: {
            pop: "Google was founded. It was the first ever multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce and consumer electronics.",
            news: "Bill Clinton was impeached by the House. After nearly 14 hours of debate, the House of Representatives approves two articles of impeachment against President Bill Clinton, charging him with lying under oath to a federal grand jury and obstructing justice. Clinton, the second president in American history to be impeached.",
            tech: "Apple released the iMac G3. The iMac G3 was the computer that saved Apple. This highly successful computer was optimized for education and web-surfing.",
            imageSrcs: {
                pop: './img/Infoimg/Google1998.png',
                news: './img/Infoimg/clinton.jpg',
                tech: './img/Infoimg/applem3.jpg'
            }
        },
        1999: {
            pop: "The Matrix changed sci-fi forever. The Matrix not only shifted audience expectations by setting a new benchmark with technology, but it altered our assumptions of what this genre could be, giving filmmakers a chance to create more serious storylines that could capture imaginations.",
            news: "Y2K panic started growing. This fear was that when clocks struck midnight on January 1, 2000, affected computer systems, unsure of the year, would fail to operate and cause massive power outages, transportation systems to shut down, and banks to close. Widespread chaos would ensue.",
            tech: "Bluetooth launched. It was the first hands-free mobile headset that earned the Best of show Technology Award at COMDEX. It was the first device that made connections between various types of electronic devices possible. ",
            imageSrcs: {
                pop: './img/Infoimg/matrix.jpg',
                news: './img/Infoimg/y2kpanic.webp',
                tech: './img/Infoimg/bluetooth.jpg'
            }
        },
        2000: {
            pop: "Reality TV took off with Survivor. It gained popularity because it seemed to be a depiction of an unscripted reality, and hence had a genuineness that other shows lacked. It then continued to gain popularity because there were dramatic amplifiers of contemporary opinions.",
            news: "Bush v. Gore U.S. presidential election. During balloting an automatic recount resulted in a victory for George W. Bush, but by a narrower margin, and candidate Al Gore requested manual recounts.",
            tech: "USB Drives were created. The invention revolutionized the computer industry. Compared to floppy disks and their CD successors, USB flash drives were smaller, faster, with far more data storage capacity and unlike their fragile predecessors, they couldn't be destroyed by a magnet or a mere scratch.",
            imageSrcs: {
                pop: './img/Infoimg/survior.jpg',
                news: './img/Infoimg/bush.jpg',
                tech: './img/Infoimg/usb-drive.jpg'
            }
        },
        2001: {
            pop: "Harry Potter film franchise began. These movies gained an increasingly large following due to the success of the book series. J.K. Rowling's books have sold over 500 million copies worldwide, making Harry Potter one of the best-selling book series in history.",
            news: "9/11 attacks reshaped global politics. The terrorist attacks on September 11, 2001, took the lives of nearly 3,000 people that morning and have taken many others since. September 11 ultimately led to significant changes in counterterrorism measures in the United States and throughout the world.",
            tech: "Wikipedia was created. Wikipedia became one of the largest open sources that was a widely accessible and free encyclopedia. This comprehensive written compendium contains information on all branches of knowledge.",
            imageSrcs: {
                pop: './img/Infoimg/Harry_Potter.jpg',
                news: './img/Infoimg/9-11.jpg',
                tech: './img/Infoimg/Wikipedia.jpg'
            }
        },
        2002: {
            pop: "American Idol premiered. American Idol has had a significant cultural impact on both the music industry and popular culture by launching the careers of numerous artists who have gone on to achieve great success. The show's format has influenced how talent is discovered and promoted, shifting more power to public opinion through voting.",
            news: "Euro became the official currency in 12 EU countries. This single currency offers many advantages, making it easier for companies to conduct cross-border trade, the economy becomes more stable, and consumers have more choice and opportunities.",
            tech: "Early social media starts. Social media platforms allow users to have conversations, share information and create web content. There are many forms included blogs, wikis, social networking sites, photo-sharing sites, instant messaging, video-sharing sites, podcasts, widgets and virtual worlds.",
            imageSrcs: {
                pop: './img/Infoimg/americanidol.webp',
                news: './img/Infoimg/euro-currency.webp',
                tech: './img/Infoimg/earlysocialmedia.jpeg'
            }
        },
        2003: {
            pop: "Finding Nemo became a box office hit. The movie became highly regarded as it highlights disabilities in a positive aspect. The film presents disability as a socially created concept, rather than a state of the body to which value judgments are assigned. In turn, this helped portray disability as an ingredient in cultural diversity.",
            news: "U.S. invaded Iraq. Iraq's alleged development of weapons of mass destruction, became a justification for invasion and a link between Saddam Hussein's government and terrorist organizations. This 'pushed' the Bush administration cast the Iraq war as part of the broader War on Terrorism.",
            tech: "MySpace launched. This site was a vibrant and highly customisable social networking platform that played a significant role in internet culture, particularly in the realm of music and entertainment. It was a place where people went to connect with friends, discover new music, and express their identity online.",
            imageSrcs: {
                pop: './img/Infoimg/nemo.webp',
                news: './img/Infoimg/iraq.jpg',
                tech: './img/Infoimg/myspace.webp'
            }
        },
        2004: {
            pop: "Mean Girls became a cultural reference point. This films has had a lasting legacy showcased the different cultures of high schools in America. It attempted to mirror society by capturing the nuances of adolescence and the inherent desire to belong.",
            news: "Facebook was founded. Facebook revolutionized the way people connect and communicate. It was not only a social media platform but a global hub where thousands of users could exchange ideas, share life moments, and engage with content from every corner of the world.",
            tech: "Gmail was introduced by Google. Gmail become a cornerstone of email communication, offering a dynamic platform that caters to both personal and professional needs. Its societal integration changed the game for technological comunication in professional settings.",
            imageSrcs: {
                pop: './img/Infoimg/meangirls.webp',
                news: './img/Infoimg/facebook.jpg',
                tech: './img/Infoimg/gmail.jpg'
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
