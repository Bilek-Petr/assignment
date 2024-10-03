import React from "react";
import { flexRender } from "@tanstack/react-table";

export default function TableCell({ cell }) {
  return (
    <td width={cell.column.getSize()} className="border border-slate-500">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}
