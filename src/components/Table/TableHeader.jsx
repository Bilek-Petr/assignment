import React from "react";
import { flexRender } from "@tanstack/react-table";
import { FaSort } from "react-icons/fa";

export default function TableHeader({ table }) {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="group text-accentDark">
          {headerGroup.headers.map((header, index) => (
            <th
              key={header.id}
              style={{
                width: `${header.column.getSize()}px`,
                minWidth: `${header.column.columnDef.minSize}px`,
                maxWidth: `${header.column.columnDef.maxSize}px`,
              }}
            >
              <div className="relative flex items-center justify-center gap-3 py-4">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
                {header.column.getCanSort() && (
                  <span>
                    <FaSort
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer text-accentMedium transition duration-300 hover:text-accentDark"
                    />
                  </span>
                )}
                {/* Resizable Handle */}
                <div
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`absolute -right-[0.1rem] top-1.5 h-4/5 w-[1.5px] cursor-w-resize bg-accentMedium opacity-0 hover:bg-accentDark group-hover:opacity-100 ${
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
