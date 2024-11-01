export const Card = ({
	title = "Name",
	image = "../../public/pic.png",
	handleClick,
	id,
}) => {
	return (
		<div
			className="bg-gray-700 flex flex-col items-center shadow-lg rounded-lg p-2"
			onClick={() => {
				handleClick(id);
			}}
		>
			<img
				src={image}
				alt={title}
				className="w-full h-auto object-cover rounded-md"
			/>
			<h2 className="text-center mt-2 text-sm font-medium">{title}</h2>
		</div>
	);
};
