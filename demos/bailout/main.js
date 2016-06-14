function unsafe(a, b) {
    return Math.log(a / b);
}

function safe(a, b) {
    try {
        return Math.log(a / b);
    } catch(e) {
        console.error('division error!', e);
    }
}

function compute() {
    console.log('starting...');
    console.time('process time');
    for(var i=0; i<100000000; i++) {
        safe(i, i*i);
        unsafe(i, i*i);
    }

    console.log('done');
    console.timeEnd('process time');
}