const header = document.querySelector('#header');
const body = document.querySelector('#body');
const footer = document.querySelector('#footer');
const section = document.querySelector('#section')
const article = document.querySelector('#article');
const li = document.querySelector('#li');

function darkMode() {
    header.classList.toggle('darkMode');
    body.classList.toggle('darkMode');
    footer.classList.toggle('darkMode');
}

function darkModeLetras() {
    article.classList.toggle('darkModeLetras');
    section.classList.toggle('darkModeLetras');
    li.classList.toggle('darkModeLetras');
}
