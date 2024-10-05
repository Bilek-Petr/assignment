import React from "react";

export default function Pagination({ table }) {
  return (
    <div className="flex items-center gap-4 rounded-md py-4">
      <span className="text-sm font-bold">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </span>
      <div className="flex space-x-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={`rounded-md bg-cyan-500 px-2 py-0.5 text-white transition-colors duration-200 hover:bg-cyan-600 ${
            !table.getCanPreviousPage() ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {"<"}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={`rounded-md bg-cyan-500 px-2 py-0.5 text-white transition-colors duration-200 hover:bg-cyan-600 ${
            !table.getCanNextPage() ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
