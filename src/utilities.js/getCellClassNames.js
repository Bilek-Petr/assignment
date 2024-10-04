export const getCellClassNames = (cell, index, totalCells) => {
  const isNameCell = cell.column.columnDef.accessorKey === "name";
  const classNames = [
    "p-1 overflow-hidden text-ellipsis whitespace-nowrap",
    isNameCell && "font-bold ",
    index === 0 && "rounded-l-md",
    index === totalCells - 1 && "rounded-r-md",
  ];

  return classNames.filter(Boolean).join(" ");
};
