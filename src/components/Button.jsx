import React from "react";

export const Button = ({ classes = "", text, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${classes} border border-pink-500 px-4 py-2 rounded-lg font-bold hover:bg-pink-500 hover:text-white `}
		>
			{text}
		</button>
	);
};
