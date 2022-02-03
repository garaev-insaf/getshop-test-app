import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { History } from "history";
import { VideoReducer } from "./VideoReducer.js";

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
        video: VideoReducer,
	});

export default createRootReducer;
