function Primes() {
    var primes = [];

    function _getPrimeCount() {
        return primes.length;
    }

    function _addPrime(prime) {
        primes.push(prime);
    }

    function _isDivisible(i, by) {
        if(by === 0) {
            throw new Error("Invalid value!", arguments);
        }
        return i % by === 0;
    }

    function _isPrimeDivisible(candidate) {
        for (var i = 0; i <= _getPrimeCount(); i++) {
            try {
                if (_isDivisible(candidate, primes[i])) {
                    return true;
                }
            } catch(e) {
                //failing silently
            }
        }
        return false;
    }

    function _search(max) {
        var c = 2;

        while (_getPrimeCount() < max) {
            if (!_isPrimeDivisible(c)) {
                _addPrime(c);
            }
            c++;
        }
    }

    function getPrime(i) {
        if (!primes[i - 1]) {
            _search(i);
        }

        return primes[i - 1];
    }

    return { getPrime: getPrime };
}