/*!
 * jQuery MobiScroll v2.5.3
 * http://mobiscroll.com
 *
 * Copyright 2010-2013, Acid Media
 * Licensed under the MIT license.
 *
 */
(function ($) {
    
    var anim;
    
    $.mobiscroll.themes.wp = {
        defaults: {
            width: 70,
            height: 76,
            accent: 'none',
            dateOrder: 'mmMMddDDyy',
            onAnimStart: function (dw, i, time) {
                $('.dwwl' + i, dw).addClass('wpam');
                clearTimeout(anim[i]);
                anim[i] = setTimeout(function () {
                    $('.dwwl' + i, dw).removeClass('wpam');
                }, time * 1000 + 100);
            }
        },
        init: function (elm, inst) {
            var click,
                active;
            
            anim = {};
            
            $('.dw', elm).addClass('wp-' + inst.settings.accent);

            //$('.dwwl', elm).bind('touchstart mousedown DOMMouseScroll mousewheel', function () {
            $('.dwwl', elm).delegate('.dw-sel', 'touchstart mousedown DOMMouseScroll mousewheel', function () {
                click = true;
                active = $(this).closest('.dwwl').hasClass('wpa');
                $('.dwwl', elm).removeClass('wpa');
                $(this).closest('.dwwl').addClass('wpa');
            }).bind('touchmove mousemove', function () {
                click = false;
            }).bind('touchend mouseup', function () {
                if (click && active) {
                    $(this).closest('.dwwl').removeClass('wpa');
                }
            });
        }
    };

    $.mobiscroll.themes['wp light'] = $.mobiscroll.themes.wp;

})(jQuery);


