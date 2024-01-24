const fs = require("fs");

// fs.writeFileSync("./text.txt" , "you are created by me")
// fs.writeFile("./text.txt", "you are created by", (err) => {});
// const result = fs.readFileSync("./contacts.txt" , "utf-8")
// fs.readFile("./contacts.txt", "utf-8", (err , res) => {
//     try {
//         console.log(res);
//     } catch (err) {
//      console.log("error", err);   
//     }
// });
fs.appendFileSync("./text.txt" , `hi there \n`)
// fs.unlinkSync("./contacts.txt")
fs.mkdirSync("my-docess/a/b" , { recursive : true})