import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/actions/index";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import Swal from "sweetalert2";

export default function CardContainer() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoading);
  const pets = useSelector((state) => state.pets);
  const searchedPets = useSelector((state) => state.searchedPets);
  const notFound = useSelector((state) => state.notFound);

  const [page, setPage] = useState(1);
  const showPerPage = 6;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const showPets = pets.slice(firstOnPage, lastOnPage);
  const showSearch = searchedPets.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    // window.scrollTo(0, 0);
    setPage(pageNumber);
  }

  useEffect(() => {
    !pets.length && dispatch(fetchPets());
  }, [dispatch]);

  const showAlert = () => {
    Swal.fire({
      title: "UPS!",
      text: "Hubo un error en el servidor. Reintente recargando la página",
      icon: "error",
      confirmButtonText: "Recargar",
    }).then(() => location.reload());
  };
  return (
    <div
      className={`${
        loading
          ? "grid gap-1 grid-rows-1 pt-40"
          : "grid gap-1 grid-rows-1 md:grid-cols-2 xl:grid-cols-3 "
      } grid-cols-1 min-h-[70vh]`}
    >
      {notFound && showAlert()}
      {loading && !notFound ? (
        <Spinner />
      ) : searchedPets.length > 0 ? (
        showSearch?.map((pet, i) => <Card key={i} data={pet} />)
      ) : (
        showPets?.map((pet) => <Card key={pet.id} data={pet} />)
      )}

      <div className="md:col-span-3 justify-self-center">
        <Pagination
          pets={searchedPets.length < 1 && pets.length > 0 ? pets.length : null}
          searchedPets={searchedPets.length > 0 ? searchedPets.length : null}
          showPerPage={showPerPage}
          page={page}
          pagination={pagination}
        />
      </div>
    </div>
  );
}
