import React from "react";
import TableCell from "./TableCell";
import CategoryCell from "./CategoryCell";
import { getCellClassNames } from "../../utilities.js/getCellClassNames";

export default function TableRow({ row, onRowClick }) {
  return (
    <tr
      key={row.id}
      className="cursor-pointer bg-white shadow-sm transition-colors hover:bg-cyan-100"
      onClick={() => onRowClick(row)}
    >
      {row.getVisibleCells().map((cell, index) => {
        const isCategoryCell = cell.column.columnDef.accessorKey === "category";
        const cellContent = isCategoryCell ? (
          <CategoryCell value={cell.getValue()} />
        ) : (
          <TableCell key={cell.id} cell={cell} />
        );

        const cellClassNames = getCellClassNames(
          cell,
          index,
          row.getVisibleCells().length,
        );

        return (
          <td key={cell.id} className={cellClassNames}>
            {cellContent}
          </td>
        );
      })}
    </tr>
  );
}
