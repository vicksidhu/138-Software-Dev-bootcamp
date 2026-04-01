    // When the button is clicked, this code will execute
    document.getElementById('runScript').addEventListener('click', function() {
      
        // Arithmetic Operators
        let a = 10;
        let b = 5;
    

        let addition = a + b; // Add two numbers
        let subtraction = a - b; // Subtract two numbers
        let multiplication = a * b; // Multiply two numbers
        let division = a / b; // Divide two numbers
        let modulus = a % b; // Remainder of division
        let exponentiation = a ** b; // a raised to the power of b
        let increment = a++; // Increment a by 1 (post-increment) 
        const person = "John";
       

      
        let decrement = --b; // Decrement b by 1 (pre-decrement)
  
        // Comparison Operators
        // console.log(1 == '1');
        let isEqual = (a == b); // Equal to (checks value)
        let isStrictEqual = (a === b); // Strict equal to (checks value and type)
        let isNotEqual = (a != b); // Not equal
        let isStrictNotEqual = (a !== b); // Strict not equal
        let isGreater = (a > b); // Greater than
        let isLess = (a < b); // Less than
        let isGreaterOrEqual = (a >= b); // Greater than or equal to
        let isLessOrEqual = (a <= b); // Less than or equal to
      
  
        // Logical Operators
        let trueValue = true;
        let falseValue = false;
        let andOperation = trueValue && falseValue; // Logical AND
        let orOperation = trueValue || falseValue; // Logical OR
        let notOperation = !trueValue; // Logical NOT false
      console.log(notOperation);
        // Assignment Operators
        let x = 10;
        x += 5; // Equivalent to x = x + 5
        x -= 2; // Equivalent to x = x - 2
        x *= 3; // Equivalent to x = x * 3
        x /= 2; // Equivalent to x = x / 2
        x %= 2; // Equivalent to x = x % 2
        x **= 2; // Equivalent to x = x ** 2 (x raised to the power of 2)
  
        // String Operators
        let str1 = "Hello";
        let str2 = "World";
        let concatenatedString = str1  + " " + str2; // Concatenate two strings using +
        console.log(concatenatedString)
  
        // Ternary Operator
        let age = 20;
        let canVote = (age >= 18) ? "Yes, you can vote." : "No, you're too young to vote.";
  
        // Display the result on the page
        document.getElementById('output').innerHTML = `
          <strong>Arithmetic Operators:</strong><br>
          Addition: 10 + 5 = ${addition}<br>
          Subtraction: 10 - 5 = ${subtraction}<br>
          Multiplication: 10 * 5 = ${multiplication}<br>
          Division: 10 / 5 = ${division}<br>
          Modulus (Remainder): 10 % 5 = ${modulus}<br>
          Exponentiation: 10 ** 5 = ${exponentiation}<br>
          Increment (a++): ${increment}<br>
          Decrement (b--): ${decrement}<br>
          <br>
          
          <strong>Comparison Operators:</strong><br>
          Is 10 == 5? ${isEqual}<br>
          Is 10 === 5? ${isStrictEqual}<br>
          Is 10 != 5? ${isNotEqual}<br>
          Is 10 !== 5? ${isStrictNotEqual}<br>
          Is 10 > 5? ${isGreater}<br>
          Is 10 < 5? ${isLess}<br>
          Is 10 >= 5? ${isGreaterOrEqual}<br>
          Is 10 <= 5? ${isLessOrEqual}<br>
          <br>
          
          <strong>Logical Operators:</strong><br>
          true && false = ${andOperation}<br>
          true || false = ${orOperation}<br>
          !true = ${notOperation}<br>
          <br>
          
          <strong>Assignment Operators:</strong><br>
          x += 5 -> ${x}<br>
          x -= 2 -> ${x}<br>
          x *= 3 -> ${x}<br>
          x /= 2 -> ${x}<br>
          x %= 2 -> ${x}<br>
          x **= 2 -> ${x}<br>
          <br>
          
          <strong>String Operators:</strong><br>
          "Hello" + " " + "World" = ${concatenatedString}<br>
          <br>
  
          <strong>Ternary Operator:</strong><br>
          Can you vote at age 20? ${canVote}<br>
        `;
      });