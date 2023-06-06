import React from 'react'
import TicketTable from '../TicketTable'

function FilterableTicketTable(props) {
    const { ticketArray, textChange } = props

  return (
    <div class="p-20">
        <input
          class="px-5 py-3 w-full focus:outline-none"
          placeholder='Search for anything...'
          type='text'
          autoCapitalize='false'
          autoComplete='false'
          spellCheck='false'
          autoFocus
          onChange={textChange}
        />
        <TicketTable ticketArray={ticketArray} />
    </div>
  )
}

export default FilterableTicketTable