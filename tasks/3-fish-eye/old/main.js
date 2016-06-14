var docH = $(document).height();
var winH = $(window).height();
var $lis = $('#people li');

function fishEye() {

    var scrollTop = $(document).scrollTop();
    $lis.each(function (i, el) {
        var items = $lis.length;
        var myValue = (docH - winH) / items * i;

        var distance = Math.abs(myValue - scrollTop);
        distance = (distance > 500) ? 500 : distance;

        var scale = ((500 - distance) / 500 * 1.2);
        scale = (scale < 0.8) ? 0.8 : scale;

        $(el).css({
            'transform': 'trasformZ(0) scale(' + scale + ')',
            'zIndex': (Math.round(500 - distance) + 1)
        });
    });
}

$(document).scroll(fishEye);
fishEye();