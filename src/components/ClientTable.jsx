import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { getFormattedClients } from "../services/formattedApi";

const columns = [
  { accessorKey: "name", header: "Name", size: 200 },
  { accessorKey: "rating", header: "Rating", size: 75 },
  { accessorKey: "ownerFullName", header: "Owner" },
  { accessorKey: "regNumber", header: "Reg. Number" },
  { accessorKey: "city", header: "City", size: 175 },
  { accessorKey: "category", header: "Category", size: 175 },
];

export default function ClientTable() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedData = await getFormattedClients();
        setData(formattedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
  });

  const renderTableHeader = () => (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} width={header.getSize()} className="relative">
              {flexRender(header.column.columnDef.header, header.getContext())}

              <div
                onMouseDown={header.getResizeHandler()}
                onTouchStart={header.getResizeHandler()}
                className={`absolute right-0 top-0 h-full w-[4px] cursor-w-resize bg-red-500 ${header.column.getIsResizing() ? "w-2 bg-blue-500" : ""}`}
              ></div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );

  const renderTableBody = () => (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              width={cell.column.getSize()}
              className="border border-slate-500"
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  if (error) return <div>{error}</div>;

  return (
    <table className="border border-slate-500" width={table.getTotalSize()}>
      {renderTableHeader()}
      {renderTableBody()}
    </table>
  );
}
