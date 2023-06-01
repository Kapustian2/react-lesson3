import RestartBtn from './components/RestartBtn/restartBtn'
import { useState } from "react";
import style from "./App.module.css";
import Field from "./components/Field/Field";
import { checkWin } from "./App";
export { checkWin } from "./components/CheckWin/checkwin.jsx";
 

function App() {
  const [status, setStatus] = useState("Ходит");
  const [fields, setFields] = useState(new Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState(1);

  checkWin(fields, currentPlayer);

  const handleClick = (player, index) => {
    if (status === "Победа") {
      return;
    }
    const newFields = [...fields];
    newFields[index] = currentPlayer;

    setFields(newFields);

    if (checkWin(newFields, currentPlayer)) {
      setStatus("Победа");
    } else if (currentPlayer === 1) {
      setCurrentPlayer(0);
    } else {
      setCurrentPlayer(1);
    }
  };

  return (
    <div className={style.App}>
      <div className={style.Turn}>
        {`${status} ${currentPlayer === 1 ? "X" : "О"} `}
      </div>
      <div className={style.Container}>
        {fields.map((player, index) => (
          <Field
            key={index}
            index={index}
            player={player}
            handleClick={handleClick}
          />
        ))}
      </div>
      <RestartBtn player={setCurrentPlayer} status={setStatus} fields={setFields} />
    </div>
  );
}

export default App;
