import React from "react";

export default function Banner({
  rowData: { name, rating, ownerFullName, regNumber, city, category },
}) {
  return (
    <div className="relative w-[25rem] transform overflow-hidden rounded-lg bg-white p-6 shadow-md">
      <div className="absolute left-0 top-0 w-full bg-cyan-500 py-2 pl-2 font-bold text-mainLight">
        Základní údaje
      </div>
      <div className="pt-8">
        <h2 className="mb-2 text-xl font-semibold">{name}</h2>
        <div className="text-gray-700">
          <p>
            <span className="font-bold">Hodnocení: </span>
            {rating}
          </p>
          <p>
            <span className="font-bold">IČO: </span>
            {regNumber ? regNumber : "Není uvedeno"}
          </p>
          <p>
            <span className="font-bold">Město: </span>
            {city}
          </p>
          <p>
            <span className="font-bold">Vlastník: </span>
            {ownerFullName}
          </p>
          <p>
            <span className="font-bold">Kategorie: </span>
            {category ? category : "Žádná"}
          </p>
        </div>
      </div>
    </div>
  );
}
