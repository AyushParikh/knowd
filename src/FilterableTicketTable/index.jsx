import React from "react";
import TicketTable from "../TicketTable";
import Dexie from "dexie";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from '@mui/material/TableHead';
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLiveQuery } from "dexie-react-hooks";
import { Button } from "@mui/material";

const db = new Dexie("query");
db.version(1).stores({
  query: "++id,input",
});

// @ts-ignore
const { query } = db;

function FilterableTicketTable(props) {
  const { ticketArray, textChange } = props;

  const allItems = useLiveQuery(() => query.toArray(), []);

  const addQuery = async (e) => {
    await query
      .add({
        input: e.target.textContent,
      })
  };

  const deleteQuery = async (id) => query.delete(id);

  const SelectedQueries = () => {
    return (
      <div>
        <label>History</label>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>index</TableCell>
                <TableCell align="right">query</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allItems?.map((row, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-[#E5E5E5]"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" style={{ border: 0 }}>
                    {row.id}
                  </TableCell>
                  <TableCell align="right" style={{ border: 0 }}>
                    {row.input}
                  </TableCell>
                  <TableCell align="right" style={{ border: 0 }}>
                    <Button onClick={() => { deleteQuery(row.id) }}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  return (
    <div className="p-20">
      <input
        className="px-5 py-3 w-full focus:outline-none"
        placeholder="Search for anything..."
        type="text"
        autoCapitalize="false"
        autoComplete="false"
        spellCheck="false"
        autoFocus
        onChange={textChange}
      />
      <TicketTable
        ticketArray={ticketArray}
        addQuery={addQuery}
        className="mb-[20px]"
      /><br/>
      <SelectedQueries />
    </div>
  );
}

export default FilterableTicketTable;
