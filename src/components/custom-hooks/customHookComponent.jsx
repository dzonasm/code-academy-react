import React from "react";
import { useCustomHook } from "./useCustomHook";

export const CustomHookComponent = () => {
	const randomNumber = useCustomHook([400, 500, 600], 1000);
	const randomSlang = useCustomHook(["what's", "up", "my", "g"], 2000);

	return (
		<>
			<div>{randomNumber}</div>
			<div>{randomSlang}</div>
		</>
	);
};
