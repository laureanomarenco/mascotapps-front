import React from "react";

const UsersPagination = ({ pagination, users, page, showPerPage }) => {
  const pageNumbers = [];
  const total = users && Math.ceil(users / showPerPage);

  for (let i = 1; i <= Math.ceil(total); i++) {
    pageNumbers.push(i);
  }

  return (
    // <div className="flex bg-[red] justify-self-center justify-items-centers gap-2">
    <div className="flex w-[300px] mx-auto gap-[10px] my-2 justify-center items-center">
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
            hidden={n > page + 1 || n < page - 1 ? true : false}
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
      <div>
        <span className="mr-2 text-gray-500">página</span>
        <span className="font-semibold text-gray-500  ">{`${page} / ${total}`}</span>
      </div>
    </div>
  );
};

export default UsersPagination;
