import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TicketTable(props) {
    const { ticketArray } = props

  return (
    <div>
        <TableContainer component={Paper} className="max-h-72 w-[700px] bg-white overflow-y-auto">
            <Table aria-label="simple table" >
                <TableBody>
                {ticketArray.map((row) => (
                    <TableRow
                    key={row.name}
                    className="hover:bg-[#E5E5E5]"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="left" style={{border:0}}>{row.text}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </div>
  )
}

export default TicketTable