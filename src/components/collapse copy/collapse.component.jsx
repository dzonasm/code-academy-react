//@ts-nocheck
import React, { createContext, forwardRef, useContext, useState, useRef, useImperativeHandle } from "react";

export const CollapseImperative = () => {
	return (
		<div>
			<Box />
		</div>
	);
};

export const Box = () => {
	return (
		<div>
			<div style={{ height: active ? "200px" : "32px", background: "blue" }}>im a box, bruh</div>
			<Button ref={buttonRef} />
		</div>
	);
};

function Button(props, ref) {
	const [active, setActive] = useState(false);
	const buttonRef = useRef();
	useImperativeHandle(buttonRef, () => {
		buttonRef?.current.click();
	});

	return <button ref={buttonRef} onClick={() => setActive(!active)}>{`${active ? "Collapse" : "Show"}!`}</button>;
}

Button = forwardRef(Button);
