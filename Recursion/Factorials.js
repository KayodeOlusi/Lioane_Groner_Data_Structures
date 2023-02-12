/**
 * Recursion is a method to solve problems that consist of solving smaller portions
 *  of the same problem until you solve the original, larger problem.
 *  It usually involves calling the function itself
 */

// Using iterative approach
function factorialIterative(number) {
  if (number < 1) return undefined;

  let total = 1;
  for (let i = number; i > 1; i--) {
    total *= i;
  }

  return total;
}

// Using recursive approach
function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

// Iterative Fibonacci sequence
function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  let finMinus2 = 0;
  let fibMinus1 = 1;
  let fibN = n;

  for (let i = 2; i <= n; i++) {
    // n >= 2
    fibN = fibMinus1 + finMinus2; // f(n - 1) + f(n - 2)
    fibMinus2 = fibMinus1;
    fibMinus1 = fibN;
  }

  return fibN;
}

// Recursive Fibonacci sequence
function recFibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  return recFibonacci(n - 1) + recFibonacci(n - 2);
}

// Memoization Fibonacci
function memoFibonacci(n) {
  const memo = [0, 1];
  const fibonacci = n => {
    if (memo[n] != null) return memo[n];
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
  };

  return fibonacci;
}

console.log(factorial(8));
console.log(factorialIterative(8));
