import "./App.css";
import { Counter } from "./components/counter.component/counter.component";
import React, { useState } from "react";
import { Header } from "./components/header.component/header.component";
import { Input } from "./components/input-component/input.component";
import { UseEffect } from "./components/use-effect/useEffect.component";
import { Lesson9Final } from "./components/lesson9-final/lesson9Final.component";
import { Collapse } from "./components/collapse/collapse.component";
const App = () => {
	const [openCounter, setOpenCounter] = useState(false);
	const [color, setColor] = useState(1);
	const handleOpenCounter = () => {
		setOpenCounter(!openCounter);
	};

	const handleColor = () => {
		setColor((color + 1) % 3);
	};

	return (
		<div className="App">
			<header className="App-header">
				{/* <Header userOnline handleOpenCounter={handleOpenCounter} color={color} handleColor={handleColor} /> */}
				{/* <Counter isOpen={openCounter} /> */}
				{/* <Input /> */}
				{/* <UseEffect /> */}
				{/* <Lesson9Final /> */}
				<Collapse />
			</header>
		</div>
	);
};

export default App;
