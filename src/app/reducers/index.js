import { combineReducers } from "redux";
import status from "./statusReducer";
import items from "./itemsReducer";

const rootReducer = combineReducers({
    status,
    items
});

export default rootReducer;