
//Exploring Promisify introduced in Node v8. (https://nodejs.org/api/util.html)
const promisify = require('util').promisify;
const fs = require('fs');
const readFile = promisify(fs.readFile);

//Read a text file using async/await with the power of promisify
const doReadFile = async() => {
    try
    {
        const text = await readFile('./sample.txt', 'utf8');
        console.log(text);
    }
    catch(e)
    {
        console.log('ERROR', e);
    }
};

doReadFile();
