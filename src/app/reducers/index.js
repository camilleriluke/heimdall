import { combineReducers } from "redux";
import status from "./statusReducer";

const rootReducer = combineReducers({
    status
});

export default rootReducer;