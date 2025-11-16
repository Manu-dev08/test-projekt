// Glatko skrolanje na sekciju
function scrollToSection(id) {
const element = document.getElementById(id);
if (element) {
element.scrollIntoView({ behavior: "smooth" });
}
}

// Logika za kontakt formu
const form = document.getElementById("contact-form");
const messageBox = document.getElementById("contact-message");

if (form && messageBox) {
form.addEventListener("submit", function (event) {
event.preventDefault(); // spriječi reload stranice

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

// Minimalna provjera – da nisu prazna polja
if (!name || !email || !message) {
messageBox.textContent = "Molim te, ispuni sva polja.";
messageBox.className = "contact-message error";
return;
}

// „Fake“ uspješna poruka
messageBox.textContent = `Hvala, ${name}! Tvoja poruka je zabilježena (za sada samo lokalno).`;
messageBox.className = "contact-message success";

form.reset();
});
}
