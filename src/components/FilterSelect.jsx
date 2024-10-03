import { useState, useEffect } from "react";
import { columns } from "./ClientTable";

export default function FilterSelect() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="filter" className="font-bold">
        Filtrovat dle:
      </label>
      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
        {columns.map((column, id) => (
          <option value={column.accessorKey} key={id}>
            {column.header}
          </option>
        ))}
      </select>
    </div>
  );
}
