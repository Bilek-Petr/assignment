import React from "react";
import TableCell from "./TableCell";

export default function TableRow({ row }) {
  return (
    <tr
      key={row.id}
      className="cursor-pointer bg-white shadow-sm transition-colors hover:bg-cyan-100"
    >
      {row.getVisibleCells().map((cell, index) => (
        <td
          key={cell.id}
          className={`p-1 ${
            cell.column.columnDef.accessorKey === "name" && "font-bold"
          } ${index === 0 && "rounded-l-md"} ${
            index === row.getVisibleCells().length - 1 && "rounded-r-md"
          }`}
        >
          <TableCell key={cell.id} cell={cell} />
        </td>
      ))}
    </tr>
  );
}
