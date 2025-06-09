// index.js - purpose and description here
// Author: Your Name
// Date:

  const story = "Time didn’t slow down. It didn’t shatter. It stopped. Completely.\nYou now stand outside the river of time.\nStep carefully. The past will tempt you. The future will test you.\nBut remember—time only stopped because you touched it.";
  const textElement = document.getElementById("introText");
  const typeSound = document.getElementById("typeSound");
  const chimeSound = document.getElementById("chimeSound");
  const whooshSound = document.getElementById("whooshSound");
  let i = 0;

  function typeStory() {
    if (i < story.length) {
      if (story.charAt(i) !== "\n") {
        typeSound.currentTime = 0;
        typeSound.play().catch(e => {});
      }
      textElement.innerHTML += story.charAt(i) === "\n" ? "<br>" : story.charAt(i);
      i++;
      setTimeout(typeStory, 45);
    } else {
      setTimeout(() => {
        chimeSound.play().catch(e => {});
        document.getElementById("intro").style.display = "none";
        document.getElementById("cutscene").style.display = "flex";
        whooshSound.play().catch(e => {});
        setTimeout(() => {
          document.getElementById("cutscene").style.display = "none";
          showMainContent();
        }, 3000);
      }, 1000);
    }
  }

  function showMainContent() {
    document.querySelector(".title").style.display = "block";
    document.querySelector(".flex-container").style.display = "block";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      sessionStorage.setItem("hasSeenIntro", "true");

      // Hide main content
      document.querySelector(".title").style.display = "none";
      document.querySelector(".flex-container").style.display = "none";


      // Start intro on user interaction (required for autoplay sound)
      textElement.innerHTML = "Click anywhere to begin your journey...";
      document.body.addEventListener("click", () => {
        textElement.innerHTML = "";
        typeStory();
      }, { once: true });

    } else {
      document.getElementById("intro").style.display = "none";
      document.getElementById("cutscene").style.display = "none";
      showMainContent();
    }
  });

