
import { combineReducers } from "redux";

import handleCart from "./handleCart";
import handleAuth from "./handleAuth";

const rootReducers = combineReducers({
    handleAuth,
    handleCart,
});

export default rootReducers;