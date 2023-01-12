export const articlesData = [
  {
    id: 0,
    name: "Recursion",
    content: [
      {
        paragraphsOrder: "1-3",

        paragraphs: [
          "Recursion is a programming technique that allows a function to call itself repeatedly until a certain condition is met. This can be a useful way to solve problems that can be broken down into smaller subproblems, as the function can keep calling itself with the subproblems until they are simple enough to be solved directly.",
          'One important thing to note about recursion is that it must have a base case, or an "exit condition" that tells the function when to stop calling itself. Without a base case, the function will continue to call itself indefinitely, resulting in an infinite loop.',
          "Here is a simple example of a recursive function in JavaScript that calculates the factorial of a given number:",
        ],
        code: `function factorial(n) {
                if (n === 1) {
                        return 1; // base case
                  }
                  return n * factorial(n - 1); // recursive case
                }
                
                console.log(factorial(5)); // 120
                `,
      },
      {
        paragraphsOrder: "4-6",

        paragraphs: [
          "In this example, the base case is when n is 1, in which case the function returns 1. For all other values of n, the function calls itself with n - 1, effectively reducing the problem to calculating the factorial of n - 1. This process continues until the base case is reached, at which point the function starts returning values and effectively 'unwinding' the recursive calls.",
          "Recursion can be a powerful tool, but it's important to use it carefully. Recursive functions can be slower and more memory-intensive than iterative ones, since they require the program to keep track of the different recursive calls. It's generally best to use recursion only when it provides a clear advantage over iterative approaches.",
          "Here is another example of a recursive function in JavaScript, this time for calculating the nth number in the Fibonacci sequence:",
        ],
        code: `function fibonacci(n) {
                if (n <= 1) {
                  return n; // base case
                }
                return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
              }
              
              console.log(fibonacci(10)); // 55
              `,
      },
      {
        paragraphsOrder: "7-8",

        paragraphs: [
          "In this example, the base case is when n is 0 or 1, in which case the function returns n directly. For all other values of n, the function calls itself with n - 1 and n - 2, effectively reducing the problem to calculating the n - 1th and n - 2th numbers in the sequence. This process continues until the base case is reached, at which point the function starts returning values and 'unwinding' the recursive calls.",
          "Recursion can be a useful tool for solving problems that involve repetitive subproblems, such as tree traversal or parsing nested data structures. It's important to make sure that the recursive function has a clear base case and that it makes progress towards that base case with each recursive call, to avoid infinite loops. With these considerations in mind, recursion can be a powerful tool for solving a wide variety of problems in JavaScript and other programming languages.",
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Pure Functions",
    content: [
      {
        paragraphsOrder: "1-3",

        paragraphs: [
          "In computer science, a pure function is a function that has certain properties which make it easy to reason about and test. A pure function is a function that produces no side effects, always returns the same output for a given set of input parameters, and does not depend on any external state or variables. In this article, we will discuss the importance of using pure functions and provide examples in JavaScript.",
          "It produces no side effects. This means that it does not modify any external state or variables outside of its own scope. It always returns the same output for a given set of input parameters. It does not depend on any external state or variables.",
          "Here is an example of a pure function in JavaScript:",
        ],
        code: `function add(x, y) {
                return x + y;
              }
              `,
      },
      {
        paragraphsOrder: "4-6",

        paragraphs: [
          "This function takes in two parameters, x and y, and returns their sum. It has no side effects, as it does not modify any external state or variables. It also always returns the same output for a given set of input parameters, as the sum of x and y will always be the same.",
          "Here is another example of a pure function:",
        ],
        code: `function multiply(x, y) {
                return x * y;
              }
              `,
      },
      {
        paragraphsOrder: "7-8",

        paragraphs: [
          "This function takes in two parameters, x and y, and returns their product. It has no side effects and always returns the same output for a given set of input parameters.",
          "Using pure functions can make your code easier to test, as you don't have to worry about any external state or variables affecting the output of your tests. It can also make your code easier to reason about, as you can be sure that a pure function will always produce the same output for a given set of input parameters.",
          "Pure functions are important to use in software development because they are predictable, easy to test, and have no side effects that can cause unintended consequences in your code. They also make it easier to reason about and understand your code, as you don't have to worry about any external state or variables that may be affecting the function's output. In this article, we provided examples of pure functions in JavaScript and discussed the benefits of using them in your code.",
        ],
      },
    ],
  },
 
];
