import React, { useEffect } from "react";
import { deleteUser } from "../../store/actions/index";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const Users = ({ users }) => {
  // console.log(users);
  const dispatch = useDispatch();
  const ultraSecreta = "SoyAdmin";

  const handleClick = (id, email) => {
    return Swal.fire({
      title: "¿Eliminar usuario?",
      text: "Ingresa tu contraseña confirmar",
      html: `<input type="password" id="password" class="swal2-input" placeholder="Password">`,
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
        dispatch(deleteUser({ id: id, email: email, password: ultraSecreta }));
        Swal.fire({
          title: "Usuario eliminado correctamente!",
          icon: "success",
          confirmButtonColor: "#28B0A2",
        });
      }
    });
  };

  useEffect(() => {}, [dispatch, users]);
  return (
    <div className="bg-transparent p-8 rounded-md w-full">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Registro
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Ciudad
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Contacto
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((u) => {
                  return (
                    <>
                      <tr key={u.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <img
                              className="w-12 h-12 rounded-full"
                              src={u.image}
                              alt="user-img"
                            />

                            <div className="ml-3 grid">
                              <p className="text-gray-900 whitespace-no-wrap capitalize">
                                {u.name}
                              </p>
                              <p className="text-gray-400 whitespace-no-wrap">
                                {u.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {u.createdAt.slice(0, 10)}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {u.city}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {u.contact}
                          </p>
                        </td>
                        <button
                          className="px-5 py-12 border-b border-gray-200 bg-white text-sm"
                          onClick={() => handleClick(u.id, u.email)}
                        >
                          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-red-600 opacity-50 rounded-full"
                            ></span>
                            <span className="relative flex items-center gap-1">
                              Eliminar <FaTrashAlt />
                            </span>
                          </span>
                        </button>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            {/* <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing 1 to 4 of 50 Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                  Prev
                </button>
                &nbsp; &nbsp;
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
