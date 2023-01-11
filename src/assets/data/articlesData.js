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
  {
    id: 2,
    name: "Object Oriented Programming",
    content: [
      {
        paragraphsOrder: "1-3",

        paragraphs: [
          "Object-oriented programming (OOP) is a programming paradigm that is based on the concept of 'objects', which can contain data and code that manipulates that data. OOP is used to represent real-world entities as objects and allows for the reuse of code through inheritance and polymorphism. These concepts help to make software development more efficient, as they allow developers to create modular and reusable code. In this article, we will discuss OOP in JavaScript and provide examples of inheritance and polymorphism to help you understand how these concepts work in the language.",
          "One of the main benefits of OOP is that it allows for the reuse of code through inheritance. In JavaScript, inheritance is implemented through prototypes. A prototype is an object that is used as a template for creating new objects. When a new object is created, it can inherit the properties and methods of its prototype.",
          "Here is an example of how inheritance works in JavaScript:",
        ],
        code: `function Animal(name, age) {
                this.name = name;
                this.age = age;
              }
              
              Animal.prototype.setName = function(name) {
                this.name = name;
              };
              
              Animal.prototype.getName = function() {
                return this.name;
              };
              
              Animal.prototype.setAge = function(age) {
                this.age = age;
              };
              
              Animal.prototype.getAge = function() {
                return this.age;
              };
              
              function Dog(name, age, breed) {
                Animal.call(this, name, age);
                this.breed = breed;
              }
              
              Dog.prototype = Object.create(Animal.prototype);
              Dog.prototype.constructor = Dog;
              
              Dog.prototype.setBreed = function(breed) {
                this.breed = breed;
              };
              
              Dog.prototype.getBreed = function() {
                return this.breed;
              };
              
              const dog = new Dog('Max', 5, 'Labrador');
              console.log(dog.getName()); // Output: "Max"
              console.log(dog.getAge()); // Output: 5
              console.log(dog.getBreed()); // Output: "Labrador"
              `,
      },
      {
        paragraphsOrder: "4-6",

        paragraphs: [
          "In this example, the 'Animal' function is the base class and the 'Dog' function is the subclass. The 'Dog' function inherits the properties and methods of the 'Animal' function through its prototype. It also has its own specific property, breed, and methods to set and get the value of this property. This means that you can create a 'Dog' object and set its name, age, and 'breed' using the methods inherited from the 'Animal' class and the methods specific to the 'Dog' class.",
          "Another key concept in OOP is polymorphism, which refers to the ability of different objects to respond to the same method call in different ways. In JavaScript, this can be achieved through method overrides. A method override is when a subclass has a method with the same name as a method in the base class, but with a different implementation.",
          "Here is an example of polymorphism in JavaScript:",
        ],
        code: `function Shape() {
        }
        
        Shape.prototype.draw = function() {
          console.log('Drawing a shape...');
        };
        
        function Circle() {
        }
        
        Circle.prototype = Object.create(Shape.prototype);
        Circle.prototype.constructor = Circle;
        
        Circle.prototype.draw = function() {
          console.log('Drawing a circle...');
        };
        
        function Square() {
        }
        
        Square.prototype = Object.create(Shape.prototype);
        Square
        `,
      },
      {
        paragraphsOrder: "7-10",

        paragraphs: [
          "This code defines three JavaScript functions: Shape, Circle, and Square. The Shape function is a base class that has a single method called draw, which logs the string 'Drawing a shape...'' to the console.",
          "The 'Circle' and 'Square' functions are subclasses of the 'Shape' class and inherit its prototype through the use of the 'Object.create' function. The 'Circle' and Square prototypes are then set to be instances of the 'Shape' prototype using the 'Object.create' function.",
          "The Circle and Square prototypes also have their own draw method, which overrides the draw method of the Shape prototype. This means that when the draw method is called on an instance of the Circle or Square class, the implementation of the draw method specific to that class will be called, rather than the implementation of the draw method in the Shape prototype.",
          "For example, if you have the following code:",
        ],
        code: `const circle = new Circle();
            circle.draw();
            
            const square = new Square();
            square.draw();
            `,
      },
      {
        paragraphsOrder: "11",
        paragraphs: ["The output would be:"],
        code: `Drawing a circle...
                Drawing a square...
                `,
      },
      {
        paragraphsOrder: "12-13",
        paragraphs: [
          "Object-oriented programming (OOP) is a programming paradigm that is based on the concept of 'objects', which can contain data and code that manipulates that data. In OOP, objects are used to represent real-world entities, such as cars, employees, or bank accounts. One of the main benefits of OOP is that it allows for the reuse of code through inheritance. In JavaScript, inheritance is implemented through prototypes and polymorphism is achieved through method overrides. These concepts allow for the creation of modular and reusable code, which can save time and effort in software development.",
          "In the article, we provided examples of OOP in JavaScript and explained how inheritance and polymorphism work in the language. The Shape function was a base class that had a single method called draw, which logged the string 'Drawing a shape...' to the console. The Circle and Square functions were subclasses of the Shape class and inherited its prototype through the use of the Object.create function. The Circle and Square prototypes also had their own draw method, which overrides the draw method of the Shape prototype. This allows different objects to respond to the same method call in different ways.",
        ],
      },
    ],
  },
];
