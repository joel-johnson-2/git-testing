require('dotenv').config();

console.log(`https://api.test.com/news?api_key${process.env.API_KEY}`);
console.log('get request');