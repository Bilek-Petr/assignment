import React from "react";

export default function ErrorDisplay({ message }) {
  return (
    <div className="border border-red-500 p-4 font-bold text-red-500">
      <span>{`Error: ${message}`}</span>
    </div>
  );
}
