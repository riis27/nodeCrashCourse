// modules.js
const xyz = require('./people'); // Importing the people.js module

console.log(xyz); // Output: { people: [ 'Mario', 'Luigi', 'Shaun', 'Yoshi' ], ages: [ 20, 25, 30, 35 ] }
console.log(xyz.people); // Accessing the 'people' property
console.log(xyz.ages);  // Accessing the 'ages' property


const { people, ages } = require('./people'); // Destructuring import

console.log(people); // Directly use 'people'
console.log(ages);  // Directly use 'ages'

// modules.js (continued)
const os = require('os'); // Importing the OS core module

console.log(os); // Logs the OS object with system information
console.log(os.platform()); // Gets the operating system platform (e.g., 'win32', 'linux')
console.log(os.homedir());  // Gets the home directory of the current user
console.log(people, ages)

const os = require('os');

console.log(os.platform(), os.homedir())