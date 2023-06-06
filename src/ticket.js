import { Stripe_1, Stripe_2,
    Stripe_3,
    Gmail_1,
    Gmail_2,
    Gmail_3,
    Alexa_1,
    Alexa_2,
    Alexa_3 } from './dataset.js'

const ticketArray = []
Stripe_1.map(s => {
    return ticketArray.push({type: "stripe", text: s})
})
Stripe_2.map(s => {
    return ticketArray.push({type: "stripe", text: s})
})
Stripe_3.map(s => {
    return ticketArray.push({type: "stripe", text: s})
})
Gmail_1.map(s => {
    return ticketArray.push({type: "gmail", text: s})
})
Gmail_2.map(s => {
    return ticketArray.push({type: "gmail", text: s})
})
Gmail_3.map(s => {
    return ticketArray.push({type: "gmail", text: s})
})
Alexa_1.map(s => {
    return ticketArray.push({type: "alexa", text: s})
})
Alexa_2.map(s => {
    return ticketArray.push({type: "alexa", text: s})
})
Alexa_3.map(s => {
    return ticketArray.push({type: "alexa", text: s})
})

export default ticketArray;