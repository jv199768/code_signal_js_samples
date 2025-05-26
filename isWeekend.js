let isWeekend = true;
let isHoliday = false;
let isSunny = false;

if (isWeekend && isSunny) {
  console.log("It's the weekend and it's sunny, let's go to the park!");
} else if (isHoliday && !isSunny) {
  console.log("It's a holiday but not sunny, let's go to the museum."); 
} else if (isWeekend || isHoliday) {
  console.log("It's either weekend or a holiday, let's decide based on the weather.");
} else {
  console.log("It's neither the weekend nor a holiday, let's stay at home.");
}
