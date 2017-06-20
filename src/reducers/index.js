import { combineReducers } from "redux";
import status from "./statusReducer";
import items from "./itemsReducer";
import item from "./itemReducer";
import router from "./routerReducer";
import dialogs from "./dialogsReducer";

const rootReducer = combineReducers({
    status,
    items,
    item,
    router,
    dialogs
});

export default rootReducer;