(function ($) {
    "use strict";
    var $window = $(window),
        $body = $("body"),
        $appyMenu = $(".appy-menu"),
        $homeSlider = $(".home-slider");
    $window.on("load", function () {
        $(".preloader").delay(350).fadeOut("slow");
        AOS.refresh();
    });
    $(document).ready(function () {
        AOS.init({ disable: "mobile", once: true, duration: 600 });
        $body.scrollspy({ target: "#main_menu" });
        $("a.scroll-section").on("click", function (e) {
            var anchor = $(this);
            var ancAtt = $(anchor.attr("href"));
            $("html, body").stop().animate({ scrollTop: ancAtt.offset().top }, 1e3);
            e.preventDefault();
        });
        $window.scroll(function () {
            var currentLink = $(this);
            if ($(currentLink).scrollTop() > 0) {
                $appyMenu.addClass("sticky");
            } else {
                $appyMenu.removeClass("sticky");
            }
        });
        if ($homeSlider.length > 0) {
            $homeSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                animateOut: "fadeOut",
                lazyLoad: true,
                responsiveClass: true,
                autoplay: true,
                autoplayTimeout: 5000,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                responsive: { 768: { nav: true } },
            });
        }
        /*File Up*/
        $.fileup({
            url: '/file/upload',
            inputID: 'upload-2',
            dropzoneID: 'upload-2-dropzone',
            queueID: 'upload-2-queue',
            lang: 'ru',
            onSelect: function (file) {
                $('#multiple button').show();
            },
            onRemove: function (file, total) {
                if (file === '*' || total === 1) {
                    $('#multiple button').hide();
                }
            },
            onSuccess: function (response, file_number, file) {
                Snarl.addNotification({
                    title: 'Upload success',
                    text: file.name,
                    icon: '<i class="fa fa-check"></i>'
                });
            },
            onError: function (event, file, file_number) {
                Snarl.addNotification({
                    title: 'Upload error',
                    text: file.name,
                    icon: '<i class="fa fa-times"></i>'
                });
            }
        });
        /* $("#example-basic").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            autoFocus: true
        }); */
        var input = document.querySelector(".intlTelInput");
        window.intlTelInput(input, {
            // allowDropdown: false,
            // autoHideDialCode: false,
            // autoPlaceholder: "off",
            // dropdownContainer: document.body,
            // excludeCountries: ["us"],
            // formatOnDisplay: false,
            // geoIpLookup: function(callback) {
            //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            //     var countryCode = (resp && resp.country) ? resp.country : "";
            //     callback(countryCode);
            //   });
            // },
            // hiddenInput: "full_number",
            // initialCountry: "auto",
            // localizedCountries: { 'de': 'Deutschland' },
            // nationalMode: false,
            // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
            // placeholderNumberType: "MOBILE",
            // preferredCountries: ['cn', 'jp'],
            // separateDialCode: true,
            utilsScript: "assets/js/utils.js",
        });
    });
})(jQuery);
