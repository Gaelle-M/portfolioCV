//Effet du body
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

//Effet de "à propos"
const target = document.getElementById("target");
let array = ["Créative", "Dynamique", "Autonome", "Passionnée", "Organisée", "Rigoureuse", "Réactive"];
let wordIndex = 0;
let letterIndex = 0;

// Body color
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#212a39";
    document.body.style.color = "#fefeff";
  } else {
    document.body.style.background = "#fefeffe6";
    document.body.style.color = "#212a39";
  }
});

//text anim
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 1200);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 1200);
    }
  }, 60);
};

loop();


