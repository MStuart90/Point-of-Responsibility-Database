import React, { useState } from 'react';
import './App.css';
import ContributeForm from "../src/Components/ContributeForm"; 
import InfoCard from "../src/Components/InfoCard"; 
import Navbar from "../src/Components/InfoCard"; 
import ResultsTable from "../src/Components/Navbar"; 
import Search from "../src/Components/Search"; 

function App() {
  return (
    <div className="wrapper">
    <header className="header">
      <Navbar/>
    </header>
      <main>
        <ContributeForm/>
        <InfoCard/>
        <ResultsTable/>
        <Search/>
      </main>
    <footer>
    </footer>
  </div>
  );
}

export default App;
