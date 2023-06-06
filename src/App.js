import './App.css';
import React, { useEffect, useState } from 'react'

import FilterableTicketTable from './FilterableTicketTable';

function App() {
    const [filteredArray, setFilteredArray] = useState([])


    useEffect(()=> {
        const worker = new Worker(new URL('./neuralworker.js', import.meta.url), {
            type: 'module'
          });
        worker.postMessage("text");

        worker.onmessage = (e) => {
            console.log(e)
            worker.terminate();
        }

    }, [])

    const handleChange = async (e) => {
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
