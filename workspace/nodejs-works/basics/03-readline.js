const readLine = require("readline"); 

//global objects in node js to read and write (stdin/stdout)
const r1 = readLine.createInterface({input:process.stdin, output:process.stdout});


let num1 = Math.floor((Math.random()*20)+1);
let num2 = Math.floor((Math.random()*20)+1);

let answer  =num1 + num2; 

r1.question(`What is ths sum of ${num1}, ${num2} : `, (userinput) => {
    if(parseInt(userinput) === answer) {
        console.log("You are right...");
        r1.close();
    }else {
        r1.setPrompt("Sorry you are wrong, enter again : ");
        r1.prompt(); 
        r1.on("line", (userinput) => {
            if(parseInt(userinput) === answer) {
                r1.close();
            }else {
                r1.setPrompt(`Again you wrong with input ${userinput} :`)
                r1.prompt();
            }
        })
    }
})

r1.on("close", () => {
    console.log("Thanks for using...  ");
})