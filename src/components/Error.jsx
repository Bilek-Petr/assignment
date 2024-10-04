import React from "react";

export default function Error({ message }) {
  return (
    <div className="m-auto w-3/4 border border-red-500 p-4 text-center font-bold text-red-500 sm:w-2/4 lg:w-1/4">
      <span>{`Error: ${message}`}</span>
    </div>
  );
}
