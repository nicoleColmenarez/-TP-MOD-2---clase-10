const fs = require ('fs');
const bicicletasJSON = fs.readFileSync('./bicicletas.json', 'utf-8')
//console.log(bicicletasJSON);
const bicicletasArray = JSON.parse(bicicletasJSON)
// console.log(bicicletasArray);


   
 module.exports = bicicletasArray
  





 