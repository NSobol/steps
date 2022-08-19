import React from "react";
import Workout from "../workout/Workout";
import s from "./rezults.module.css";

function Results(props) {
  const { workouts, onRemove, onEdit } = props;

  return (
    <table className={s["table"]}>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody className={s["table-tbody"]}>
        {workouts.map((el) => (
          <Workout key={el.id} data={el} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}

export default Results;
