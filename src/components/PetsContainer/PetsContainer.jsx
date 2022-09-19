import React, { useState, useEffect } from "react";

import Card from "../Card/Card";
// import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import Pagination from "../Pagination/Pagination";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import FormFilter from "../FormFilter/FormFilter";
import { resetDetail, filterPets } from "../../store/actions";

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
  });

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
    });
  };
  useEffect(() => {
    return (() => {
      dispatch(resetDetail())
      setFilter({
        specie: "",
        gender: "",
        age: "",
        race: "",
      });
    })
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
      <Navbar />
      <FormFilter
        handleClearFilter={handleClearFilter}
        filter={filter}
        handleFilter={handleFilter}
        filterPet={filterPet}
        pets={pets}
      />
      {notFound && showAlert()}
      <div className=" grid gap-1 grid-cols-1 gird-rows-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
        {showPets.length > 0 && !notFound
          ? showPets.map((fPet) => <Card key={fPet.id} data={fPet} />)
          : !notFound &&
            showByStatus?.map((pet) => <Card key={pet.id} data={pet} />)}
        <div className="md:col-span-3 mx-auto mb-2 mt-0">
          <Pagination
            filterPets={filterPet.length}
            statusPets={pets.length}
            pagination={pagination}
            showPerPage={showPerPage}
            page={page}
          ></Pagination>
        </div>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default PetsContainer;
