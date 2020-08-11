var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in celsius:');
var degreesNum = Number(degrees);
var degreesFahrenheit = degreesNum * 1.8 + 32;


console.log('it is ' + degreesFahrenheit + ' degrees fahrenheit!!');