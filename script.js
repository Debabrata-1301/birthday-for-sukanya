/*
  ============================================================
  PHOTO SETUP
  ============================================================
  Put your photographs inside: assets/photos/
*/

const photos = [
  {
    src: "assets/photos/IMG_20201114_201632.jpg",
    caption: "How IT Started.!!!!!!❤️❤️❤️"
  },
  {
    src: "assets/photos/IMG_BKP_WP.jpeg",
    caption: "How it is going!!!!!!!!!!!!!!!!!!❤️❤️❤️"
  },
  {
    src: "assets/photos/20240113_195111.jpg",
    caption: "Some photographs capture a moment. This one brings back the whole feeling."
  },
  {
    src: "assets/photos/20250125_103957.jpg",
    caption: "One of my favourite memories ❤️"
  },
  {
    src: "assets/photos/20250125_160753.jpg",
    caption: "That day we laughed way too much."
  },
  {
    src: "assets/photos/20250308_213744.jpg",
    caption: "Life is a little more fun when you're around.😂😂"
  },
  {
    src: "assets/photos/20240126_195902.jpg",
    caption: "Proof that we have had our fair share of nonsense. 😂"
  },
  {
    src: "assets/photos/20240325_130828.jpg",
    caption: "More laughter, more adventures, more ridiculous memories ahead. 🥂✨"
  },
  {
    src: "assets/photos/20250415_203842.jpg",
    caption: "My Biriyani Pagluuu ❤️❤️❤️."
  },
  {
    src: "assets/photos/20231225_185748.jpg",
    caption: "Same madness, different day. 😌😂"
  },
  {
    src: "assets/photos/20231019_194456.jpg",
    caption: "Some photographs capture a moment. This one brings back the whole feeling."
  },
  {
    src: "assets/photos/20250824_203040.jpg",
    caption: "Keep smiling like this. It suits you. 🌷"
  },
  {
    src: "assets/photos/20250928_203509.jpg",
    caption: "A Little Moment Worth Keeping"
  },
  
  {
    src: "assets/photos/20250929_213859.jpg",
    caption: "Another year older, but thankfully still the same crazy person. 😌❤️"
  },
  {
    src: "assets/photos/20250125_163421.jpg",
    caption: "Here's to everything we've already been through… and everything still waiting for us."
  }
];


// ============================================================
// PHOTO SLIDESHOW
// ============================================================

let currentPhoto = 0;

const sliderImage = document.getElementById("sliderImage");
const photoCaption = document.getElementById("photoCaption");
const photoCounter = document.getElementById("photoCounter");
const sliderDots = document.getElementById("sliderDots");


// Show selected photo
function showPhoto(index) {

  // Loop back when reaching beginning/end
  currentPhoto = (index + photos.length) % photos.length;

  const photo = photos[currentPhoto];

  // Fade out current image
  sliderImage.classList.remove("photo-visible");

  setTimeout(() => {

    // Change image
    sliderImage.src = photo.src;

    // Accessibility
    sliderImage.alt = photo.caption || "Memory";

    // Caption
    photoCaption.textContent = photo.caption || "";

    // Counter
    photoCounter.textContent =
      `${String(currentPhoto + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`;

    // Fade image in after it loads
    sliderImage.onload = () => {
      sliderImage.classList.add("photo-visible");
    };

    // Update active dot
    document.querySelectorAll(".slider-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentPhoto);
    });

  }, 120);
}


// ============================================================
// CREATE PHOTO DOTS
// ============================================================

photos.forEach((_, index) => {

  const dot = document.createElement("button");

  dot.className = "slider-dot";

  dot.setAttribute(
    "aria-label",
    `Go to photo ${index + 1}`
  );

  dot.addEventListener("click", () => {
    showPhoto(index);
  });

  sliderDots.appendChild(dot);
});


// ============================================================
// PREVIOUS / NEXT BUTTONS
// ============================================================

document
  .getElementById("prevPhoto")
  .addEventListener("click", () => {

    showPhoto(currentPhoto - 1);

  });


document
  .getElementById("nextPhoto")
  .addEventListener("click", () => {

    showPhoto(currentPhoto + 1);

  });


// ============================================================
// KEYBOARD NAVIGATION
// ============================================================

document.addEventListener("keydown", (event) => {

  if (event.key === "ArrowLeft") {

    showPhoto(currentPhoto - 1);

  }

  if (event.key === "ArrowRight") {

    showPhoto(currentPhoto + 1);

  }

});


// ============================================================
// MOBILE SWIPE
// ============================================================

let touchStartX = 0;

sliderImage.addEventListener(
  "touchstart",
  (event) => {

    touchStartX = event.changedTouches[0].screenX;

  },
  { passive: true }
);


sliderImage.addEventListener(
  "touchend",
  (event) => {

    const touchEndX =
      event.changedTouches[0].screenX;

    // Swipe left → next
    if (touchEndX < touchStartX - 50) {

      showPhoto(currentPhoto + 1);

    }

    // Swipe right → previous
    if (touchEndX > touchStartX + 50) {

      showPhoto(currentPhoto - 1);

    }

  },
  { passive: true }
);


// ============================================================
// START SLIDESHOW
// ============================================================

showPhoto(0);


// ============================================================
// SECRET MESSAGE
// ============================================================

const secretButton =
  document.getElementById("secretButton");

const secretMessage =
  document.getElementById("secretMessage");


secretButton.addEventListener("click", () => {

  // Reveal message
  secretMessage.hidden = false;

  // Change button
  secretButton.textContent = "You found it ❤️";

  secretButton.disabled = true;

  secretButton.style.opacity = ".65";

  // Heart animation
  burstHearts();

  // Scroll to secret
  secretMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});


// ============================================================
// FLOATING HEART ANIMATION
// ============================================================

function burstHearts() {

  for (let i = 0; i < 18; i++) {

    const heart =
      document.createElement("span");

    heart.textContent =
      Math.random() > 0.5 ? "♥" : "✦";

    heart.style.position = "fixed";

    heart.style.left =
      `${45 + Math.random() * 10}%`;

    heart.style.top =
      `${45 + Math.random() * 10}%`;

    heart.style.color = "#c85d70";

    heart.style.fontSize =
      `${12 + Math.random() * 20}px`;

    heart.style.zIndex = "9999";

    heart.style.pointerEvents = "none";

    heart.style.transition =
      "all 1.3s ease";

    document.body.appendChild(heart);


    requestAnimationFrame(() => {

      heart.style.transform =
        `translate(
          ${(Math.random() - 0.5) * 420}px,
          ${-100 - Math.random() * 300}px
        )
        rotate(${Math.random() * 180}deg)`;

      heart.style.opacity = "0";

    });


    setTimeout(() => {

      heart.remove();

    }, 1400);

  }

}