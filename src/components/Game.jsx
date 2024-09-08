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

    return (
        <div>
            <h1>Rock Paper Scissors</h1>
            <div>
                {CHOICES.map((choice) => (
                    <button
                        key={choice.name}
                        onClick={handlePlayerChoice}
                        aria-label={choice.name}>
                        {choice.emoji}
                    </button>
                ))}
            </div>
            {playerChoice && computerChoice && (
                <div>
                    <div>
                        <span>{playerChoice.emoji}</span>
                        <p>You chose {playerChoice.name} </p>
                    </div>
                    <div>
                        <span>{computerChoice.emoji}</span>
                        <p>The computer chose {computerChoice.name} </p>
                    </div>
                    <h2>{result}</h2>
                    <button onClick={resetGame}>Play Again</button>
                </div>
            )}
        </div>
    )
}

export default Game;