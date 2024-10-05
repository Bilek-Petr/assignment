import { clientTableColumns } from "./config/tableColumns";
import { FaFilter } from "react-icons/fa";

export default function FilterSelect({
  selectedFilter,
  setSelectedFilter,
  setColumnFilters,
}) {
  const handleFilterChange = (e) => {
    const newValue = e.target.value;
    setSelectedFilter(newValue);

    setColumnFilters([{ id: newValue, value: "" }]);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <label htmlFor="filter" className="font-bold">
        <FaFilter className="text-gray-400" />
      </label>
      <select
        id="filter"
        value={selectedFilter}
        onChange={handleFilterChange}
        className="rounded-full border border-gray-300 bg-white px-3 py-2 shadow-sm transition-all duration-300 ease-in-out hover:border-cyan-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
      >
        {clientTableColumns.map((column) => (
          <option value={column.accessorKey} key={column.accessorKey}>
            {column.header}
          </option>
        ))}
      </select>
    </div>
  );
}
