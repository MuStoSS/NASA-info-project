import React from 'react';
import './App.css';
import APODButton from "./components/button/APODButton/APODButton";
import { APODForm } from "./components/APODForm/APODForm";

function App() {
  return (
    <div className="App">
      <APODButton />
      <APODForm />
    </div>
  );
}

export default App;
