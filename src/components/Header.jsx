import React from "react";

export const Header = ({ titleText }) => {
	return (
		<header className="bg-gray-900 w-screen h-auto px-2 py-5 text-center">
			<h1 className="text-white text-big-title">{titleText}</h1>
		</header>
	);
};
