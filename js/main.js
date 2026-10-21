document.addEventListener('DOMContentLoaded', () => {
    // 1. Інтерактивний елемент: Акордеон у FAQ
    const accordionBtn = document.querySelector('.accordion-btn');
    const accordionContent = document.querySelector('.accordion-content');

    if (accordionBtn && accordionContent) {
        accordionBtn.addEventListener('click', () => {
            accordionContent.classList.toggle('active');
        });
    }

    // 2. Валідація форми з використанням preventDefault()
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Зупиняємо стандартне відправлення сторінки

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name.length < 2) {
                alert('Imię musi zawierać co najmniej 2 znaki.');
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                alert('Wprowadź poprawny adres e-mail.');
                return;
            }
            if (message.length < 5) {
                alert('Wiadomość musi zawierać co najmniej 5 znaków.');
                return;
            }

            alert('Formularz został poprawnie zweryfikowany i wysłany!');
            form.reset();
        });
    }

    // 3. Виведення інформації про браузер (для info.html)
    const browserInfoDiv = document.getElementById('browser-info');
    if (browserInfoDiv) {
        const userAgent = navigator.userAgent;
        const language = navigator.language;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        browserInfoDiv.innerHTML = `
            <p><strong>User-Agent:</strong> ${userAgent}</p>
            <p><strong>Język przeglądarki:</strong> ${language}</p>
            <p><strong>Rozdzielczość okna:</strong> ${screenWidth} x ${screenHeight} px</p>
        `;
    }
});