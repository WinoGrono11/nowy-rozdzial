const SERVICE_ID = "service_izikrkg";
const TEMPLATE_ID = "template_9spsxvi";
const PUBLIC_KEY = "wCFHI6wYiQQY9IQVM";

function toggleSection(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('kontaktForm').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
    .then(() => {
      alert("Wysłane. Dzięki za zaufanie.");
      this.reset();
    }, (error) => {
      alert("Błąd wysyłki: " + error.text);
    });
});

(function() {
  emailjs.init(PUBLIC_KEY);
})();
