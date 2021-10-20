import React from "react";
import "./App.css";
//import ContributeForm from "./Components/ContributeForm";
//import InfoCard from "./Components/InfoCard";
import Navbarx from "./Components/Navbarx";
import WhiteBar from "./Components/WhiteBar";
//import ResultsTable from "./Components/ResultsTable";
import Search from "./Components/Search";

function App() {
  return (
    <div className="wrapper App">
      <header className="header">
        <Navbarx />
      </header>
      <main>
        <WhiteBar />
        <Search />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;