 // When the button is clicked, this code will execute
 document.getElementById('runScript').addEventListener('click', function() {
      
    // Using var (function-scoped or globally-scoped)
    var myVar = "Hello, I'm a string!"; 
    // Using let (block-scoped, better for modern JavaScript)
    let myLet = 42; // Number
  
    // Using const (block-scoped, cannot be reassigned)
    const myConst = true; // Boolean
    
    // JavaScript Data Types
    
    // String type
    let stringType = "This is a string";
   

    
    // Number type
    let numberType = 25;
    // Boolean type
    let booleanType = false;
    console.log(typeof stringType)
 
    let cars = ["Honda", "BMW"];
    // Array type (an ordered collection of values)
    let arrayType = [1, 2, "text", true];
    
    // Object type (a collection of key-value pairs)
    let objectType = { name: "John", age: 30 };
    
    // Undefined: a variable that is declared but not initialized
    let undefinedType; // This is automatically "undefined"
    
    // Null: explicitly set to represent no value
    let nullType = null; // This is intentionally set to null

    // Display the result on the page
    document.getElementById('output').innerHTML = `
      <strong>Var Example (myVar):</strong> ${myVar}<br>
      <strong>Let Example (myLet):</strong> ${myLet}<br>
      <strong>Const Example (myConst):</strong> ${myConst}<br>
      <br>
      <strong>JavaScript Data Types:</strong><br>
      String: ${stringType} (Type: ${typeof stringType})<br>
      Number: ${numberType} (Type: ${typeof numberType})<br>
      Boolean: ${booleanType} (Type: ${typeof booleanType})<br>
      Array: ${arrayType} (Type: ${typeof arrayType})<br>
      Object: ${JSON.stringify(objectType)} (Type: ${typeof objectType})<br>
      Undefined: ${undefinedType} (Type: ${typeof undefinedType})<br>
      Null: ${nullType} (Type: ${typeof nullType})<br>
    `;
  });


 