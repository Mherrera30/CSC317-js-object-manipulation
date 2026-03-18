

const sculptureList = require('./data.js');     // Import data.js

const sculptureListLengths = [];


for (const sculpture of sculptureList) {
    
    let lengthsObject = {}; 

    for (const key in sculpture) {
        
        const valueLength = sculpture[key].length;

        Object.assign(lengthsObject, { [key]: valueLength});
    }
    sculptureListLengths.push(lengthsObject);
}

console.log(sculptureListLengths);









