import React, { useState } from 'react'
import TicketTypeSelector from '../TicketTypeSelector'
import TicketTable from '../TicketTable'

function FilterableTicketTable(props) {
    const { ticketArray, textChange } = props

    const [filteredTicketArray, setFilteredArray] = useState(ticketArray)
    const [selectedValue, setSelectedValue] = useState()

    const handleChange = (value) => {
        setSelectedValue(value)
        const filtered = ticketArray.filter(obj => obj.type === value)
        setFilteredArray(filtered)
    }

  return (
    <div style={{padding: 20}}>
        <input
          style={{padding: 10, marginBottom: 10}}
          placeholder='Search for anything...'
          type='text'
          autoCapitalize='false'
          autoComplete='false'
          spellCheck='false'
          autoFocus
          onChange={textChange}
        />
        <TicketTypeSelector selectedValue={selectedValue} setSelectedValue={handleChange}/>
        <TicketTable ticketArray={ticketArray} />
    </div>
  )
}

export default FilterableTicketTable