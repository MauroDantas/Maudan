jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        // background navbar color change script
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        // show scroll up btn script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0,
        });
    });

    // typing animation script 
    var typed = new Typed(".typing", {
        strings: [
            "Developer", 
            "Estudante de Programação", 
            "Desenvolvedor Mobile", 
            "Freelancer", 
            "Desenvolvedor Web"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed2 = new Typed(".typing-2", {
        strings: [
            "Developer", 
            "Estudante de Programação", 
            "Desenvolvedor Mobile", 
            "Freelancer", 
            "Desenvolvedor Web"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn').toggleClass('active');
        $('.menu-btn').remove('active');
        
    });

    var menuButton = document.querySelector('.nav-open-btn');
    var menuIcon = document.querySelector('.menu-icon');

    menuButton.addEventListener('click', function() {
  // Verifica se o menu está aberto
    var isOpen = menuButton.classList.contains('open');

    if (isOpen) {
    // Se o menu estiver aberto, fecha o menu
    menuButton.classList.remove('open');
    menuIcon.setAttribute('name', 'menu-outline');
    } else {
    // Se o menu estiver fechado, abre o menu
    menuButton.classList.add('open');
    menuIcon.setAttribute('name', 'close-outline');
    }
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });

});