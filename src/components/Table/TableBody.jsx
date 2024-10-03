import React from "react";
import TableRow from "./TableRow";

export default function TableBody({ table }) {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} row={row} />
      ))}
    </tbody>
  );
}
