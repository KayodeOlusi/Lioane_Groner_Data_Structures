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
    if(n === 1 || n === 0) return 1;

    return n * factorial(n - 1);
}


console.log(factorial(8))
console.log(factorialIterative(8))