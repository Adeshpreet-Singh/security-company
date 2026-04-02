const fs = require('fs');  
const dir = process.argv[2];  
const content = process.argv[3];  
fs.mkdirSync(dir.replace(/[\\/]+$/, ''), {recursive: true});  
fs.writeFileSync(dir, content);  
console.log('Written:', dir); 
