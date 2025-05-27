const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris'];
stars.forEach((star) => {
    console.log(star); // prints star names one by one
});

/* Prints
Sirius
Vega
Rigel
Polaris
*/

stars.forEach((star, index) => {
    console.log(star, index); // prints star names along with their indices in the array
});

/* Prints
Sirius 0
Vega 1
Rigel 2
Polaris 3
*/

const brightStars = stars.map((star) => {
    return star + ' is very bright!';
});
console.log(brightStars); // prints star names with added info
// Prints ['Sirius is very bright!', 'Vega is very bright!', 'Rigel is very bright!', 'Polaris is very bright!']
const evenIndexedStars = stars.filter((star, index) => {
    return index % 2 === 0;
});
console.log(evenIndexedStars); // prints ['Sirius', 'Rigel', 'Betelgeuse']
