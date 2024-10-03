import React from "react";
import { FaSearch } from "react-icons/fa";
import FilterSelect from "./FilterSelect";

export default function Filters({ columnFilters, setColumnFilters }) {
  const clientName =
    columnFilters.find((filter) => filter.id === "name")?.value || "";

  const onFilterChange = (id, value) => {
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== "name").concat({ id, value }),
    );
  };

  return (
    <div className="flex gap-6">
      <div className="relative w-1/3 max-w-80 py-2">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Hledat..."
          className="h-10 w-full rounded-full border-[1px] border-gray-300 bg-gray-100 pl-10 transition-all duration-300 ease-in-out hover:border-cyan-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          value={clientName}
          onChange={(e) => onFilterChange("name", e.target.value)}
        />
      </div>

      <FilterSelect></FilterSelect>
    </div>
  );
}
