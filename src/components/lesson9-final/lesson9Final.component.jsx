import React, { useEffect, useMemo, useState } from "react";

export const Lesson9Final = () => {
	const [rectangle, setRectangle] = useState({
		updated: 0,
		data: [],
	});

	useEffect(() => {
		const interval = setInterval(async () => {
			const response = await fetch("https://simutis.dev/api/generate-rectangle");
			const data = await response.json();
			setRectangle(data);
		}, 50);
		return () => clearInterval(interval);
	}, []);

	const count = useMemo(() => {
		if (!rectangle.data.length) return;
		const mapped = rectangle.data.map(x => x.reduce((a, b) => a + b, 0));
		const sum = mapped.reduce((a, b) => a + b, 0);
		return <span>{sum}</span>;
	}, [rectangle.updated]);

	return <div>{rectangle ? <span>{count}</span> : <span>Loading</span>}</div>;
};
