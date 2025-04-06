const path = require("path");

console.log("dir name" , path.dirname(__filename));
console.log("File name", path.basename(__filename));
console.log("extension name",path.extname(__filename));
console.log("join path", path.join("/user" , "2nd ", "3rd" , "4th"));

const resolvePath =  path.resolve("user" , "2nd" , "3rd");
console.log("resolve path" , resolvePath);

console.log("Normalize path" , path.normalize("/user/.document/../node/project" ));