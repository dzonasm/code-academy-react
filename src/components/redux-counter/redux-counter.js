import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "../../redux/types";

export const ReduxCounter = () => {
	const state = useSelector(state => state);
	const {
		first: { count },
	} = state;
	const dispatch = useDispatch();

	return (
		<>
			<span>{count}</span>
			<button onClick={() => dispatch({ type: INCREMENT })}>increment!</button>
			<button onClick={() => dispatch({ type: DECREMENT })}>decrement!</button>
			<button onClick={() => dispatch({ type: RESET })}>reset!</button>
		</>
	);
};
