const fibonacci = function (n) {
    let count;

    if (typeof n === 'string') {
        count = parseInt(n);
    } else {
        count = n;
    }

    if (count < 0) return 'OOPS';
    if (count === 0) return 0;

    let a = 0;
    let b = 1;
    let c;

    for (let i = 2; i <= count; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;

    // OR
    // let fib = [0, 1];
    // for (i = 2; i <= count; i++) {
    //     fib[i] = fib[i - 1] + fib[i - 2];
    // }
    // return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
