// Elements for Dark Mode Toggle
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

// Toggle Function
toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        moonIcon.style.opacity = "0";  // Hide moon
        sunIcon.style.opacity = "1";   // Show sun
    } else {
        moonIcon.style.opacity = "1";  // Show moon
        sunIcon.style.opacity = "0";   // Hide sun
    }
});


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Responsive Menu Function
function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}

/*--Typing Effect-- */

var typingEffect = new Typed(".typedText" ,{
    strings: ["Designer", "coder","Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

/*--scroll animation */

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

// Resume Download Alert
const downloadButton = document.querySelector('a[download]');

downloadButton.addEventListener('click', () => {
    alert('Your resume download will start shortly!');
});
