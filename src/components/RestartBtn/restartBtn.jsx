import React from 'react'
import style from "./restartBrt.module.css";

const RestartBtn = ({player, status, fields}) => {

  const handleClick = () => {
    player(1);
    status("Ходит");
    fields(new Array(9).fill(""));
  }


  return (
    <button onClick={handleClick} className={style.RestartBtn}>Начать заново</button>
  )
}

export default RestartBtn