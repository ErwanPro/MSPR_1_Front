import { createStore } from "redux";
import { couponReducer } from "./Reducers/couponReducer";

/**
 * Création du store global
 */
export const store = createStore(couponReducer);
