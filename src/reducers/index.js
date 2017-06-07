import { combineReducers } from "redux";
import status from "./statusReducer";
import items from "./itemsReducer";
import item from "./itemReducer";
import router from "./routerReducer";

const rootReducer = combineReducers({
    status,
    items,
    item,
    router
});

export default rootReducer;