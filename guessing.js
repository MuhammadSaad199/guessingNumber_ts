import inquirer from "inquirer";
var systemGeneratingNo = Math.floor(Math.random() * 7);
console.log(systemGeneratingNo);
const ans = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "enter your guess number"
    }
]);
const { userguess } = ans;
if (userguess === systemGeneratingNo) {
    console.log("congrats");
}
else {
    console.log("try again");
}
