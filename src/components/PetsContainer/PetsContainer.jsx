import React, { useState, useEffect } from "react";

import Card from "../Card/Card";
import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import Pagination from "../Pagination/Pagination";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import FormFilter from "../FormFilter/FormFilter";
import { resetDetail, filterPets, getPetsByStatus } from "../../store/actions";
import { useLocation } from "react-router-dom";
import RenderText from "./RenderText";

const PetsContainer = () => {
  const pets = useSelector((state) => state.statusPets);
  const filterPet = useSelector((state) => state.filterPets);

  const notFound = useSelector((state) => state.notFound);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    specie: "",
    gender: "",
    age: "",
    race: "",
    city: "",
  });

  let location = useLocation();
  let statusText = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getPetsByStatus(location.pathname.split("/")[2]));
  }, []);

  const handleFilter = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
    const obj = {
      ...filter,
      [e.target.name]: e.target.value,
    };
    dispatch(filterPets(obj));
  };

  const showAlert = () => {
    Swal.fire({
      title: "Error!",
      text: "No pudimos encontrar una mascota con esas características",
      icon: "error",
      confirmButtonText: "Ok",
    }).then(() => handleClearFilter());
  };

  const handleClearFilter = () => {
    dispatch(resetDetail());
    setFilter({
      specie: "",
      gender: "",
      age: "",
      race: "",
      city: "",
    });
  };
  useEffect(() => {
    return () => {
      dispatch(resetDetail());
      setFilter({
        specie: "",
        gender: "",
        age: "",
        race: "",
        city: "",
      });
    };
  }, [pets]);

  const [page, setPage] = useState(1);
  const showPerPage = 6;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const showPets = filterPet?.slice(firstOnPage, lastOnPage);
  const showByStatus = pets?.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    setPage(pageNumber);
  }

  return (
    <div>
      <Navbar setPage={setPage} />
      <RenderText statusText={statusText} />
      <FormFilter
        handleClearFilter={handleClearFilter}
        filter={filter}
        handleFilter={handleFilter}
        filterPet={filterPet}
        pets={pets}
      />
      {notFound && showAlert()}
      {/* xs:col-span-2 md:col-span-2 justify-self-center */}
      <Pagination
        filterPets={filterPet.length}
        statusPets={pets.length}
        pagination={pagination}
        showPerPage={showPerPage}
        page={page}
      />
      <div className="grid gap-1 grid-rows-1 md:grid-cols-2 xl:grid-cols-3 justify-self-center">
        {showPets.length > 0 && !notFound
          ? showPets.map((fPet) => <Card key={fPet.id} data={fPet} />)
          : !notFound &&
            showByStatus?.map((pet) => <Card key={pet.id} data={pet} />)}
      </div>
      <Footer />
    </div>
  );
};

export default PetsContainer;
