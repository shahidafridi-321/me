import React from "react";

export const ScoreCard = ({ score, bestScore }) => {
	return (
		<div className="bg-gray-500 flex flex-col p-4 shadow-red-950 max-w-44 rounded-md">
			<p className="text-gray-200 text-xl">Score : {score}</p>
			<p className="text-gray-200 text-lg">Best Score : {bestScore}</p>
		</div>
	);
};
