import React, { useState } from 'react';
import ResultsTable from './ResultsTable.jsx';
import './Search.css';

export default function Search(props) {
    const [input, setInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
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
            <br></br>
            <ResultsTable />
        </div>
    );
}
