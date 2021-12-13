import { combineReducers, createStore } from "redux";
import { cashReducer } from "./reducers/cashReducer";



export type StateType = ReturnType<typeof rootReducer>


const rootReducer = combineReducers({
  cashPage: cashReducer,
});

export const store = createStore(rootReducer);

//@ts-ignore
window.store = store;