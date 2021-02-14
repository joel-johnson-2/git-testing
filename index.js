require('dotenv').config();

console.log(process.env.TEST);
console.log(`https://api.test.com/news?api+key${process.env.API_KEY}`);