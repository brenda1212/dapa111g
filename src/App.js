import React from "react";
import "./App.css";
// no tiene función
import imagen from "./assets/imagen.jpg";
import Login from"./Page/Login";
import Title from "./Components/Title";


function App() {
  return (
    <div className="App">
      <Title />
      <Login />
      <imag src={imagen} />
    </div>
  );
}

export default App;
