import React from "react";
import s from "../rezults/rezults.module.css";

function Workout(props) {
  const { data, onRemove, onEdit } = props;
  return (
    <tr>
      <td>{data.date}</td>
      <td>{data.distance}</td>
      <td>
        <a onClick={() => onEdit(data.id)} className={s["edit-btn"]} href="#0">
          &#9998;
        </a>
        <a
          onClick={() => onRemove(data.id)}
          className={s["remove-btn"]}
          href="#0"
        >
          &#10008;
        </a>
      </td>
    </tr>
  );
}

export default Workout;
