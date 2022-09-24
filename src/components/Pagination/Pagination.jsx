import React from "react";

const Pagination = ({
  showPerPage,
  pets,
  pagination,
  page,
  statusPets,
  filterPets,
  searchedPets,
}) => {
  const pageNumbers = [];
  const total =
    pets && !searchedPets
      ? Math.ceil(pets / showPerPage)
      : searchedPets && pets
      ? Math.ceil(searchedPets / showPerPage)
      : statusPets && !filterPets
      ? Math.ceil(statusPets / showPerPage)
      : filterPets && Math.ceil(filterPets / showPerPage);

  for (let i = 1; i <= Math.ceil(total); i++) {
    pageNumbers.push(i);
  }

  return (
    // <div className="flex bg-[red] justify-self-center justify-items-centers gap-2">
    <div className="flex w-[300px] mx-auto gap-[10px] my-8 justify-center">
      <button
        className="bg-transparent border border-1 border-yellow-400 rounded text-[#28B0A2] font-semibold py-1 px-2"
        onClick={page > 1 ? () => pagination(page - 1) : null}
        hidden={page === 1 ? true : false}
      >
        &lt;
      </button>
      {pageNumbers &&
        pageNumbers.map((n) => (
          <button
            key={n}
            className={
              page !== n
                ? "bg-transparent border border-1 border-yellow-400 rounded text-[#28B0A2] font-semibold py-1 px-2"
                : "bg-yellow-400 border border-1 border-yellow-400 rounded text-gray-50 font-semibold py-1 px-2"
            }
            onClick={() => pagination(n)}
          >
            {n}
          </button>
        ))}
      <button
        className="bg-transparent border border-1 border-yellow-400 rounded text-[#28B0A2] font-semibold py-1 px-2"
        onClick={page < total ? () => pagination(page + 1) : null}
        hidden={page === total ? true : false}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
