import { columns } from "./ClientTable";
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
    <div className="flex items-center justify-center">
      <label htmlFor="filter" className="font-bold">
        <FaFilter className="text-gray-400" />
      </label>
      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
        {columns.map((column) => (
          <option value={column.accessorKey} key={column.accessorKey}>
            {column.header}
          </option>
        ))}
      </select>
    </div>
  );
}
