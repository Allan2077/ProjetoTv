
const container = document.querySelector('.container')
const on = document.querySelector('.on')

/*var ButtonOn = document.getElementById('ButtonOn')
ButtonOn.addEventListener('click', function colorButton() {
    ButtonOn.style.backgroundColor = 'rgb(255, 85, 241)';
});
*/

function darkMode() {
    container.classList.toggle('darkMode');
    
}

function cleanLight(){
    on.classList.toggle('cleanLight')
}