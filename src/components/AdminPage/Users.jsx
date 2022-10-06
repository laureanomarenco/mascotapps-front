import React, { useEffect, useState } from "react";
import {
  deleteUser,
  adminFetchUsers,
  deletePetsWithNoUserId,
  deleteUserPosts,
  getAllUsers,
  banUsers,
} from "../../store/actions/index";
import UsersPagination from "./UsersPagination/UsersPagination";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";
const Users = ({ users }) => {
  const ultraSecreta = "SoyAdmin";

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const showPerPage = 4;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const showUsers = users?.slice(firstOnPage, lastOnPage);
  const tokenAccess = localStorage.getItem("token");

  function pagination(pageNumber) {
    setPage(pageNumber);
  }
  const handleClick = (id, email) => {
    return Swal.fire({
      title: "¿Eliminar usuario?",
      text: "Ingresa tu contraseña confirmar",
      html: `<input type="password" id="password" className="swal2-input" placeholder="Password">`,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#28B0A2",
      focusConfirm: false,
      preConfirm: () => {
        const password = Swal.getPopup().querySelector("#password").value;
        if (!password) {
          Swal.showValidationMessage(`Ingresa tu contraseña`);
        } else if (password !== ultraSecreta) {
          Swal.showValidationMessage(`Contraseña incorrecta`);
        }
        return { password: password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deleteUser(
            { id: id, email: email, password: ultraSecreta },
            tokenAccess
          )
        );
        dispatch(
          deleteUserPosts({ password: ultraSecreta, userId: id }, tokenAccess)
        );
        dispatch(
          deletePetsWithNoUserId({ password: ultraSecreta }, tokenAccess)
        );
        dispatch(adminFetchUsers(tokenAccess));
        dispatch(getAllUsers());
        Swal.fire({
          title: "Usuario eliminado correctamente!",
          icon: "success",
          confirmButtonColor: "#28B0A2",
        });
      }
    });
  };

  const handleBan = (id) => {
    return Swal.fire({
      title: "¿Banear usuario?",
      text: "Ingresa tu contraseña confirmar",
      html: `<input type="password" id="password" className="swal2-input" placeholder="Password">`,
      confirmButtonText: "Banear",
      confirmButtonColor: "#28B0A2",
      focusConfirm: false,
      preConfirm: () => {
        const password = Swal.getPopup().querySelector("#password").value;
        if (!password) {
          Swal.showValidationMessage(`Ingresa tu contraseña`);
        } else if (password !== ultraSecreta) {
          Swal.showValidationMessage(`Contraseña incorrecta`);
        }
        return { password: password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(banUsers({ id: id, password: ultraSecreta }, tokenAccess));
        dispatch(
          deleteUserPosts({ password: ultraSecreta, userId: id }, tokenAccess)
        );
        dispatch(
          deletePetsWithNoUserId({ password: ultraSecreta }, tokenAccess)
        );
        dispatch(adminFetchUsers(tokenAccess));
        dispatch(getAllUsers());
        Swal.fire({
          title: "Usuario baneado correctamente!",
          icon: "success",
          confirmButtonColor: "#28B0A2",
        });
      }
    });
  };

  useEffect(() => {
    dispatch(adminFetchUsers(tokenAccess));
  }, [dispatch]);
  return (
    <section className="bg-white">
      <div className="w-full mx-auto  bg-white">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full  max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Usuarios registrados
                </h3>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-scroll">
            <table className="items-center bg-white w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                    Nombre
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                    Ciudad
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                    Contacto
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody>
                {showUsers?.map((u) => {
                  return (
                    <tr
                      key={u.id}
                      className={u.isBanned === "true" && "bg-purple-300"}
                    >
                      <th
                        className={
                          "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 text-left text-blueGray-700 flex items-center gap-1"
                        }
                      >
                        <img
                          className="w-8 h-8 rounded-full"
                          src={
                            u.image
                              ? u.image
                              : "https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664984724/pngwing.com_16_qd4ib7.png"
                          }
                          alt="user"
                        />
                        <div className="grid ">
                          <span className="w-full">{u.name}</span>
                          <span className="w-full text-gray-500 font-medium">
                            {u.email}
                          </span>
                        </div>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 ">
                        {u.city}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs  p-4">
                        {u.contact}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs  p-4">
                        {!u.isSuperAdmin ? (
                          <button
                            className="text-red-500 flex  items-center gap-1"
                            onClick={() => handleClick(u.id, u.email)}
                          >
                            <FaTrashAlt />
                            Eliminar
                          </button>
                        ) : (
                          <p className="font-bold text-yellow-500">ADMIN</p>
                        )}
                        {!u.isSuperAdmin && (
                          <button
                            className={
                              u.isBanned !== "true"
                                ? "text-purple-500 flex  items-center gap-1 visible"
                                : "invisible"
                            }
                            onClick={() => handleBan(u.id)}
                            disabled={u.isSuperAdmin ? true : false}
                          >
                            <FaTrashAlt />
                            Banear
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <UsersPagination
            users={users.length}
            showPerPage={showPerPage}
            page={page}
            pagination={pagination}
          />
        </div>
      </div>
    </section>
  );
};

export default Users;
