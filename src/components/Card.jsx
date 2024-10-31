import React from "react";

export const Card = ({title="Name",image="../../public/pic.png"}) => {
	return (
		<div className="bg-white flex flex-col items-center shadow-lg rounded-lg p-2">
      <img src={image} alt="" className="w-full h-auto object-cover rounded-md" />
			<h2 className="text-center mt-2 text-sm font-medium">{title}</h2>
		</div>
	);
};