import React from "react";

function Pagination({
  showPerPage,
  pets,
  page,
  pagination,
  statusPets,
  filterPets,
  searchedPets,
}) {
  const total =
    pets && !searchedPets
      ? Math.ceil(pets / showPerPage)
      : searchedPets && pets
      ? Math.ceil(searchedPets / showPerPage)
      : statusPets && !filterPets
      ? Math.ceil(statusPets / showPerPage)
      : filterPets && Math.ceil(filterPets / showPerPage);


  // const handleValidation = num => {
  // 	pagination(parseInt(num));
  // 	setTimeout(() => {
  // 		if (page < 1 || page > total || isNaN(num)) {
  // 			pagination(1);
  // 		}
  // 	}, 2000);
  // };

  return (
    <div className="flex w-[285px] mx-auto gap-[10px] my-8 justify-center items-center font-semibold">
      <span
        onClick={() => pagination(1)}
        className={`bg-transparent border border-1 border-yellow-400 rounded text-[#28B0A2] font-semibold py-1 px-2 cursor-pointer hover:bg-yellow-100 transition-colors ${
          page === 1 ? "grayscale-[85%] pointer-events-none" : ""
        }`}
      >
        &lt;&lt;
      </span>
      <span
        onClick={() => pagination(page > 1 ? page - 1 : page - 0)}
        className={`bg-transparent border border-1 border-yellow-400 rounded text-[#28B0A2] font-semibold py-1 px-2 cursor-pointer hover:bg-yellow-100 transition-colors ${
          page === 1 ? "grayscale-[85%] pointer-events-none" : ""
        }`}
      >
        &lt;
      </span>
      <span>
        Página {page} de {total}
      </span>
      <span
        onClick={() => pagination(page < total ? page + 1 : page + 0)}
        className={`bg-transparent border border-1 border-yellow-400 rounded text-[#28B0A2] font-semibold py-1 px-2 cursor-pointer hover:bg-yellow-100 transition-colors ${
          page === total ? "grayscale-[85%] pointer-events-none" : ""
        }`}
      >
        &gt;
      </span>
      <span
        onClick={() => pagination(total)}
        className={`bg-transparent border border-1 border-yellow-400 rounded text-[#28B0A2] font-semibold py-1 px-2 cursor-pointer hover:bg-yellow-100 transition-colors ${
          page === total ? "grayscale-[85%] pointer-events-none" : ""
        }`}
      >
        &gt;&gt;
      </span>
    </div>
  );
}

export default Pagination;
