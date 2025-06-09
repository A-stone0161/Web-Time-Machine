// index.js - purpose and description here
// Author: Emily Valdez
// Date: 6/7/25

const allSections = ['politics', 'tech', 'culture'];

function showCategory(id) {
  allSections.forEach(section => {
    document.getElementById(section).style.display = (section === id) ? 'block' : 'none';
  });
}

const eventsData = {
  politics: [
    {
      title: "Hurricane Katrina",
      description: "Hurricane Katrina devastated New Orleans, displacing hundreds of thousands.",
      quote: `"We’ve been stuck in Houston for days now... I miss home." — Anonymous evacuee`,
      img: "img/Hurricane-Katrina.webp"
    },
    {
      title: "London Bombings (7/7)",
      description: "Coordinated terrorist attacks on London transit shocked the world.",
      quote: `"We were stuck underground for what felt like forever." — Raj, 29, commuter`,
      img: "img/London Bombing.webp"
    },
    {
      title: "Live 8 Concerts Raise Global Awareness",
      description: "Massive concerts worldwide pushed G8 leaders to act on global poverty.",
      quote: `"We’re not asking for charity, we’re asking for justice." — Bono, Live 8`,
      img: "img/live8.png"
    }
  ],
  tech: [
    {
      title: "YouTube is Born",
      description: "The world’s biggest video platform launched in 2005.",
      quote: `"Just uploaded a cat clip... pretty cool!" — Student, CA`,
      img: "img/internet.webp"
    },
    {
      title: "Google Maps Launches",
      description: "Google Maps changed how we find places online.",
      quote: `"Zooming into my house like a spy—wild!" — Forum user, 2005`,
      img: "img/googlemap.webp"
    },
    {
      title: "Microsoft Releases Xbox 360",
      description: "Microsoft entered the next-gen console war with the Xbox 360.",
      quote: `"Graphics so real I thought I was in the game." — Gamer, GameFAQs forum`,
      img: "img/New-Xbox-360.webp"
    }
  ],
  culture: [
    {
      title: "Kanye Releases *Late Registration*",
      description: "A genre-defining album dropped August 2005.",
      quote: `"‘Gold Digger’ is inescapable and genius." — Blogger, MySpace`,
      img: "img/kanye.jpg"
    },
    {
      title: "*Brokeback Mountain* Sparks Talk",
      description: "Ang Lee’s film reshaped LGBTQ+ cinema visibility.",
      quote: `"First time I saw someone like me on screen." — Anonymous diary`,
      img: "img/brokebackmountain.jpg"
    },
    {
      title: "YouTube's First Viral Hit: 'Me at the Zoo'",
      description: "The first video uploaded to YouTube set the tone for a new era of content.",
      quote: `"The cool thing about these guys is that they have really, really long trunks." — Jawed`,
      img: "img/Youtube.jpg"
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

['politics', 'tech', 'culture'].forEach(createCards);
