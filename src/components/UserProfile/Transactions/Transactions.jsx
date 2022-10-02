import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Calificar from "./Calificar";
import { useDispatch } from "react-redux";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { updateTransactionStatus } from "../../../store/actions/index";
import TransactionsPagination from "./Pagination/TransasctionsPagination";

const Transactions = ({ transactions, setOrder }) => {
  //eslint-disable-next-line
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const handleClick = (trId, userId) => {
    dispatch(updateTransactionStatus(trId, userId));
    setOrder("completed");
  };

  useEffect(() => {}, [transactions, setOrder, dispatch]);

  //------------------//PAGINACION//------------------------//
  const [page, setPage] = useState(1);
  const showPerPage = 4;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const showTransactions = transactions?.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    setPage(pageNumber);
  }
  //------------------//PAGINACION//------------------------//
  let orderedTrans = showTransactions?.sort(function(a, b) {
    if (a.pet_name > b.pet_name) {
      return 1;
    }
    if (a.pet_name < b.pet_name) {
      return -1;
    }
    return 0;
  });
  console.log("esto es la prueba", orderedTrans);
  return (
    <div className=" bg-white rounded-md w-full  ">
      <div className="  overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Mascota
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Interesado/a
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Anunciante
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Estado
                </th>
                <th className=" py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {orderedTrans?.map((transaction) => (
                <>
                  <tr key={transaction?.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <img
                          className="w-12 h-12 rounded-full object-cover object-center"
                          src={transaction?.pet_image}
                          alt="user-img"
                        />

                        <div className="ml-3 grid">
                          <p className="text-gray-900 whitespace-no-wrap capitalize">
                            {transaction?.pet_name.toLowerCase()}
                          </p>
                          <p className="text-gray-400 whitespace-no-wrap">
                            {transaction?.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap capitalize">
                        {transaction?.user_demanding_name.toLowerCase()}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap capitalize">
                        {transaction?.user_offering_name.toLowerCase()}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="capitalize relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight text-center">
                        <span
                          aria-hidden
                          className={
                            transaction.status === "cancelado"
                              ? "absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              : transaction.status === "activo"
                              ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              : "absolute inset-0 bg-yellow-400 opacity-50 rounded-full"
                          }
                        ></span>
                        {transaction.status}
                      </span>
                    </td>
                    <td className=" py-5 border-b border-gray-200 bg-white text-sm">
                      {(transaction?.user_offering_id === user?.sub
                        ? transaction.user_offering_check === null
                        : transaction.user_demanding_check === null) && (
                        <button
                          className="flex gap-3 hover:text-[#3CCF4E]"
                          onClick={() =>
                            handleClick(transaction.id, { id: user?.sub })
                          }
                        >
                          <BsCheckCircleFill size={22} fill="#3CCF4E" />{" "}
                          <span>Finalizar</span>
                        </button>
                      )}
                      {(transaction?.user_offering_id === user?.sub
                        ? transaction.user_offering_check === "finalizado"
                        : transaction.user_demanding_check ===
                          "finalizado") && (
                        <Calificar
                          tdId={transaction.id}
                          reviewer_id={user?.sub}
                          reviewed_id={
                            user?.sub === transaction.user_demanding_id
                              ? transaction.user_offering_id
                              : transaction.user_demanding_id
                          }
                          setOrder={setOrder}
                          transactions={transactions}
                        />
                      )}
                      {(transaction?.user_offering_id === user?.sub
                        ? transaction.user_offering_check === "calificado"
                        : transaction.user_demanding_check ===
                          "calificado") && (
                        <div className="flex gap-3 text-red-400">
                          <HiLockClosed size={22} />
                          <span>Finalizado</span>
                        </div>
                      )}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          <TransactionsPagination
            transactions={transactions?.length}
            showPerPage={showPerPage}
            page={page}
            pagination={pagination}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
