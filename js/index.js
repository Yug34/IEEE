const eventSlide = document.querySelector(".events-slide");
const allEvents = document.querySelectorAll(".event");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const size = eventSlide.clientWidth;
let index = 1;

eventSlide.style.transform = `translateX(${-size * index}px)`;

nextBtn.onclick = () => {
  if (index >= allEvents.length - 1) return;
  eventSlide.style.transition = "transform 0.5s ease-in-out";
  index += 1;
  eventSlide.style.transform = `translateX(${-size * index}px)`;
};

prevBtn.onclick = () => {
  if (index <= 0) return;
  eventSlide.style.transition = "transform 0.5s ease-in-out";
  index -= 1;
  eventSlide.style.transform = `translateX(${-size * index}px)`;
};

eventSlide.addEventListener("transitionend", () => {
  if (allEvents[index].id === "last-clone") {
    eventSlide.style.transition = "none";
    index = allEvents.length - 2;
    eventSlide.style.transform = `translateX(${-size * index}px)`;
  } else if (allEvents[index].id === "first-clone") {
    eventSlide.style.transition = "none";
    index = allEvents.length - index;
    eventSlide.style.transform = `translateX(${-size * index}px)`;
  }
});
