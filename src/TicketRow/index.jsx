import React from 'react'

function TicketRow(props) {
    const { ticket } = props 
  return (
    <div>
        <div style={{float: "left"}}>
            {ticket.icon}
        </div>
        <div style={{float: "right"}}>
            {ticket.text}
        </div>

    </div>
  )
}

export default TicketRow