import React from "react";
import TableCell from "./TableCell";

export default function TableRow({ row }) {
  return (
    <tr key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
}
