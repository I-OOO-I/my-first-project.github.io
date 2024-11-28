function switchLanguage(lang) {
    document.documentElement.lang = lang;

    const ukElements = document.querySelectorAll('[data-uk]');
    const enElements = document.querySelectorAll('[data-en]');

    ukElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    document.querySelectorAll('.language-switcher button').forEach(button => {
        button.classList.remove('active');
    });

    document.querySelector(`.language-switcher button[onclick="switchLanguage('${lang}')"]`).classList.add('active');
}
