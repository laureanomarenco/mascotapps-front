import React from "react";

const TransactionsPagination = ({
  pagination,
  transactions,
  page,
  showPerPage,
}) => {
  const pageNumbers = [];
  const total = transactions && Math.ceil(transactions / showPerPage);

  for (let i = 1; i <= Math.ceil(total); i++) {
    pageNumbers.push(i);
  }

  return (
    // <div className="flex bg-[red] justify-self-center justify-items-centers gap-2">
    <div className="flex w-[300px] bg-white mx-auto gap-[10px] my-2 justify-center">
      <button
        className="bg-transparent border border-1 border-teal-400 rounded text-black font-bold py-1 px-2"
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
                ? "bg-transparent border border-1 border-teal-400 rounded text-black font-bold py-1 px-2"
                : "bg-teal-400 border border-1 border-teal-400 rounded text-gray-50 font-bold py-1 px-2"
            }
            onClick={() => pagination(n)}
          >
            {n}
          </button>
        ))}
      <button
        className="bg-transparent border border-1 border-teal-400 rounded text-black font-bold py-1 px-2"
        onClick={page < total ? () => pagination(page + 1) : null}
        hidden={page === total ? true : false}
      >
        &gt;
      </button>
    </div>
  );
};

export default TransactionsPagination;
