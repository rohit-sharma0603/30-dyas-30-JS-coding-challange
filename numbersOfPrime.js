// Time Limit: 20, Memory Limit: 256000
// Given a number n find the number of prime numbers less than equal to that number.
// Input
// There is only one integer containing value of n.

// Constraints:-
// 1 <= n <= 10000000
// Output
// Return number of primes less than or equal to n
// Example
// Sample Input
// 5

// Sample Output
// 3

// Explanation:-
// 2 3 and 5 are the required primes.

// Sample Input
// 5000

// Samp




function numberOfPrimes(N)
{
      // Your code here
      const isPrime = new Array(N + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= N; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= N; j += i) {
                isPrime[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i <= N; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
 }

 console.log(numberOfPrimes(5));