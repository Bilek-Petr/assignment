import React from "react";
import manageClientData from "../hooks/manageClientData";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import Filters from "./Filters";
import TableHeader from "./Table/TableHeader";
import TableBody from "./Table/TableBody";
import Pagination from "./Table/Pagination";
import Loading from "./Loading";
import Error from "./Error";
import Banner from "./Banner";
import { clientTableColumns } from "./config/tableColumns";

export default function ClientTable() {
  const {
    data,
    error,
    loading,
    columnFilters,
    setColumnFilters,
    selectedRowData,
    setSelectedRowData,
  } = manageClientData();

  const table = useReactTable({
    data,
    columns: clientTableColumns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: "onChange",
  });

  const onRowClick = (row) => {
    setSelectedRowData(row.original);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="m-auto mt-12 w-full p-10 2xl:w-3/4">
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <table className="w-full table-fixed border-separate border-spacing-y-1">
        <TableHeader table={table} />
        <TableBody table={table} onRowClick={onRowClick} />
      </table>
      <Pagination table={table} />

      {selectedRowData && (
        <section className="mt-6 flex justify-center">
          <Banner rowData={selectedRowData} />
        </section>
      )}
    </div>
  );
}
