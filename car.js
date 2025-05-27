let car = {
    color: 'red',
    make: 'Toyota',
    model: 'Corolla',
    start: function() {
        return 'Engine started!';
    },
    displayColor: function() {
        // you can access Object properties by using 'this' keyword
        console.log('The color of the car is ' + this.color); // prints "The color of the car is red"
    }
};

let carStart = car.start(); // calls the start method and returns 'Engine started!'
