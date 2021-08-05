import { IAPOD } from "../../interfaces/IAPOD";
import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import './APODForm.css';

/**
 * Форма для отображения астрономической картинки дня (APOD).
 */
export function APODForm() {
  const data: IAPOD | null = useAppSelector(state => state.APOD);

  if (data) {
    return (
      <div className="APODCard">
        <div className="left-column">
          <img src={data.url} alt={data.title} />
        </div>
        <div className="right-column">
          <div className="title">
            <h1>
              {data.title}
            </h1>
            <div>
              <h3>
                {data.date}
              </h3>
            </div>
          </div>
          <div className="text-content">
            {data.explanation}
          </div>
        </div>
      </div>
    )
  }
  return null;
}