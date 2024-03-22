function factorialIterative(number) {
  if (number < 0) return undefined;
  let total = 1;

  for (let n = number; n > 1; n--) {
    total = total * n;
  }
  return total;
}

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  let fibMinus2 = 0;
  let fibMinus1 = 1;
  let fibN = n;

  for (let i = 2; i <= n; i++) {
    fibN = fibMinus1 + fibMinus2;
    fibMinus2 = fibMinus1;
    fibMinus1 = fibN;
  }

  return fibN;
}

function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemoization(n) {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }

  return fibonacci;
}

