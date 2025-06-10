// index.js - 2015 web time machine
// Author: Sophia McClanahan
// Date: 6/9/2025


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
      title: "Global Pandemic",
      description: "COVID-19 caused wide-spread illness, death, and disruption worldwide.",
      quote: `"It’s a scary time. We don’t want to add fuel to the fire. Good information won’t cure us, but it will help to calm us." — Pediatrics Professor Ruth Parker`,
      img: "img/covid.png"
    },
    {
      title: "Russia Invades Ukraine",
      description: "Russian President Putin orders Russian forces to launch a full-scale invasion on their neighbor.",
      quote: `"Wait for us, we will definitely all come back." — Unnamed Ukrainian Soldier.`,
      img: "img/ukraine.png"
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
      title: "3D Printing: Metal",
      description: "Manufacturing metal parts has never been more easy.",
      quote: `"3D printing will massively reduce the cost of certain products as the cost of labor is removed." — Peter Diamandis`,
      img: "img/metal.png"
    },
    {
      title: "The Rise of Artificial Intelligence",
      description: "AI transitioned from research labs into various everyday technologies.",
      quote: `"Some people call this artificial intelligence, but the reality is this technology will enhance us. So instead of artificial intelligence, I think we’ll augment our intelligence." — Ginni Rometty`,
      img: "img/AI.png"
    }
  ],
  culture: [
    {
      title: "'Out of the Shadows'",
      description: "Michael Bay releases his second Teenage Mutant Ninja Turtles Movie.",
      quote: `"True acceptance comes from within." — Leonardo`,
      img: "img/tmnt.png"
    },
    {
      title: "Zayn Malik Leaves One Direction",
      description: "Pop music shock as Zayn announces departure.",
      quote: `"I want to be a normal 22-year-old." — Zayn Malik`,
      img: "img/onedirection.jpg"
    },
    {
      title: "Tensions Rise at the Oscars",
      description: "Will Smith walks on stage and slaps comedian Chris Rock across the face.",
      quote: `"Keep my wife's name out your fucking mouth!" — Will Smith`,
      img: "img/slappening.png"
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
