/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    // Incluir header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            // Esperar un poco para asegurar que los estilos y el menú estén listos
            setTimeout(() => {
                let scrollPos = 0;
                const mainNav = document.getElementById('mainNav');
                if (mainNav) {
                    const headerHeight = mainNav.clientHeight;
                    window.addEventListener('scroll', function() {
                        const currentTop = document.body.getBoundingClientRect().top * -1;
                        if ( currentTop < scrollPos) {
                            // Scrolling Up
                            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                                mainNav.classList.add('is-visible');
                                mainNav.classList.remove('is-hidden');
                            } else {
                                mainNav.classList.remove('is-visible', 'is-fixed', 'is-hidden');
                            }
                        } else {
                            // Scrolling Down
                            mainNav.classList.remove('is-visible');
                            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                                mainNav.classList.add('is-fixed');
                            }
                            if (mainNav.classList.contains('is-fixed')) {
                                mainNav.classList.add('is-hidden');
                            }
                        }
                        scrollPos = currentTop;
                    });
                }
            }, 200);
        });
    // Incluir footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        });
});
