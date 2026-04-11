// age
const year = new Date().getFullYear();
let age = year - 2005;

let ageID = document.getElementById("age");
ageID.innerHTML += age;


// EmailJS
(function () {
    emailjs.init("shRZw5YME1U8WcxQT");
})();
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_7mhfx4g", "template_99kl4cf", this)
        .then(() => {
            alert("Message sent!");
            this.reset();
        })
        .catch((err) => {
            console.error(err);
            alert("Failed to send.");
        });
});

// current-Year
let cYear = document.getElementById("c-year");
cYear.innerHTML = year;

//autoclose offcanvas after clicking any link
document.addEventListener('DOMContentLoaded', function () {
    const offcanvasLinks = document.querySelectorAll('#offcanvasRight a.nav-link, #offcanvasRight a');

    offcanvasLinks.forEach(link => {
        link.addEventListener('click', () => {
            const offcanvasElement = document.querySelector('#offcanvasRight.show');
            if (offcanvasElement) {
                const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (offcanvas) offcanvas.hide();
            }
        });
    });
});