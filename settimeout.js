// calculate the time it takes between a setTimeOut call and inner function actually running 
function greet() {
    console.log("Hello!");
  }
  
  function measureTime() {
    const start = Date.now(); // Capture the current timestamp when setTimeout is called
    setTimeout(() => {
      const end = Date.now(); // Capture the current timestamp when the inner function runs
      const duration = end - start; // Calculate the duration
      console.log(`Time between setTimeout and function execution: ${duration} milliseconds`);
      greet(); // Call the greet function after the delay
    }, 1000); // 10 seconds delay
  }
  let path = 
  // Call the measureTime function
  measureTime();
  

