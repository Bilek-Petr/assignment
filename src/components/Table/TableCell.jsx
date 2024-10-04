import React from "react";
import { flexRender } from "@tanstack/react-table";

export default function TableCell({ cell }) {
  return <>{flexRender(cell.column.columnDef.cell, cell.getContext())}</>;
}
