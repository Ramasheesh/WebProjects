// //input
// let input =process.argv;
// console.log(input);
// //assumtion

// //read folder

let fs = require('fs');
let folderPath = process.argv[2];
// console.log("folderPath");
let folderExists = fs.existsSync(folderPath);
if(folderExists){
    // console.log("path is valid");
    let files = fs.readdirSync(folderPath);
    console.log(files);
}else{
    console.log("please enter a valid path");
}
