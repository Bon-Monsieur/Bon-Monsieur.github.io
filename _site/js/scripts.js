/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };
});
window.addEventListener('DOMContentLoaded', event => {
    
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Scroll fluide + navigation entre pages sans # dans l’URL
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Si la section est sur la même page -> scroll direct
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Sinon -> stocker la cible et rediriger vers index.html
                sessionStorage.setItem('scrollToSection', targetId);
                window.location.href = 'index.html';
            }
        });
    });

    // Vérifie si une section a été demandée depuis une autre page
    const pendingSection = sessionStorage.getItem('scrollToSection');
    if (pendingSection) {
        const targetElement = document.getElementById(pendingSection);
        if (targetElement) {
            // Scroll fluide après un petit délai (pour être sûr que tout est chargé)
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
        // Nettoie après usage
        sessionStorage.removeItem('scrollToSection');
    }
});

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Ajoute le code pour le défilement fluide sans # dans l'URL
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien

            // Récupère l'identifiant de la section cible
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            // Fait défiler la page jusqu'à l'élément cible
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Défilement fluide
                });
            }
        });
    });





