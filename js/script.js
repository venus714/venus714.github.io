const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

// Uncomment to activate "Hello World" feature
const hello = document.getElementById("hello");
const sayHello = document.getElementById("btnHello");

// sayHello.addEventListener("click", function () {
//   hello.innerHTML = "Hello World";
// });

// Form Submission to Google Sheets (Uncomment if needed)
// const scriptURL = 'YOUR_GOOGLE_SHEET_SCRIPT_URL_HERE';
// const form = document.forms['submit-to-google-sheet'];
  
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message));
// });

// Visitor Counter
function updateCounter() {
  // Get the current count from localStorage or initialize it to 0
  let count = localStorage.getItem('visitorCount') || 0;
  count = parseInt(count) + 1; // Increment the count by 1

  // Update the display element with the new count
  document.getElementById('visitor-counter').innerText = count;

  // Store the updated count back to localStorage
  localStorage.setItem('visitorCount', count);
}

// Call the function when the page loads
updateCounter();
