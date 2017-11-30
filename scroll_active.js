function checkActiveSection() {
    var windowOffset = window.pageYOffset;

    var section = document.querySelector('#about-us');
    var section_Offset = section.offsetTop;

    if (windowOffset > section_Offset - 250) {
        Array.from(section.querySelectorAll('figure')).forEach(function (element) {
            if (!element.classList.contains('bounceIn')){
                element.classList.add('bounceIn')
            }
        })
    }
}

window.addEventListener('load', checkActiveSection);
window.addEventListener('scroll', checkActiveSection);
