import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myProfile, cancelPost, finishPost } from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

const EndPost = ({ hiddenEnd, setHiddenEnd, idPet }) => {
  const { user } = useAuth0();
  const myProfileData = useSelector((state) => state.myProfile);
  const transactions = myProfileData?.transactions;

  const userToConcrete = transactions?.map((t) => t?.user_demanding_name)
  const setUsers = new Set(userToConcrete)
  const arrayUser = Array.from(setUsers)
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(myProfile({ id: user?.sub }));
  }, [dispatch]);

  const [input, setInput] = useState({
    id: user?.sub,
    statusPost: "",
    id_demanding: "",
    petId: idPet,
  });
  function onChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (input.statusPost === "cancelado") {
      dispatch(cancelPost(input));
    }
    dispatch(finishPost(input));
    setHiddenEnd(hiddenEnd = true)
    Swal.fire({
      title:
        "Tu publicación fue finalizada correctamente y ya no figurará entre las mascotas activas.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background:
        "#fff url(https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png)",
      backdrop: `
rgba(0,0,123,0.4)
url("/images/nyan-cat.gif")
left top
no-repeat
`,
    }).then(() => {
      //redireccionar al home
      window.location.href = "/home";
    });
  }

  return (
    <div
      className="relative border border-gray-300 rounded-lg shadow-lg "
      hidden={hiddenEnd}
    >
      <button
        className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1"
        onClick={() => setHiddenEnd(hiddenEnd === true ? false : true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="flex items-center p-4">
        <form className="ml-3 overflow-hidden">
          <div>
            <select
              name="statusPost"
              value={input.statusPost}
              onChange={onChange}
            >
              <option hidden>Estado final del post</option>
              <option value="concretado">Concretado</option>
              <option value="cancelado">Cancelar</option>
            </select>
          </div>
          <div>
            {input.statusPost === "concretado" && (
              <div>
                <select
                  name="id_demanding"
                  value={input.id_demanding}
                  onChange={onChange}
                >
                  <option hidden>Usuario con el que finalizó</option>
                  {arrayUser.map((t) => {
                    if (user.sub !== t.user_demanding_id) {
                      return (
                        <option key={Math.random()} value={t}>
                          {t}
                        </option>
                      );
                    }
                  })}
                </select>
              </div>
            )}
            <button
              type="submit"
              onClick={onSubmit}
              className="text-black bg-[#ffd803] hover:bg-[#ffd803]/80 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 gap-6 "
            >
              Finalizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EndPost;
