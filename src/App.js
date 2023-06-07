import './App.css';
import React, { useEffect, useState } from 'react'
import FilterableTicketTable from './FilterableTicketTable';

function App() {
    const [filteredArray, setFilteredArray] = useState([])
    const [useFuzzy, setFuzzy] = useState(false);

    // useEffect(()=> {
    //     const worker = new Worker(new URL('./neuralworker.js', import.meta.url), {
    //         type: 'module'
    //       });
    //     worker.postMessage("text");

    //     worker.onmessage = (e) => {
    //         console.log(e)
    //         worker.terminate();
    //     }

    // }, [])

    const handleChange = async (e) => {
        const worker = useFuzzy ? new Worker(new URL("./fuzzyworker.js", import.meta.url)) : new Worker(new URL("./worker.js", import.meta.url));
        worker.postMessage(e.target.value);
        worker.onmessage = (e) => {
            setFilteredArray(e.data)
            worker.terminate();
        }
    }

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            <FilterableTicketTable ticketArray={filteredArray} textChange={handleChange} useFuzzy={useFuzzy} setFuzzy={()=>setFuzzy(!useFuzzy)} />
        </div>
    );
}

export default App;
