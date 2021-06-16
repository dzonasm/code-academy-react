import React, { useState } from "react";

export const Input = () => {
	const [entries, setEntries] = useState([]);
	const [input, setInput] = useState("");
	const [regexInput, setRegexInput] = useState("");

	const handleAddInput = () => {
		if (input) {
			setEntries([...entries, input]);
			setInput("");
		}
	};

	const handleInput = e => {
		setInput(e.target.value);
	};

	const handleDelete = id => {
		const updatedEntries = entries.filter(e => e !== id);
		setEntries(updatedEntries);
	};

	const content = entries.map(e => (
		<p key={e}>
			{e}
			<button onClick={() => handleDelete(e)}>delete</button>
		</p>
	));

	const regex = new RegExp(regexInput);

	const handleFilterWithRegex = () => {
		const filteredContent = entries.filter(e => regex.test(e));
		setEntries(filteredContent);
	};

	const handleRegexInput = e => {
		setRegexInput(e.target.value);
	};
	return (
		<div className="entries">
			<input type="text" value={input} onChange={handleInput} />
			<button onClick={handleAddInput}>Add!</button>
			<input type="text" value={regexInput} onChange={handleRegexInput} />
			<button onClick={handleFilterWithRegex}>Filter</button>
			{entries.length ? content : null}
		</div>
	);
};
