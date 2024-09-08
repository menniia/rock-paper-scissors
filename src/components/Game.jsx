import React, { useState } from "react";
import CHOICES from "../utils/Choices";


function Game() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);

    const handlePlayerChoice = choice => {
        const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
        setComputerChoice(computerChoice);
        setPlayerChoice(choice);
        if (choice.name === computerChoice.name) {
            setResult("Tie!");
        } else if ((choice.name === "rock" && computerChoice.name === "scissors") || (choice.name === "paper" && computerChoice.name === "rock") || (choice.name === "scissors" && computerChoice.name === "paper")) {
            setResult("You Win!");
        } else {
            setResult("You Lose!");
        }
    }

    const resetGame = () => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult(null);
    }
}

export default Game;