const { isUtf8 } = require("buffer");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data ")

if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("data folder is created");
}
//sync way to create a file
const filePath = path.join(dataFolder ,'newfile.txt');
 fs.writeFileSync(filePath ,"Hello from node js");

 console.log("file is created"); 

 const readContentFromFile = fs.readFileSync(filePath , "utf8");
 console.log("file content : " , readContentFromFile);

 fs.appendFileSync(filePath , "\n This is a new line added to that file");
 console.log("new file content added");

 //async way to create the file
 const asyncFilePath = path.join(dataFolder,'asyncFile.txt');
 fs.writeFile(asyncFilePath , 'hello ' , (err)=>{
     if(err) throw err;
     console.log("async file is created successfully");

     fs.readFile(asyncFilePath,'utf8' , (err , data)=>
         {if(err) throw err;
            console.log("async file content" , data);
         });

fs.appendFile(asyncFilePath,"this is new line" , (err)=>{
    if(err) throw err;
    console.log("line added");
});

fs.readFile(asyncFilePath, 'utf8' , (err , updateData)=>{
    if(err) throw err;
    console.log("read file content :", updateData);
});
 })          