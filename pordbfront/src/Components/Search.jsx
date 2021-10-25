import React from "react";
import ResultsTable from "./ResultsTable.jsx"
import "./Search.css";

const Search = (props) => {
  return (
    <div className="formBox">
      <form>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search company, name or product"
          />
        <button id="searchBtn">
          <span role="img" aria-label="Search">
            🔍
          </span>
        </button>
      </form>
      <br></br>
      <ResultsTable />
    </div>
  );
};

export default Search;