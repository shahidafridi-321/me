import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { ScoreCard } from "./components/ScoreCard";
import { Main } from "./components/Main";

export const App = () => {
	const [characters, setCharacters] = useState([]);
	const [picked, setPicked] = useState([]);
	const [bestScore, setBestScore] = useState(0);

	let score = picked.length;

	useEffect(() => {
		
	}, []);

	function shuffleCharacters() {
		let newArray = [...characters];
		for (let index = characters.length - 1; index > 0; index--) {
			let randomIndex = Math.floor(Math.random() * (index + 1));
			[newArray[index], newArray[randomIndex]] = [
				newArray[randomIndex],
				newArray[index],
			];
		}
		setCharacters(newArray);
	}

	function handleClick(id) {
		if (picked.includes(id)) {
			setPicked([]);
			bestScore < score ? setBestScore(score) : bestScore;
		} else {
			setPicked([...picked, id]);
		}
		shuffleCharacters();
	}

	return (
		<>
			<Header titleText="Memory Card Game" />
			<Main>
				<div className="bg-gray-700 flex justify-end p-2">
					<ScoreCard score={score} bestScore={bestScore} />
				</div>

				<div
					className="bg-gray-700 grid grid-cols-3 gap-4 p-4 
                    sm:grid-cols-4 
                    md:grid-cols-6"
				>
					{characters.map((character) => (
						<Card
							key={character.id}
							image={character.image}
							title={character.title}
							handleClick={handleClick}
							id={character.id}
						/>
					))}
				</div>
			</Main>
		</>
	);
};
