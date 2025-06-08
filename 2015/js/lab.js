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
        title: "Same-Sex Marriage Legalized in the U.S.",
        description: "The U.S. Supreme Court legalized same-sex marriage nationwide.",
        quote: `"Love won." — Social media hashtag #LoveWins`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/SCOTUS_Marriage_Equality_Decision_-_Celebration.jpg/640px-SCOTUS_Marriage_Equality_Decision_-_Celebration.jpg"
      },
      {
        title: "European Refugee Crisis",
        description: "Over 1 million migrants entered Europe amid conflicts in the Middle East.",
        quote: `"We are witnessing a refugee crisis of a magnitude not seen since WWII." — UNHCR official`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Migrants_on_the_move_from_Hungary_to_Austria_-_Hungarian-Austrian_border%2C_2015-09-04_%281%29.jpg/640px-Migrants_on_the_move_from_Hungary_to_Austria_-_Hungarian-Austrian_border%2C_2015-09-04_%281%29.jpg"
      },
      {
        title: "Paris Terror Attacks",
        description: "Coordinated attacks in Paris killed 130+ people; ISIS claimed responsibility.",
        quote: `"We are at war." — French President François Hollande`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Paris_attacks_memorial_Place_de_la_République_2015-11-16.jpg/640px-Paris_attacks_memorial_Place_de_la_République_2015-11-16.jpg"
      }
    ],
    tech: [
      {
        title: "Tesla Autopilot Released",
        description: "Tesla launched semi-autonomous driving in its cars.",
        quote: `"The future just arrived, and it’s electric." — Elon Musk`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tesla_Model_S_P85D.jpg/640px-Tesla_Model_S_P85D.jpg"
      },
      {
        title: "Apple iPhone 6s Released",
        description: "Apple introduced 3D Touch and Live Photos.",
        quote: `"It's like the phone is reading my mind." — Tech reviewer, 2015`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/IPhone_6s_Rose_Gold.svg/640px-IPhone_6s_Rose_Gold.svg.png"
      },
      {
        title: "Twitter Adds Heart Button",
        description: "The 'Favorite' star became a 'Like' heart icon on Twitter.",
        quote: `"It’s a heart, people. Not a soul." — Tweet from @internetuser`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Twitter_Logo.svg/640px-Twitter_Logo.svg.png"
      }
    ],
    culture: [
      {
        title: "Drake's 'Hotline Bling'",
        description: "The music video sparked a massive meme craze.",
        quote: `"Ever since I left the city, you..." — Everyone on Vine`,
        img: "https://upload.wikimedia.org/wikipedia/en/8/82/Drake_-_Hotline_Bling.png"
      },
      {
        title: "Zayn Malik Leaves One Direction",
        description: "Pop music shock as Zayn announces departure.",
        quote: `"I want to be a normal 22-year-old." — Zayn Malik`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Zayn_Malik_2015.jpg/640px-Zayn_Malik_2015.jpg"
      },
      {
        title: "'Empire' Dominates TV",
        description: "The show breaks ratings records and becomes a cultural phenomenon.",
        quote: `"You want Cookie? You can’t handle Cookie." — Cookie Lyon`,
        img: "https://upload.wikimedia.org/wikipedia/en/6/67/Empire_season_1_poster.jpg"
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
