'use strict';
let nav = document.querySelector('nav');
window.addEventListener('scroll', navSticky);

function navSticky() {
    if (window.scrollY > nav.offsetHeight + 200) {
        nav.classList.add('navSticky', 'navbar__span');
    } else {
        nav.classList.remove('navSticky', 'navbar__span');
    }
}

console.log(nav.classList);
