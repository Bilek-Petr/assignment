import React from "react";

export default function Pagination({ table }) {
  <div>
    <span>
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </span>
    <div>
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {"<"}
      </button>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {">"}
      </button>
    </div>
  </div>;
}
