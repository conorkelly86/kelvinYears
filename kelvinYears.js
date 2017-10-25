const kelvin = prompt('What is the Kelvin temperature today?'); 
//setting the variable kevlin as a constant to 294

let celsius = kelvin - 273;

let fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`)
