import { createStore } from "redux";
import { couponReducer } from "./Reducers/couponReducer";

export const store = createStore(couponReducer);
