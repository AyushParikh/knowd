/* eslint-disable no-restricted-globals */
import { AutoModel, AutoTokenizer } from '@xenova/transformers';

let tokenizer = await AutoTokenizer.from_pretrained('Xenova/bert-base-uncased');
let model = await AutoModel.from_pretrained('Xenova/bert-base-uncased');


// eslint-disable-next-line no-restricted-globals
self.addEventListener('message', async(event) => {
    let inputs = await tokenizer(event.data);
    let { logits } = await model(inputs);
    self.postMessage(logits)
})


