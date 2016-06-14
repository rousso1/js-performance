(function () {
    "use strict";

    var box = document.getElementById('box'),
        marginBtn = document.getElementById('margin-btn'),
        backgroundBtn = document.getElementById('background-btn'),
        transformBtn = document.getElementById('transform-btn');

    marginBtn.onclick = function() {
        box.style.marginLeft = toggle('margin', ['0', '5px']);
    };

    backgroundBtn.onclick = function() {
        box.style.background = toggle('background', ['red', 'green']);
    };

    transformBtn.onclick = function() {
        box.style.webkitTransform = toggle('transform', ['translate3d(5px,5px,0)', 'translate3d(10px,10px,0)']);
    };

    /***
     * TOOLS
     ***/
    var toggle = (function() {
        var status = {};

        return function(id, states) {
            if(status[id]) {
                status[id] = (status[id] >= states.length - 1) ? 0 : status[id] + 1;
            } else {
                status[id] = (states.length > 1) ? 1 : 0;
            }

            return states[status[id]];
        };
    })();
})();