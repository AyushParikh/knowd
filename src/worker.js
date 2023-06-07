import { Search, Engine } from './search-engine';

import ticketArray from './ticket';

const engine = Engine(ticketArray);

onmessage = async function (e) { 
    let results = Search(engine, e.data)
    const data = results.map(row => {
        return (ticketArray[parseInt(row[0])])
    })

    postMessage(data);
};