function menuShow() {
    let menuMobile = document.querySelector('.mobile__menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        
    } else {
        menuMobile.classList.add('open');
    }
}