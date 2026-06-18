let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const choicesDisplay = document.querySelector("#choices-display");

const emojiMap = {
    stone: "✊",
    paper: "✋",
    scissor: "✌️"
};

const genComputerChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;

        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();

    choicesDisplay.innerHTML = `
        <p>Your Choice: ${emojiMap[userChoice]} (${userChoice})</p>
        <p>Computer Choice: ${emojiMap[compChoice]} (${compChoice})</p>
    `;

    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin;

    if (userChoice === "stone") {
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWin = compChoice === "scissor" ? false : true;
    } else {
        userWin = compChoice === "stone" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
