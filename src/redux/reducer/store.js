import { createStore } from "redux";
import rootReducers from ".";

const store = createStore(rootReducers);

export default store;