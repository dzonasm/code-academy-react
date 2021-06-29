import { combineReducers } from "redux";

import { firstReducer } from "./first-reducer";

const rootReducer = combineReducers({
	first: firstReducer,
});

export { rootReducer };
