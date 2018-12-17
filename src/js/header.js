function header() {
    const header = document.querySelector('.page-header');

    window.addEventListener('scroll', function() {
        if (this.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    $(document).ready(function(){
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 100
                }, 800, function(){

                    window.location.hash = hash - 100;
                });
            }
        });
    });
}

export {header}
