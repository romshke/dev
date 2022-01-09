/// <reference path="typings/globals/jquery/index.d.ts" />

$(document).ready(function(){
    //карусель
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    //плавная прокрутка по ссылкам
    $('.scroll').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
           scrollTop: $(this.hash).offset().top -$('.header').height()
        }, 1000);
    });

    var sr = ScrollReveal(); 

    if ($(window).width() > 480) {
        $('.card').each(function(index) {
            // console.log(index);
            if (index % 2 == 0) {
                $(this).toggleClass('left-reveal');
            } else {
                $(this).toggleClass('right-reveal');
            }
        });

        sr.reveal('.top-reveal', {
            origin: 'top',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.bottom-reveal', {
            origin: 'bottom',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.right-reveal', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.left-reveal', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    } else {
        $('.left-reveal').addClass('bottom-reveal');
        $('.left-reveal').removeClass('left-reveal');
        $('.right-reveal').addClass('bottom-reveal');
        $('.right-reveal').removeClass('right-reveal');

        $('.card').toggleClass('right-reveal');
        $('.card').removeClass('left-reveal');

        sr.reveal('.top-reveal', {
            origin: 'top',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal($('.bottom-reveal'), {
            origin: 'bottom',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.right-reveal', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        
    }

    (function() {
        // Definition of caller element
        var getTriggerElement = function(el) {
            var isCollapse = el.getAttribute('data-collapse');
            if (isCollapse !== null) {
                return el;
            } else {
                var isParentCollapse = el.parentNode.getAttribute('data-collapse');
                return (isParentCollapse !== null) ? el.parentNode : undefined;
            }
        };
      
        // A handler for click on toggle button
        var collapseClickHandler = function(event) {
            var triggerEl = getTriggerElement(event.target);
            // If trigger element does not exist
            if (triggerEl === undefined) {
                event.preventDefault();
                return false;
            }
      
            // If the target element exists
            var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
            if (targetEl) {
                triggerEl.classList.toggle('-active');
                targetEl.classList.toggle('-on');
            }
        };
      
        // Delegated event
        document.addEventListener('click', collapseClickHandler, false);
      
    })(document, window);
    
});