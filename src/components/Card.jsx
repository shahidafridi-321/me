import React from "react";

export const Card = () => {
	return (
		<div className="bg-white flex flex-col items-center shadow-lg rounded-lg p-2">
      <img src="../../public/pic.png" alt="" className="w-full h-auto object-cover rounded-md" />
			<h2 className="text-center mt-2 text-sm font-medium">name</h2>
		</div>
	);
};