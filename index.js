import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Car = [
  {
    name: "Brv",
    model: 2018,
    company: "Honda",
  },
  {
    name: "Crv",
    model: 2019,
    company: "Honda",
  },
  {
    name: "Toyota Xli",
    model: 2014,
    company: "Toyota",
  },
  {
    name: "Mehran",
    model: 2020,
    company: "Suzuki",
  },
];

function App() {
  return (
    <div>
      <Show />
    </div>
  );
}

function Show() {
  return (
    <div>
      {Car.map((car) => (
        <CarInfo carObj={car} />
      ))}
    </div>
  );
}

function CarInfo(props) {
  return (
    <div className="info">
      <h3>{props.carObj.name}</h3>
      <h5>{props.carObj.model}</h5>
      <h6>{props.carObj.company}</h6>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
