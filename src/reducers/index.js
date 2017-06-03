import { combineReducers } from "redux";
import { routerForBrowser } from 'redux-little-router';
import status from "./statusReducer";
import items from "./itemsReducer";
import routesConfig from '../routes.config';

const routerConfig = routerForBrowser({ routes: routesConfig });
const routerReducer = routerConfig.reducer;
const rootReducer = combineReducers({
    status,
    items,
    router: routerReducer
});

export default rootReducer;