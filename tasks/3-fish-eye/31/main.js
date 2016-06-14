var $people = $('#people li');
var peopleCount = $people.length;
var lastScale = new Array(peopleCount);
var docH = $(document).height();
var winH = $(window).height();
var heightPerItem = (docH - winH) / peopleCount;
var scrollTop = 0;

function fishEye() {
    for (var i = 0; i < peopleCount; i++) {
        var myValue = heightPerItem * i;

        var distance = Math.abs(myValue - scrollTop);
        distance = (distance > 500) ? 500 : distance;

        var scale = ((500 - distance) / 500 * 1.2);
        scale = (scale < 0.8) ? 0.8 : scale;

        //Don't touch elements which size haven't changed since the last time
        if (scale !== 0.8 || lastScale[i] !== 0.8) {
            $($people[i]).css({
                'transform': 'translateZ(0) scale(' + scale + ')',
                'zIndex': (Math.round(500 - distance) + 1)
            });

            lastScale[i] = scale;
        }
    }

    window.requestAnimationFrame(fishEye);
}

function updatePosition() {
    scrollTop = $(document).scrollTop();
}

$(document).scroll(updatePosition);
fishEye();