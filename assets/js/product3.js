/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwTVb4ZPNbJkIo2EYtPaepjf1JsAPdsox98o3r6HI-MGnqAZJz6fBHgafjbWe5CDSvwjw/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((Response) =>
      alert("شكرًا لك! لقد تم إرسال المعلومات الخاصة بك بنجاح")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error", error.message));
});
