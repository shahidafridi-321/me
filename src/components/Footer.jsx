import React from "react";

export const Footer = ({ text }) => {
	return (
		<footer className="bg-gray-900 w-screen h-auto px-2 py-5 text-center">
			<h2 className="text-white text-lg sm:text-big-title">{text}</h2>
		</footer>
	);
};
