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
    

//https://script.google.com/macros/s/AKfycbwL-blgLbwxGOd-ISAwedOy-DkUgtV_ZUZFMHGd/exec
    
    
//    var body = {
//      values: values
//    };
//    gapi.client.sheets.spreadsheets.values.update({
//       spreadsheetId: '1xfvVmOC4LbKlwW69Vq7C5aBzhuCxMNH0xPKuyS3iSZk',
//       range: 'Sheet1!A1:D1:append',
//       valueInputOption: 'USER_ENTERED',
//       resource: body
//    }).then((response) => {
//      var result = response.result;
//      console.log(`${result.updatedCells} cells updated.`);
//    });
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
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);

