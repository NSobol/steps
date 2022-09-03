import React, { useState } from "react";
import s from "./FormResult.module.css";
import { nanoid } from "nanoid";
import WorkoutModel from "../../Models/WorkoutModel.js";

function FormResult(props) {
  const { onAdd } = props;
  const [form, setForm] = useState({ date: "", distance: "" });

  function handlerForm(evt) {
    evt.preventDefault();
    let strDate = form.date;
    let str1 = strDate.slice(2, 4);
    let str2 = strDate.slice(5, 7);
    let str3 = strDate.slice(8, 10);
    let newData = str3 + "." + str2 + "." + str1;
    let workout = new WorkoutModel(nanoid(), newData, form.distance);
    onAdd(workout);
    setForm({ date: "", distance: "" });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }
  return (
    <form className={s.form} onSubmit={handlerForm}>
      <div className={s["form-item"]}>
        <label htmlFor="data" className={s["form-item-label"]}>
          Дата (ДД.ММ.ГГГГ)
        </label>
        <input
          type="date"
          id="data"
          name="date"
          className={s["form-item-input"]}
          value={form.date}
          onChange={handleChange}
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
          value={form.distance}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={s["form-button"]}>
        ОК
      </button>
    </form>
  );
}

export default FormResult;
