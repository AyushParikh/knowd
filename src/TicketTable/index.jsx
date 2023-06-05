import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TicketTable(props) {
    const { ticketArray } = props

  return (
    <div>
        <TableContainer component={Paper} style={{overflowY: "scroll", height: 500}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                {ticketArray.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.type}
                    </TableCell>
                    <TableCell align="right">{row.text}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </div>
  )
}

export default TicketTable