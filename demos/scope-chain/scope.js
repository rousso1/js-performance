var globalVar = 0;

var object = {
    calculate: function () {
        for (var i = 0; i < 100000000; i++) {
            globalVar += i;
        }
    },
    calculateWithCache: function () {
        var localVar = globalVar; //cache
        for (var i = 0; i < 100000000; i++) {
            localVar += i;
        }
    }
};

console.time('Global var');
object.calculate();
console.timeEnd('Global var');

console.time('With Caching');
object.calculateWithCache();
console.timeEnd('With Caching');