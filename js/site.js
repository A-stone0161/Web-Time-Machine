// index.js - purpose and description here
// Author: Your Name
// Date:

const story = "Time didn’t slow down. It didn’t shatter. It stopped. Completely.\nYou now stand outside the river of time.\nStep carefully. The past will tempt you. The future will test you.\nBut remember—time only stopped because you touched it.";
    const textElement = document.getElementById("introText");
    let i = 0;

    function typeStory() {
      if (i < story.length) {
        textElement.innerHTML += story.charAt(i) === '\n' ? "<br>" : story.charAt(i);
        i++;
        setTimeout(typeStory, 45);
      } else {
        setTimeout(() => {
          document.getElementById("intro").style.display = "none";
          document.getElementById("cutscene").style.display = "flex";
          setTimeout(() => {
            document.getElementById("cutscene").style.display = "none";
            showMainContent();
            startRobot();
          }, 3000);
        }, 1000);
      }
    }

    function showMainContent() {
      document.querySelector(".title").style.display = "block";
      document.querySelector(".flex-container").style.display = "block";
    }

    function startRobot() {
      const robot = document.getElementById("robot-helper");
      const speech = document.getElementById("speech-bubble");

      const messages = [
        "Welcome, human, to the time machine!",
        "I can't tell if you're replying back, so I'm just going to assume you are.",
        "I'll just be here if you need me... just kidding! I'm everywhere.",
        "Hope you're ready to relive the chaos of the early 2000s.",
        "I was built in 2005. I know things.",
        "This machine runs on nostalgia and dial-up sounds."
      ];

      function showMessage() {
        const random = messages[Math.floor(Math.random() * messages.length)];
        speech.textContent = random;
        speech.style.display = "block";
        setTimeout(() => {
          speech.style.display = "none";
        }, 5000);
      }

      robot.style.display = "block";
      showMessage();
      setInterval(showMessage, 12000);
    }

    document.addEventListener("DOMContentLoaded", () => {
      const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

      if (!hasSeenIntro) {
        sessionStorage.setItem("hasSeenIntro", "true");
        document.querySelector(".title").style.display = "none";
        document.querySelector(".flex-container").style.display = "none";
        typeStory();
      } else {
        document.getElementById("intro").style.display = "none";
        document.getElementById("cutscene").style.display = "none";
        showMainContent();
        startRobot();
      }
    });