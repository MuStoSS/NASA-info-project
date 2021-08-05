import { IAPOD } from "../../interfaces/IAPOD";
import { createAction } from "@reduxjs/toolkit";
import { SET_APOD_DATA } from "../constants";

/**
 * Action creator добавления данных картинки дня.
 */
export const setAPODDataAction = createAction<IAPOD>(SET_APOD_DATA);