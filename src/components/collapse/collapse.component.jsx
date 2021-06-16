// @ts-nocheck
import React, { createContext, useContext, useState } from "react";

const CollapseContext = createContext({
	active: true,
	setActive: () => {},
});

export const Collapse = () => {
	const [active, setActive] = useState(true);
	return (
		<CollapseContext.Provider value={{ active, setActive }}>
			<Box />
			<Button />
		</CollapseContext.Provider>
	);
};

export const Box = () => {
	const { active } = useContext(CollapseContext);
	return <div style={{ height: active ? "200px" : "32px", background: "blue" }}>im a box, bruh</div>;
};

export const Button = () => {
	const { active, setActive } = useContext(CollapseContext);

	return <button onClick={() => setActive(!active)}>{`${active ? "Collapse" : "Show"}!`}</button>;
};
