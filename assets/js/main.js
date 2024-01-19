let displayMobileMenu = document.getElementById('nav')
let mobileNav = document.getElementById('hamburger')

function mobileToggle(){
    mobileNav
}

mobileNav.addEventListener('click', () => {
    displayMobileMenu.style.display = displayMobileMenu.style.display === 'none' ? 'block' : 'none';
})