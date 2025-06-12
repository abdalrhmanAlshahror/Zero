// Start Our-Skills
let skills = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills .parsints .prog span");

window.onscroll = function() {
    // Skills Width
    if (window.scrollY >= skills.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
        // Stats Number
        if (window.scrollY >= stats.offsetTop - 300) {
            if (!started) {
                nums.forEach((number) => startCount(number));
            }
            started = true;
        }
        }
        // Button Scroll To Top
        if (window.scrollY >= articles.offsetTop) {
            upButton.classList.add("show");
        }
        else {
            upButton.classList.remove("show");
        }
};
// End Our-Skills
// Start Stats
let nums = document.querySelectorAll(".stats .number");
let stats = document.querySelector(".stats");
let started = false;

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
// End Stats
// Start LATEST EVENTS
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
// Get Date Now
let dateNow = new Date().getTime();

// Find The Date Difference Between Now And Counterdown Date
let diffDate = countDownDate - dateNow;
// Get Time Unit
let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes =  Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
let secondes =  Math.floor((diffDate % (1000 * 60)) / (1000));

document.querySelector(".days").innerHTML = days;
document.querySelector(".houre").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes;
document.querySelector(".seconde").innerHTML = secondes;

if (diffDate < 0) {
    clearInterval(counter);
}
}, 1000)
// End LATEST EVENTS
// Start Button Scroll To Top
let upButton = document.querySelector(".up");
let articles = document.querySelector(".articles");

upButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
// End Button Scroll To Top