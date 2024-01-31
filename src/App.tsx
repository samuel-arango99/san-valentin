import { useState } from "react";
import "./App.css";

function App() {
  const [clickedYes, setClickedYes] = useState(false);

  const calculateRandomPositionOnScreen = (): void => {
    const top = Math.random() * (window.innerHeight - 100) + 0;
    const left = Math.random() * (window.innerWidth - 100) + 0;
    console.log(top);

    document.getElementById("button-no")!.style.position = "absolute";
    document.getElementById("button-no")!.style.top = top + "px";
    document.getElementById("button-no")!.style.left = left + "px";
  };

  return (
    <>
      {!clickedYes && (
        <>
          <img
            src="rose-flower.gif"
            style={{ height: "500px", width: "500px" }}
          ></img>
          <h1>¿Oiga señorita, quiere usted ser mi San Valentin?</h1>
          <div className="card">
            <button onClick={() => setClickedYes(true)}>Sizas</button>
            <button
              id="button-no"
              onMouseEnter={calculateRandomPositionOnScreen}
            >
              Nada, relajado
            </button>
          </div>
        </>
      )}
      {clickedYes && (
        <>
          <img
            src="confetti-cute.gif"
            style={{ height: "500px", width: "500px" }}
          ></img>
          <h1>Esoooo hijuemadreeee</h1>
        </>
      )}
    </>
  );
}

export default App;
