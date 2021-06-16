import React, { useState, useEffect } from "react";

export const UseEffect = () => {
	const [count, setCount] = useState(0);
	const [time, setTime] = useState(1000);
	const [step, setStep] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			return setCount(count => count + step);
		}, time);
		return () => clearInterval(interval);
	}, [time, step]);

	const handleTimeChange = e => {
		setTime(Number(e.target.value) * 1000);
	};

	const handleInterval = e => {
		setStep(Number(e.target.value));
	};

	return (
		<div>
			<span className="count">{count}</span>
			<input onChange={e => handleTimeChange(e)} type="text" placeholder={(time / 1000).toString()} />
			<input onChange={e => handleInterval(e)} type="text" placeholder={step.toString()} />
		</div>
	);
};
