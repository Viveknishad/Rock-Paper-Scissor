let choices = document.querySelectorAll(".choice")
const message = document.querySelector("#message-print");
const yourScore = document.querySelector("#you");
const comScore = document.querySelector("#comp");

let userScore = 0;
let compScore = 0;


const getCompChoice = ()=> {
    let compChoice = ["rock", "paper","scissor"]
    const index = Math.floor(Math.random() * 3);
    return compChoice[index];
}

const getUserAndCompScore = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        message.innerText = `Congrats You Win!! you selected ${userChoice.toUpperCase()} and comp selected ${compChoice.toUpperCase()}`;
        message.style.backgroundColor = "green";
        yourScore.innerText = userScore;
    } else {
        compScore++;
        message.innerText = `You Lose!! you selected ${userChoice.toUpperCase()} and comp selected ${compChoice.toUpperCase()}`;
        message.style.backgroundColor = "red";
        comScore.innerText = compScore;
    }
}

const compareUserAndComp = (userChoice, compChoice)=> {
    let userWin = true;
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWin = compChoice == "scissor" ? false : true;
    } else {
        userWin = compChoice == "rock" ? false : true;
    }
    getUserAndCompScore(userWin, userChoice, compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = getCompChoice();
        console.log(`user selected ${userChoice} and computer selected ${compChoice}`);

        if (userChoice === compChoice) {
            message.innerText = "It's a Draw, try Again";
            message.style.backgroundColor = "black";
        } else {
            compareUserAndComp(userChoice, compChoice);
        }
    
    });
});