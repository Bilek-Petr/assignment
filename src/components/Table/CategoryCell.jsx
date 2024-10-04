import React from "react";

const categoriesStyles = {
  VIP: { bgColor: "bg-vipBg", textColor: "text-vipText" },
  Mrtvý: { bgColor: "bg-deadBg", textColor: "text-deadText" },
  "Dynamický růst": { bgColor: "bg-growBg", textColor: "text-growText" },
};

const CategoryCell = ({ value }) => {
  const categoryStyle = categoriesStyles[value] || {};

  return (
    <span
      className={`${categoryStyle.bgColor} ${categoryStyle.textColor} whitespace-nowrap rounded-full px-3 py-0.5`}
    >
      {value}
    </span>
  );
};

export default CategoryCell;
