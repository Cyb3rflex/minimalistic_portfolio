AOS.init();

lottie.loadAnimation({
  container: document.getElementById("github-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "github.json",
});
lottie.loadAnimation({
  container: document.getElementById("linkedin-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "linkedin.json",
});
lottie.loadAnimation({
  container: document.getElementById("whatsapp-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "whatsapp.json",
});
// COPY MY EMAIL
document.getElementById("copyEmailBtn").addEventListener("click", function () {
  const email = "cybrflex@email.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy email: ", err);
    });
});

// FOR TESTIMONIAL SCROLL
document.addEventListener("scroll", function () {
  const container = document.getElementById("cards");
  const rect = container.getBoundingClientRect();
  if (rect.top < window.innerHeight / 1.2) {
    container.classList.add("active");
  } else {
    container.classList.remove("active");
  }
});

// for clicked cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    document
      .querySelectorAll(".card")
      .forEach((c) => c.classList.remove("active-card"));
    this.classList.add("active-card");
  });
});
