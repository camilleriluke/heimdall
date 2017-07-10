import { combineReducers } from "redux";
import status from "./statusReducer";
import items from "./itemsReducer";
import item from "./itemReducer";
import router from "./routerReducer";
import dialogs from "./dialogsReducer";
import search from "./searchReducer";

const rootReducer = combineReducers({
    status,
    items,
    item,
    router,
    dialogs,
    search
});

export default rootReducer;