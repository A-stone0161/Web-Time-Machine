// index.js - 2015 web time machine
// Author: Sophia McClanahan
// Date: 6/9/2025

document.querySelectorAll('.tabs a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.tabs a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});


const allSections = ['politics', 'tech', 'culture'];

function showCategory(id) {
  allSections.forEach(section => {
    const sectionEl = document.getElementById(section);
    if (sectionEl) {
      sectionEl.style.display = (section === id) ? 'block' : 'none';
    }
  });
}

const eventsData = {
  politics: [
    {
      title: "Same-Sex Marriage Legalized in the U.S.",
      description: "The U.S. Supreme Court legalized same-sex marriage nationwide.",
      quote: `"LETS GO GAYS." — #LoveWins`,
      img: "img/2015marriage.jpg"
    },
    {
      title: "European Refugee Crisis",
      description: "Over 1 million migrants entered Europe amid conflicts in the Middle East.",
      quote: `"We are witnessing a refugee crisis of a magnitude not seen since WWII." — UNHCR official`,
      img: "img/2015refugee.webp"
    },
    {
      title: "Paris Terror Attacks",
      description: "Coordinated attacks in Paris killed 130+ people; ISIS claimed responsibility.",
      quote: `"We are at war." — French President François Hollande`,
      img: "img/ParisAttacks.jpg"
    }
  ],
  tech: [
    {
      title: "Tesla Autopilot Released",
      description: "Tesla launched semi-autonomous driving in its cars.",
      quote: `"The future just arrived, and it’s electric." — Elon Musk`,
      img: "img/teslaautopilot.jpg"
    },
    {
      title: "Apple iPhone 6s Released",
      description: "Apple introduced 3D Touch and Live Photos.",
      quote: `"It's like the phone is reading my mind." — Tech reviewer, 2015`,
      img: "img/iphone6s.webp"
    },
    {
      title: "Twitter Adds Heart Button",
      description: "The 'Favorite' star became a 'Like' heart icon on Twitter.",
      quote: `"It’s a heart, people. Not a soul." — Tweet from @internetuser`,
      img: "img/twitterhearts.webp"
    }
  ],
  culture: [
    {
      title: "Drake's 'Hotline Bling'",
      description: "The music video sparked a massive meme craze.",
      quote: `"Ever since I left the city, you..." — Everyone on Vine`,
      img: "img/drakememe.jpg"
    },
    {
      title: "Zayn Malik Leaves One Direction",
      description: "Pop music shock as Zayn announces departure.",
      quote: `"I want to be a normal 22-year-old." — Zayn Malik`,
      img: "img/onedirection.jpg"
    },
    {
      title: "'Empire' Dominates TV",
      description: "The show breaks ratings records and becomes a cultural phenomenon.",
      quote: `"You want Cookie? You can’t handle Cookie." — Cookie Lyon`,
      img: "img/empire.jpg"
    }
  ]
};

function createCards(category) {
  const container = document.getElementById(`${category}-container`);
  if (!container) return;

  eventsData[category].forEach((event, index) => {
    const card = document.createElement('div');
    card.className = 'event-card';

    const quoteId = `${category}-quote-${index}`;
    const imgId = `${category}-img-${index}`;

    card.innerHTML = `
      <div class="event-title">${event.title}</div>
      <div class="event-description">${event.description}</div>
      <div class="quote-box" id="${quoteId}" style="display: none;">${event.quote}</div>
      <img src="${event.img}" class="event-image" id="${imgId}" alt="${event.title}">
    `;

    card.addEventListener('click', () => {
      const quoteEl = document.getElementById(quoteId);
      const imgEl = document.getElementById(imgId);
      const isVisible = quoteEl.style.display === 'block';

      quoteEl.style.display = isVisible ? 'none' : 'block';
      imgEl.style.display = isVisible ? 'block' : 'none';
    });

    container.appendChild(card);
  });
}

['politics', 'tech', 'culture'].forEach(createCards);
