import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { getFormattedClients } from "../services/formattedApi";
import Filters from "./Filters";
import TableHeader from "./Table/TableHeader";
import TableBody from "./Table/TableBody";
import Pagination from "./Table/Pagination";
import Loading from "./Loading";
import Error from "./Error";

export const columns = [
  {
    accessorKey: "name",
    header: "Název/Jméno",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    size: 20,
  },
  {
    accessorKey: "ownerFullName",
    header: "Vlastník",
  },
  {
    accessorKey: "regNumber",
    header: "IČO",
  },
  { accessorKey: "city", header: "Město" },
  {
    accessorKey: "category",
    header: "Kategorie",
  },
];

export default function ClientTable() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [columnFilters, setColumnFilters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedData = await getFormattedClients();
        setData(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: "onChange",
  });

  if (loading) {
    return <Loading />;
  }

  return !error ? (
    <>
      <div className="m-auto flex w-full max-w-screen-2xl flex-col justify-center">
        <Filters
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
        <table className="table-fixed border-separate border-spacing-y-1">
          <TableHeader table={table} />
          <TableBody table={table} />
        </table>
        <Pagination table={table} />
      </div>
    </>
  ) : (
    <Error message={error} />
  );
}
