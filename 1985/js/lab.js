// index.js - purpose and description here
// Author: Sophia McClanahan
// Date: 6/9/2025

  const allSections = ['politics', 'tech', 'culture'];

  function showCategory(id) {
    allSections.forEach(section => {
      document.getElementById(section).style.display = (section === id) ? 'block' : 'none';
    });
  }

  const eventsData = {
    politics: [
      {
        title: "Fall of the Berlin Wall - 1989",
        description: "East Germany allowed that citizens could freely cross the Berlin Wall marking a symbolic end to the Cold War and the dismantling of the wall.",
        quote: `"As far as I know, effective immediately, without delay..." -Günter Schabowski`,
        img: "img/berlinwall.jpg"
      },
      {
        title: "Gulf War - 1990-1991",
        description: "US led Operation Desert Storm liberated Kuwait and demonstrated military dominance.",
        quote: `"This will not stand, this aggression against Kuwait." -George H. W. Bush`,
        img: "img/gulfwar.jpg"
      },
      {
        title: "Dissolution of the Soviet Union -1991",
        description: "The real end of the Cold War, the Soviet Union was dismantled leaving 15 separate countries. This left the US as the worlds lone superpower.",
        quote: `"The old system collapsed before the new one had time to begin working." -Mikhail Gorbachev, resignation speech`,
        img: "img/soviet.webp"
      }
    ],
    tech: [
      {
        title: "Rise of the Web - 1989-1991",
        description: "Proposed in 1989, and implemented in the early 90s, the World Wide Web changed how information could be shared and consumed.",
        quote: `"This is for everyone." -Tim Berners-Lee`,
        img: "img/www.jpg"
      },
      {
        title: "Human Genome Project Begins - 1990",
        description: "Aimed at mapping human genes, this project took a great step toward better health practices and more knowledge about humans.",
        quote: `"The Human Genome Project is the most important, most wondrous map ever produced by humankind." -Francis Collins`,
        img: "img/dna.jpg"
      },
      {
        title: "Rise of Mobile Phones - 1991",
        description: "Companies like Motorola, Nokia, and others began pushing out and advertising mobile phones claiming them to be 'neccessary'.",
        quote: `"The cellphone has transformed from a luxury into a necessity." -Martin Cooper, father of the mobile phone`,
        img: "img/phones.jpg"
      }
    ],
    culture: [
      {
        title: "The Simpsons Premiere - 1989",
        description: "The first episode of the influential comedy aires on FOX.",
        quote: `"D’oh!" -Homer Simpson`,
        img: "img/simpsons.webp"
      },
      {
        title: "Michael Jackson’s Super Bowl Halftime Show - 1993",
        description: "One of the most watched shows of all time which influenced future artists and their superbowl performances.",
        quote: `"I'm starting with the man in the mirror..." -Michael Jackson`,
        img: "img/mjhalftime.webp"
      },
      {
        title: "Release of Jurassic Park - 1993",
        description: "The release of this thriller paved the way for effects, CGI and animatronics for future productions.",
        quote: `"Your scientists were so preoccupied with whether or not they could, they didn’t stop to think if they should." -Dr. Ian Malcolm (Jeff Goldblum)`,
        img: "img/jurrasicpark.webp"
      }
    ]
  };

  function createCards(category) {
    const container = document.getElementById(`${category}-container`);
    eventsData[category].forEach((event, index) => {
      const card = document.createElement('div');
      card.className = 'event-card';
      const quoteId = `${category}-quote-${index}`;
      const imgId = `${category}-img-${index}`;

      card.innerHTML = `
        <div class="event-title">${event.title}</div>
        <div class="event-description">${event.description}</div>
        <div class="quote-box" id="${quoteId}">${event.quote}</div>
        <img src="${event.img}" class="event-image" id="${imgId}" alt="${event.title}">
      `;

      card.addEventListener('click', () => {
        const quoteEl = document.getElementById(quoteId);
        const imgEl = document.getElementById(imgId);
        const isVisible = quoteEl.style.display === 'block';
        quoteEl.style.display = isVisible ? 'none' : 'block';
        imgEl.style.display = isVisible ? 'none' : 'block';
      });

      container.appendChild(card);
    });
  }

  // Run on load
  ['politics', 'tech', 'culture'].forEach(createCards);
