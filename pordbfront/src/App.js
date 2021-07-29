import React from 'react';
import './App.css';
import ContributeForm from "../src/Components/ContributeForm"; 
import InfoCard from "../src/Components/InfoCard"; 
import Navbar from "../src/Components/Navbar"; 
import ResultsTable from "../src/Components/ResultsTable"; 
import Search from "../src/Components/Search"; 

function App() {
  return (
    <div className="wrapper">
    <header className="header">
      <Navbar/> 
    </header>
      <main>
        <div>
          <Search/>
        </div>
        <div>
          <ResultsTable/>
        </div>
      </main>
    <footer>
    </footer>
  </div>
  );
}

export default App;
