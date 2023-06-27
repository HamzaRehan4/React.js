import { useState } from "react";
import "./App.css";

function App() {
  const currDate = new Date();
  const date1 = `${currDate.getDate()}`;
  const [update, setUpdate] = useState(date1);

  function handleAdd() {
    if (update < 31) {
      setUpdate(update + 1);
    }
  }

  function handleSub() {
    if (update > 1) {
      setUpdate(update - 1);
    }
  }

  const current = new Date();
  const date = `${current.getDate()}`;
  const string = `Today's date is ${date}`;

  return (
    <div>
      <div className="btn">
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => handleAdd()}
        >
          Next-Date
        </button>

        <span>Update: {update}</span>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => handleSub()}
        >
          Previous-Date
        </button>

        <h4>{string}</h4>
      </div>
    </div>
  );
}

export default App;
