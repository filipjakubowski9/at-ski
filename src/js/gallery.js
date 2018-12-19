function gallery() {
    const stockLink = [...document.querySelectorAll('.main-stock a')];

    stockLink.forEach(function(a) {
        a.addEventListener('click', function(event) {
            event.preventDefault();

            const thisPhoto = this.parentElement.firstElementChild.lastElementChild;

        });
    });
}


export {gallery}
