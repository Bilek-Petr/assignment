import React from "react";
import { flexRender } from "@tanstack/react-table";
import { FaSort } from "react-icons/fa";

export default function TableHeader({ table }) {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="text-accentDark group">
          {headerGroup.headers.map((header) => (
            <th key={header.id} width={header.getSize()}>
              <div className="relative flex items-center justify-center gap-3 py-4">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
                {header.column.getCanSort() && (
                  <span>
                    <FaSort
                      onClick={header.column.getToggleSortingHandler()}
                      className="text-accentMedium hover:text-accentDark cursor-pointer transition duration-300"
                    />
                  </span>
                )}
                {/* Resizable Handle */}
                <div
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`bg-accentMedium hover:bg-accentDark absolute -right-[0.1rem] top-1.5 h-4/5 w-[1.5px] cursor-w-resize opacity-0 group-hover:opacity-100 ${
                    header.column.getIsResizing() ? "w-2 bg-blue-500" : ""
                  } transition-opacity duration-300 ease-in-out`}
                />
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
