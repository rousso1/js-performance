function Primes() {
    var primes = [];

    function _getPrimeCount() {
        return primes.length;
    }

    function _addPrime(prime) {
        primes.push(prime);
    }

    function _isDivisible(i, by) {
        return (i % by) === 0;
    }

    function _isPrimeDivisible(candidate) {
        var sqrt = Math.sqrt(candidate);

        for (var i = 0, l = _getPrimeCount(); i < l; i++) {
            if(primes[i] > sqrt) {
                break;
            }
            if (_isDivisible(candidate, primes[i])) {
                return true;
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
        if(!primes[i - 1]) {
            _search(i);
        }

        return primes[i - 1];
    }

    return { getPrime: getPrime };
}