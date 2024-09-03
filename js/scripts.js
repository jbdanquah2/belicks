
function updateSheet() {
    let gapi = window.gapi;
    
    const formEl = document.forms.EmailForm;  
    const formData = new FormData(formEl);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    var values = [
      [
        name, email, phone, message
      ],
      // Additional rows ...
    ];

}

(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });



    $('#galleryModal').on('show.bs.modal', function (e) {
        console.log('here were are')
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);

