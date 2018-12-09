function header() {
    const header = document.querySelector('.page-header');

    window.addEventListener('scroll', function() {
        if (this.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

export {header}
