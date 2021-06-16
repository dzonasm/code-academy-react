import React, { useState } from "react";
import { RandomLakeComponent } from "../random-lake-component/get-random-lake-component";
import { RandomSlangComponent } from "../random-slang/random-slang.component";

const ApiCallComponent = ({ name, handleName }) => {
	const [lake, setLake] = useState(null);
	const [slang, setSlang] = useState(null);

	const getLake = async () => {
		let response = await fetch("https://simutis.dev/api/get-random-lake");
		response = await response.json();
		setLake(response);
	};
	const getSlang = async () => {
		let response = await fetch("https://simutis.dev/api/get-random-slang");
		response = await response.json();
		setSlang(response);
	};

	return (
		<div className="api-calls">
			<p>{name}</p>
			<div className="lake">
				<button onClick={() => getLake()}>Get me a lake</button>
				{lake ? <RandomLakeComponent name={name} lake={lake} /> : null}
				{console.log("this is jsx")}
			</div>
			<div className="slang">
				<button onClick={() => getSlang()}>Get me some slang</button>
				{slang ? <RandomSlangComponent slang={slang} /> : null}
			</div>
			<button onClick={() => handleName()}>Change Name</button>
		</div>
	);
};

export { ApiCallComponent };
