import React from "react";
import { flexRender } from "@tanstack/react-table";
import { FaSort } from "react-icons/fa";

export default function TableHeader({ table }) {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="group text-accentDark">
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              style={{
                width: `${header.column.getSize()}px`,
              }}
            >
              <div className="relative flex items-center gap-3 overflow-hidden py-4">
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
                  className={`absolute right-2 top-1.5 h-4/5 w-[1px] cursor-w-resize bg-accentMedium opacity-0 transition-opacity duration-300 ease-in-out hover:bg-accentDark group-hover:opacity-100 ${header.index === headerGroup.headers.length - 1 && "invisible"}`}
                />
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
