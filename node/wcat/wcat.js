//let input =process.argv;
//console.log(input);
//let input =process.argv.slice(2);
//console.log(input);
const { log } = require("console");
const fs =require("fs");
let inputArr =process.argv.slice(2);
console.log(inputArr);
let filesArr =[];
let optionsArr =[];
for (let i=0;i<inputArr.length;i++){
    let firstChar =inputArr[i];
    filesArr.push(inputArr[i]);
    console.log(firstChar);
    if (firstChar == '-'){
        optionsArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
    
}
console.log("file to be read are" + filesArr);
//check if all the files are present

for(let i=0;i<filesArr.length;i++){
    let doesExist=fs.existsSync(filesArr[i])
        if (!doesExist) {
            console.log("files does not exist");
            return;
        }
    

}
//content read and appending starts

let content ="";
for(let i=0;i<filesArr.length;i++){
    let fileContent =fs.readFileSync(filesArr[i]);
    content +=fileContent+"\n";
}
console.log(content);

//fonction for content numbering
let contentArr =content.split("\n");
console.log(contentArr);


//check if -s is present or not
let isPresent =optionsArr.includes("-s");
if (isSPresent){
    for (let i=q;i<contentArr.length;i++){
        if(contentArr[i] == ""&& contentArr[i-1] == ""){
            contentArr[i] =null;
        }
    }
}
else{
    console.table(contentArr);

}

