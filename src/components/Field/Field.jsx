import React from "react";
import style from "./Field.module.css";

const Field = ({ player, handleClick, index }) => {
  return (
    <div className={style.Field} onClick={() => handleClick(player, index)}>
      {player && (player === 1 ? "X" : "О")}
    </div>
  );
};

export default Field;
