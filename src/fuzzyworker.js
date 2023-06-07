import { Search, Engine } from './search-engine';

import ticketArray from './ticket';
import words from './words';

const engine = Engine(ticketArray);

/** alternatively for fuzzy search. we can perform a BFS on the graph of words. For each node we visit in the BFS: 
 *  - create a new sentence for that word and perform a search. add word to the queue.
 *  - check next word in queue, check dictionary for similar words and repeat.
 *  - keep track of words we have visited in a variable "seen" to prevent cycles. 
 * */ 
onmessage = async function (e) { 
    var allData = []
    let sentence = e.data.split(" ");
    sentence.forEach((word, i) => {
        var tmp = sentence;
        if (word in words) {
            words[word].forEach(newWord => {
                tmp[i] = newWord
                var newSearch = tmp.join(" ")
                console.log(newSearch)
                let results = Search(engine, newSearch)
                results.forEach(row => {
                    allData.push(row[0])
                })
            })
        }
    });
    var unique = [...new Set(allData)]

    const data = unique.map(row => {
        return (ticketArray[parseInt(row)])
    })

    postMessage(data);
};