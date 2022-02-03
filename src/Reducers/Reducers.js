import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { History } from "history";
import { VideoReducer } from "./VideoReducer.js";
import { NumberValidationReducer } from "./NumberValidationReducer.js";
import { LoadingReducer } from "./LoadingReducer.js";

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
        video: VideoReducer,
		loadingStatus: LoadingReducer,
		numberValid: NumberValidationReducer,
	});

export default createRootReducer;
