function isPrime(N) {
    if (N <= 1) {
        return "NotPrime"; // 1 is not a prime number
    }
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return "NotPrime"; 
        }
    }
    return "Prime"; 
}

// Check if 10 is prime or not
const result = isPrime(10);
console.log(result); // Output: NotPrime
