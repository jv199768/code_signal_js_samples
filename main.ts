const greet = () => "Hello, World!";
const addFive = num => num + 5;
const multiply = (a, b) => a * b;
const fruits = ['apple', 'banana', 'orange'];
const moreFruits = [...fruits, 'peach', 'pear'];  // This operation copies the `fruits` array and adds 'peach' and 'pear'
console.log(moreFruits); // prints ['apple', 'banana', 'orange', 'peach', 'pear']

const user = { name: 'John', age: 21 };
const admin = { ...user, role: 'admin' };  // This operation copies the `user` object and adds `role: 'admin'`
console.log(admin); // prints { name: 'John', age: 21, role: 'admin' }
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;  // Array destructuring
console.log(red); // prints 255
console.log(green); // prints 200

const rgbObj = {red: 255, green: 200, blue: 0};
const {red, green, blue} = rgbObj;  // Object destructuring
console.log(red); // prints 255
console.log(green); // prints 200
