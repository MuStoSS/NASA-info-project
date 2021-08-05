import { AnyAction } from "redux";
import { IAPOD } from "../../interfaces/IAPOD";
import { SET_APOD_DATA } from "../constants";

/**
 * Reducer картинок дня.
 * @param state - Store state.
 * @param action - Выполняемый action.
 */
const APODReducer = (state: IAPOD | null = null, action: AnyAction) => {
  switch (action.type) {
    case SET_APOD_DATA:
      return { ...action.payload };
    default:
      return state;
  }
}

export default APODReducer;