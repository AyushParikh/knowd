import { Search, Engine } from './search-engine';

import ticketArray from './ticket';
import words from './words';

const engine = Engine(ticketArray);

onmessage = async function (e) { 
    var allData = []
    let sentence = e.data.split(" ");
    sentence.forEach((word, i) => {
        var tmp = sentence;
        if (word in words) {
            words[word].forEach(newWord => {
                tmp[i] = newWord
            })
        }
        var newSearch = tmp.join(" ")
        let results = Search(engine, newSearch)
        results.map(row => {
            allData.push(row[0])
        })
    });
    var unique = [...new Set(allData)]

    const data = unique.map(row => {
        return (ticketArray[parseInt(row)])
    })

    postMessage(data);
};