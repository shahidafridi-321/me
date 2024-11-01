import React from "react";
import { Button } from "./Button";

export const GameStatus = ({ message, handlePlayAgain, bestScore }) => {
	return (
		<div className="flex flex-col space-y-4 justify-center items-center box-border text-center max-w-sm p-4 bg-indigo-200 border border-red-400 h-44 rounded-md">
			<h2 className="text-xl font-mono font-bold">{message}</h2>
			<p className="text-lg font-mono font-bold">Your Best Score Was : {bestScore}</p>
			<div className="flex space-x-4">
				<Button text="Play Again" onClick={handlePlayAgain} />
			</div>
		</div>
	);
};
