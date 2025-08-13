body = document.querySelector('body');
dark = document.querySelector('.hf_container li:nth-of-type(3)');
light = document.querySelector('.hf_container li:last-of-type');
navigation = document.querySelector('nav');

hamburger_menu = document.querySelector('#hamburg > div');
modal = document.querySelector('#mobile_menu');

ham_span1 = document.querySelector('#hamburg span:nth-of-type(1)');
ham_span1 = document.querySelector('#hamburg span:nth-of-type(2)');


hamburger_menu.addEventListener('click', () => {
    hamburger_menu.classList.toggle('active');
    body.classList.toggle('mobile_active');

    if (modal.classList.contains('modal')) {
        modal.classList.toggle('modal_active');
        setTimeout(() => {
            modal.classList.toggle('modal');
        }, 300);
    } else {
        modal.classList.toggle('modal');
        setTimeout(() => {
            modal.classList.toggle('modal_active');
        }, 300);
    }
});

dark.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    navigation.classList.toggle('switch');
});

light.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    navigation.classList.toggle('switch');
});
