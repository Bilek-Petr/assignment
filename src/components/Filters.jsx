import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import FilterSelect from "./FilterSelect";

export default function Filters({ setColumnFilters }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("name");

  const onFilterChange = (id, value) => {
    setColumnFilters([{ id, value }]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onFilterChange(selectedFilter, value);
  };

  useEffect(() => {
    setInputValue("");
    onFilterChange(selectedFilter, "");
  }, [selectedFilter]);

  return (
    <div className="flex gap-6">
      <div className="relative w-1/3 max-w-80 py-2">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Hledat..."
          className="h-10 w-full rounded-full border-[1px] pl-10 transition-all duration-300 ease-in-out hover:border-cyan-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      <FilterSelect
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        setColumnFilters={setColumnFilters}
      />
    </div>
  );
}
