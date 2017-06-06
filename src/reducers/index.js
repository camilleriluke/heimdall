import { combineReducers } from "redux";
import status from "./statusReducer";
import items from "./itemsReducer";
import router from "./routerReducer";

const rootReducer = combineReducers({
    status,
    items,
    router
});

export default rootReducer;