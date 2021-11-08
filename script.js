const output = document.querySelector('.out');
const wrapper = document.querySelector('.wrapper');
const popUp = document.querySelector('.pop-up');
const background = document.querySelector('.background');
const btnYes = document.querySelector('.btn_yes');
const btnNo = document.querySelector('.btn_no');

output.innerHTML = 'Hello World!'

output.addEventListener('click', e => {
    e.preventDefault();
    popUp.classList.add('active');
    background.classList.add('active');
    wrapper.classList.remove('happy','sad')
});


function removeActive () {
    background.classList.remove('active');
    popUp.classList.remove('active');
}

background.addEventListener('click', removeActive)

btnYes.addEventListener('click', () => {
    output.innerHTML = 'We are happy too)';
    wrapper.classList.add('happy')
    removeActive();
})

btnNo.addEventListener('click', () => {
    output.innerHTML = "Don't worry, be happy!!!";
    wrapper.classList.add('sad')
    removeActive();
})