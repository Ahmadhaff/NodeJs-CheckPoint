const fs = require("fs");


fs.writeFile('Welcome.txt', 'Hello Node' , (err) => {
    if (err) throw err;
      console.log('The file was created successfully!');
});