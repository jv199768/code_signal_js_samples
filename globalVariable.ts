// global variable
let globalVariable = "I'm global!";  // This is like a cellular network available everywhere

// function to check scope
function checkScope() {
  // local variable
  let localVariable = "I'm local!";  // This is like your home WiFi network
  console.log(globalVariable);  // Outputs: "I'm global!"
  console.log(localVariable);  // Outputs: "I'm local!"
}

checkScope();

console.log(globalVariable);  // Outputs: "I'm global!"
console.log(localVariable);  // Returns an error as localVariable is not defined outside the function
