import React, { useState } from 'react'

function TicketTypeSelector(props) {
    const { setSelectedValue, selectedValue } = props 
  return (
    <div>
        <select value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)}>
            <option value="all">All</option>
            <option value="gmail">gmail</option>
            <option value="stripe">stripe</option>
            <option value="alexa">alexa</option>
        </select>
    </div>
  )
}

export default TicketTypeSelector