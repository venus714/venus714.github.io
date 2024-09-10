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

const hello = document.getElementById("hello");
const sayHello = document.getElementById("btnHello");

// sayHello.addEventListener("click", function () {
//   hello.innerHTML = "Hello World";
// });

//     const scriptURL = '<https://script.google.com/macros/s/AKfycby9BOB7h81ekLxCnYaLepsqcpDJhttps://script.google.com/macros/s/AKfycbxWSmGPzKLetPu4YfgDWjQnu01HViEliDwRO2Ew2ICK6ggkUy2V_Xm4Dp_lmBaDS-Xb6g/exec8U_12df0QXJDyKb7/dev>'
//     const form = document.forms['submit-to-google-sheet']
  
//     form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => console.log('Success!', response))
//         .catch(error => console.error('Error!', error.message))
//     })
 // Function to initialize or update the counter
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

