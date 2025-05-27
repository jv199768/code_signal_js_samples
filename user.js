let user = {
    name: 'John',
    age: 30,
};

let userName = user.name; // 'John'
let userAge = user['age']; // 30

user.isAdmin = true; // a new property 'isAdmin' is added
user.introduce = function() { // a new method is added
    console.log("Hi, I am " + this.name);
}
delete user.age; // deletes the 'age' property
