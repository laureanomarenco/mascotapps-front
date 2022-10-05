import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPetsByStatus, myProfile } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Icons, Links, NavBtn, SearchBar } from "./items";
import { searchPets, resetDetail } from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/LoginButton";
import Push from "../Push/Push";
import { tokenAccess } from "../../constants/token";

export default function Navbar({ setPage }) {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [input, setInput] = useState("");
  const myProfileData = useSelector((state) => state.myProfile);

  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    if (e.target.value !== "") {
      setInput(e.target.value);
      dispatch(searchPets(input));
    }
    dispatch(resetDetail());
  }

  const handleClick = (e) => {
    dispatch(getPetsByStatus(e.target.name));
    setPage(1);
  };

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      dispatch(myProfile(tokenAccess));
    }
    if (myProfileData?.userProps?.isBanned) {
      localStorage.setItem("banned", "true");
    }
  }, [isLoading, isAuthenticated, user, dispatch, myProfileData]);

  return (
    <div className=" z-50 w-full">
      <div>
        <div className="relative">
          {/* PANTALLA MEDIANA */}
          <div
            id="md-searchbar"
            className={`${
              mdOptionsToggle ? "hidden" : "flex sticky top-0 "
            } bg-white  lg:hidden py-5 px-6 items-center justify-between`}
          >
            <SearchBar
              styleDiv="flex items-center space-x-3 text-gray-800 "
              type="text"
              placeholder="Buscar"
              handleChange={handleChange}
              className="text-sm leading-none   text-gray-600 focus:outline-none"
            />

            <div className="space-x-6 flex items-center">
              {!isLoading && isAuthenticated ? (
                <>
                  <Link
                    to="/account"
                    className="text-gray-800  focus:outline-none hover:text-[#28B0A2] "
                  >
                    <div className="">
                      <img
                        src={
                          myProfileData["userProps"]?.image
                            ? myProfileData["userProps"]?.image
                            : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1664199194/mascotapps/Dise%C3%B1o_sin_t%C3%ADtulo_1_qqzx4h.png"
                        }
                        className="w-8 h-8 rounded-full overflow-hidden mx-auto relative object-cover object-center"
                      />
                    </div>

                    <span className="sr-only"> Account </span>
                  </Link>

                  <Push />
                </>
              ) : (
                <LoginButton text="Acceder" />
              )}

              <Link
                to="/favoritos"
                aria-label="view favourites"
                className="text-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/*PANTALLA GRANDE */}
          <div className=" bg-[#F4F6F6] px-6 py-4 sticky top-0 ">
            <div className="container mx-auto flex items-center justify-between">
              <h1 className="md:w-2/12 cursor-pointer text-gray-800 ">
                <Link to="/home" className="flex">
                  <img
                    src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
                    className="inline-block w-20 h-20 rounded-lg"
                  ></img>
                </Link>
              </h1>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li className=" border-b-4 border-transparent ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer">
                  <Links
                    style="text-base text-gray-800 ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer"
                    path="/home"
                    texto="Inicio"
                  />
                </li>
                <li className=" border-b-4 border-transparent ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer">
                  <Links
                    texto="Encontrados"
                    path="/estado/encontrado"
                    name="encontrado"
                    style=" text-base text-gray-800 ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer"
                    handleClick={handleClick}
                  />
                </li>
                <li className=" border-b-4 border-transparent ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer">
                  <Links
                    texto="Perdidos"
                    path="/estado/perdido"
                    name="perdido"
                    style=" text-base text-gray-800 ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer"
                    handleClick={handleClick}
                  />
                </li>
                <li className=" border-b-4 border-transparent ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer">
                  <Links
                    texto="Adopción"
                    path="/estado/adopcion"
                    name="adopcion"
                    style=" text-base text-gray-800 ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer"
                    handleClick={handleClick}
                  />
                </li>
              </ul>
              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <SearchBar
                  styleDiv="hidden lg:flex items-center"
                  ariaLabel="Buscar"
                  styleButton="text-gray-800   hover:text-[#28B0A2] "
                  handleClick={() => setSearchInput(!searchInput)}
                  id="searchInput"
                  type="text"
                  placeholder="Buscar..."
                  handleChange={handleChange}
                  styelInput={` ${
                    searchInput ? "hidden" : ""
                  } text-sm   text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
                />

                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <Icons
                    ariaLabel="view favourites"
                    path="/favoritos"
                    linkStyle="text-gray-800 hover:text-[#28B0A2]"
                    icon="favoritos"
                  />
                  {!isLoading && isAuthenticated ? (
                    <>
                      <Icons
                        ariaLabel="mi cuenta"
                        path="/account"
                        linkStyle="text-gray-800  focus:outline-none"
                      >
                        <div className="">
                          <img
                            src={
                              myProfileData["userProps"]?.image
                                ? myProfileData["userProps"]?.image
                                : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1664199194/mascotapps/Dise%C3%B1o_sin_t%C3%ADtulo_1_qqzx4h.png"
                            }
                            className="w-8 h-8 rounded-full overflow-hidden mx-auto relative object-cover object-center"
                          />
                        </div>
                      </Icons>
                      <Push myProfileData={myProfileData} />
                    </>
                  ) : (
                    <LoginButton
                      text="Acceder"
                      className={`bg-[#28B0A2] tracking-wide text-white font-semibold h-fit transition-all  py-1.5 px-3 text-center ml-auto w-full md:w-max rounded hover:bg-[#1f978b] hover:text-white`}
                    />
                  )}
                </div>
                <div className="flex lg:hidden">
                  <NavBtn
                    ariaLabel="show options"
                    icon="menu"
                    handleClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    btnStyle="text-black  hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  />
                  <NavBtn
                    ariaLabel="open menu"
                    icon="menu"
                    handleClick={() => setShowMenu(true)}
                    btnStyle="text-black md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE*/}
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex z-50" : "hidden"
            } absolute z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-between border-b border-gray-200  pb-4 p-4">
              <SearchBar
                styleDiv="flex items-center space-x-3"
                styelInput="text-sm  text-gray-600 placeholder-gray-600  focus:outline-none"
                ariaLabel="Buscar..."
                type="text"
                placeholder="Buscar..."
                handleChange={handleChange}
              />
              <NavBtn
                ariaLabel="close menu"
                btnStyle="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                handleClick={() => setShowMenu(false)}
                icon="close"
              />
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <Link
                    to="/home"
                    href="javascript:void(0)"
                    className=" flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Inicio
                    <div>
                      <svg
                        className="fill-stroke text-black "
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    name="encontrado"
                    to="/estado/encontrado"
                    onClick={handleClick}
                    className="flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Encontrados
                    <div>
                      <svg
                        className="fill-stroke text-black "
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleClick}
                    name="perdido"
                    to="/estado/perdido"
                    className="flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Perdidos
                    <div>
                      <svg
                        className="fill-stroke text-black "
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    name="adopcion"
                    to="/estado/adopcion"
                    onClick={handleClick}
                    className=" flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Adopción
                    <div>
                      <svg
                        className="fill-stroke text-black "
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-full flex items-end">
              <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 ">
                {!isLoading && isAuthenticated ? (
                  <>
                    <Link
                      to="/account"
                      className="text-gray-800 flex items-center justify-start space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            myProfileData["userProps"]?.image
                              ? myProfileData["userProps"]?.image
                              : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1664199194/mascotapps/Dise%C3%B1o_sin_t%C3%ADtulo_1_qqzx4h.png"
                          }
                          className="w-8 h-8 rounded-full overflow-hidden mx-auto relative object-cover object-center"
                        />
                        <p className="text-base">Mi perfil</p>
                      </div>
                    </Link>
                    <div className="flex items-center gap-3">
                      <Push />
                      <p className="text-base">Activar notificaciones</p>
                    </div>
                  </>
                ) : (
                  <LoginButton
                    text="Iniciar sesión"
                    className={`bg-[#28B0A2] tracking-wide text-white font-semibold h-fit transition-all  py-1.5 px-3 text-center ml-auto w-full md:w-max rounded hover:bg-[#1f978b] hover:text-white`}
                  />
                )}

                <li>
                  <Link
                    to="/favoritos"
                    href="javascript:void(0)"
                    className="text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    <div>
                      <svg
                        className="fill-stroke"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-base">Favoritos</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
