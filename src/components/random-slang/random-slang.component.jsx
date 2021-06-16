import React from "react";

const RandomSlangComponent = ({ slang }) => {
	const { name, definition } = slang;
	return (
		<div className="slang">
			<p>{name}</p>
			<p>{definition}</p>
		</div>
	);
};

export { RandomSlangComponent };
