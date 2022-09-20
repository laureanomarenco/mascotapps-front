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

  // console.log({
  //   showPerPage,
  //   pets,
  //   pagination,
  //   page,
  //   statusPets,
  //   filterPets,
  //   searchedPets,
  // });

  // console.log(searchedPets);
  // console.log(pets);

  console.log(total);
  for (let i = 1; i <= Math.ceil(total); i++) {
    pageNumbers.push(i);
  }

  // console.log(filterPets);

  return (
    <div className="flex w-full justify-self-center mx-auto gap-2">
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
