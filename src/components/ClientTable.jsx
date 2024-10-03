import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { getFormattedClients } from "../services/formattedApi";
import Filters from "./Filters";
import FilterSelect from "./FilterSelect";

export const columns = [
  { accessorKey: "name", header: "Název/Jméno" },
  { accessorKey: "rating", header: "Rating" },
  { accessorKey: "ownerFullName", header: "Vlastník" },
  { accessorKey: "regNumber", header: "IČO" },
  { accessorKey: "city", header: "Město" },
  { accessorKey: "category", header: "Kategorie" },
];

export default function ClientTable() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [columnFilters, setColumnFilters] = useState([]);

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
    //can access via table.getState
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: "onChange",
  });

  console.log(columnFilters);

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

  return !error ? (
    <>
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      ></Filters>

      <table className="border border-slate-500" width={table.getTotalSize()}>
        {renderTableHeader()}
        {renderTableBody()}
      </table>
    </>
  ) : (
    <div>{error}</div>
  );
}
