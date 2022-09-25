import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { AiFillStar } from "react-icons/ai";

const Transactions = ({ transactions }) => {
  const { user } = useAuth0();
  console.log(transactions);

  return (
    <div className=" rounded-md w-full">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Mascota
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Usuario
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Usuario
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
                {transactions?.map((transaction) => (
                  <>
                    <tr key={transaction?.id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <img
                            className="w-12 h-12 rounded-full"
                            src={transaction?.pet_image}
                            alt="user-img"
                          />

                          <div className="ml-3 grid">
                            <p className="text-gray-900 whitespace-no-wrap capitalize">
                              {transaction?.user_demanding_check}
                            </p>
                            <p className="text-gray-400 whitespace-no-wrap">
                              {transaction?.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {transaction?.user_demanding_name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{transaction?.user_offering_name}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight text-center">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          {console.log(
                            "respuesta maldita sea",
                            transaction?.user_offering_id === user?.sub
                              ? transaction.user_offering_check === null
                              : transaction.user_demanding_check === null
                          )}
                          {transaction?.user_offering_id === user?.sub
                            ? transaction.user_offering_check === null
                            : transaction.user_demanding_check === null && (
                                <span className="relative">Activo</span>
                              )}
                          {transaction?.user_offering_id === user?.sub
                            ? transaction.user_offering_check
                            : transaction.user_demanding_check ===
                                "finalizado" && (
                                <span className="relative">
                                  Calificación pendiente
                                </span>
                              )}
                          {transaction?.user_offering_id === user?.sub
                            ? transaction.user_offering_check
                            : transaction.user_demanding_check ===
                                "calificado" && (
                                <span className="relative">Finzalizado</span>
                              )}
                        </span>
                      </td>
                      <td className=" py-5 border-b border-gray-200 bg-white text-sm">
                        {transaction?.user_offering_id === user?.sub
                          ? transaction.user_offering_check
                          : transaction.user_demanding_check === null && (
                              <div className="flex gap-3">
                                <BsCheckCircleFill size={22} fill="#3CCF4E" />{" "}
                                <span>Finalizar</span>
                              </div>
                            )}
                        {transaction?.user_offering_id === user?.sub
                          ? transaction.user_offering_check
                          : transaction.user_demanding_check ===
                              "finalizado" && (
                              <div className="flex gap-3">
                                <AiFillStar size={22} fill="#3CCF4E" />{" "}
                                <span>Calificar</span>
                              </div>
                            )}
                        {transaction?.user_offering_id === user?.sub
                          ? transaction.user_offering_check
                          : transaction.user_demanding_check ===
                              "calificado" && (
                              <div className="flex gap-3">
                                <BsCheckCircleFill size={22} fill="#3CCF4E" />{" "}
                                <span>Terminado</span>
                              </div>
                            )}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
