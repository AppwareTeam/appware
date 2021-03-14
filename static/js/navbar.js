const toggleButton = document.getElementsByClassName('toggle-button')[0]
const brandLinks = document.getElementsByClassName('brand-links')[0]
const headerScroll = document.getElementsByClassName('navbar')[0]


headerScroll.addEventListener('click', () => {
    headerScroll.classList.toggle('nav-scroll')
})

toggleButton.addEventListener('click', () => {
    brandLinks.classList.toggle('active')
})

window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle('sticky', window.scrollY > 0); 
})