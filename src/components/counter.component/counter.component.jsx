import React, { useState } from "react";
import "./counter.styles.css";

export const Counter = ({ isOpen }) => {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	const reset = () => setCount(0);
	return (
		<div className={`${isOpen ? "open" : "closed"}`}>
			<span>{count}</span>
			<button onClick={() => increment()}>Increment !</button>
			<button onClick={() => decrement()}>Decrement !</button>
			<button onClick={() => reset()}>Reset !</button>
		</div>
	);
};
