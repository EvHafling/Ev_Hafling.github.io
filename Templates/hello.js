//function doSomething() {
    //console.log("Hello World");  }
    
//doSomething();

    // function square(x) {
       // return x * x;}

    function sayHello() {
        console.log("Hi!"); 
        }
        function plusFive(num) {
        return num + 5; 
        }
        
        function increaseLargerNumberByFive(num1, num2) {
        var larger;
        if (num1 >= num2) { 
        larger = num1; 
        } else { 
        larger = num2; 
        }
        return plusFive(larger); 
        } 
        // Function Execution Code 
        sayHello();
        console.log(increaseLargerNumberByFive(8,55)); 
        