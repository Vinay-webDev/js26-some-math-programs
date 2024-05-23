// factorial math function
/*
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1)); */
///////////////////////////////////////////////
//2. check for prime number
function isPrimeNum(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeNum(5));
console.log(isPrimeNum(8));
console.log(isPrimeNum(9));
console.log(isPrimeNum(77));
console.log(isPrimeNum(13));
/////////////////////////
//3. gdc
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
console.log(gcd(2,3));
console.log(gcd(4,66));
console.log(gcd(33,99));

