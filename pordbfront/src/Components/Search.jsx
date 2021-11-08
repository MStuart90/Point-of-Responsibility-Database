import axios from 'axios';
import React, { useState } from 'react';
import ResultsTable from './ResultsTable.jsx';
import './Search.css';

export default function Search(props) {
    const [input, setInput] = useState('');
    const [results, setResults] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        if (input) {
            axios
                .request({
                    method: 'GET',
                    url: `${process.env.REACT_APP_API_URL}/companies/${input}`
                })
                .then((response) => setResults(response.data));
        }
    }

    return (
        <div className='formBox'>
            <form onSubmit={handleSubmit}>
                <input
                    type='search'
                    name='search'
                    placeholder='Search company, name or product'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button id='searchBtn'>
                    <span role='img' aria-label='Search'>
                        🔍
                    </span>
                </button>
            </form>
            <div className='results-table'>
                {results && <ResultsTable results={results} />}
            </div>
        </div>
    );
}
