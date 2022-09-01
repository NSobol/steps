
import React from "react";
import s from "./FormResult.module.css";

function FormRezult(props) {
 

  return (
    <form className={s.form}>
      <div className={s["form-item"]}>
        <label htmlFor="data" className={s["form-item-label"]}>
          Дата (ДД.ММ.ГГ)
        </label>
        <input
          type="date"
          id="data"
          name="data"
          className={s["form-item-input"]}
        />
      </div>
      <div className={s["form-item"]}>
        <label htmlFor="distance" className={s["form-item-label"]}>
          Пройдено км
        </label>
        <input
          type="number"
          id="distance"
          name="distance"
          className={s["form-item-input"]}
        />
      </div>

      <button type="submit" className={s["form-button"]}>
        ОК
      </button>
    </form>
  );
}

export default FormRezult;