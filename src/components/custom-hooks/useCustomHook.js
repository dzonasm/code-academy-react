import { useState, useEffect } from "react";

export const useCustomHook = (array, interval) => {
	const [currentValue, setCurrentValue] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentValue(oldValue => (oldValue + 1) % array.length);
		}, interval);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return array[currentValue];
};
