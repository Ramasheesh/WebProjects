//1 //input

//2 //assumtion

//3 //read folder

// 4 differenstiate file

// 5 // create folder

let fs = require("fs");
// let folderPath = process.argv[2];
// or
let path = require("path");
let folderPath = path.join(__dirname,"Download");
// console.log("folderPath");
let folderExists = fs.existsSync(folderPath);
let Extensions  = {
    image:[".jpeg" ,".jpg",".png"],
    song:[".mp3"],
    video:[".mp4",".mkv"],
    Document:[".tar",".txt",".zip"],
    Software:[".exe"],
    Language:[".h",".css",".ex",".mk"]

}
if(folderExists){
    // console.log("path is valid");
    let files = fs.readdirSync(folderPath);
    for(let i = 0 ; i< files.length; i++){
        // console.log(files[i]);
        let ext = path.extname(files[i]);
        // console.log(ext);
        let nameOfFolder = giveFolderName(ext);
        // console.log("ext.." , ext,"folder..",nameOfFolder);
        let pathOfFolder = path.join(folderPath,nameOfFolder);
        let exist = fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }else{
            //create folder
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }
    }
}else{
    console.log("please enter a valid path");
}

function giveFolderName(ext){
    //for each loop
    for(let key in Extensions){
        let extArr = Extensions[key];
        for(let i = 0 ; i< extArr.length;i++){
            if(extArr[i] == ext){
                return key;
            }
        }
    }
    return 'others';
}

function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}