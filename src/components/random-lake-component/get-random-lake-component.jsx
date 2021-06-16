import React from "react";

const RandomLakeComponent = ({ name, lake }) => {
	const [coord, day, lakeName, , city] = lake;
	return (
		<div className="lake">
			<h1>{name}</h1>
			<p>{day}</p>
			<p>{lakeName}</p>
			<p>{coord}</p>
			<p>{city}</p>
		</div>
	);
};

export { RandomLakeComponent };
