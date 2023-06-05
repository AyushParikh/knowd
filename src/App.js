import './App.css';
import React, { useState } from 'react'

import ticketArray from './ticket';

import FilterableTicketTable from './FilterableTicketTable';

function App() {
    const [filteredArray, setFilteredArray] = useState(ticketArray)

    const handleChange = (e) => {
        const worker = new Worker(new URL("./worker.js", import.meta.url))
        worker.postMessage(e.target.value);
        worker.onmessage = (e) => {
            setFilteredArray(e.data)
            worker.terminate();
        }
    }

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            <FilterableTicketTable ticketArray={filteredArray} textChange={handleChange}/>
        </div>
    );
}

export default App;
