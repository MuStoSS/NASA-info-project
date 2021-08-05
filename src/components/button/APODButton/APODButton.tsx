import React from "react";
import { sendRequest } from "../../../api/network";
import { IAPOD } from "../../../interfaces/IAPOD";
import { setAPODDataAction } from "../../../redux/actions/APODActions";
import { useAppDispatch } from "../../../hooks/hooks";

/**
 * Кнопка для получения астрономической картинки дня (APOD).
 */
export default function APODButton() {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    // TODO: вынести в middleware и избавиться от кнопки.
    sendRequest('/planetary/apod')
      .then((data: IAPOD) => {
        dispatch(setAPODDataAction(data));
      });
  };

  return (
    <input type="button" onClick={clickHandler} value="Magic button" />
  );
}