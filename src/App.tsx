import * as React from "react";
import "./App.css";
import { CovidStateProvider } from "./context/covid/covidStateProvider";
import Home from "./components/pages/Home";
function App() {
  return (
    <CovidStateProvider>
      <div className="App"></div>
      <Home />
    </CovidStateProvider>
  );
}

export default App;
