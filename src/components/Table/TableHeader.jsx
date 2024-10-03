import React from "react";
import { flexRender } from "@tanstack/react-table";
import { FaSort } from "react-icons/fa";

export default function TableHeader({ table }) {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} width={header.getSize()} className="relative">
              {flexRender(header.column.columnDef.header, header.getContext())}
              {header.column.getCanSort() && (
                <span>
                  <FaSort onClick={header.column.getToggleSortingHandler()} />
                </span>
              )}
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
}
