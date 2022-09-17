import React from "react";
import Card from "../Card/Card";
// import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import FormFilter from "../FormFilter/FormFilter";
const PetsContainer = () => {
  // const dispatch=useDispatch();
  // const {status}=useParams();
  const pets = useSelector((state) => state.statusPets);
  const filterPets = useSelector((state) => state.filterPets);
  const notFound = useSelector((state) => state.notFound);

  return (
    <div>
      <Navbar />
      <FormFilter />
      <div className=" grid gap-1 grid-cols-1 gird-rows-1 md:grid-cols-2 xl:gird-cols-3 2xl:grid-cols-3 bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
        {notFound && <h1>no hay</h1>}
        {filterPets.length > 0 && !notFound
          ? filterPets.map((fPet) => <Card key={fPet.id} data={fPet} />)
          : !notFound && pets?.map((pet) => <Card key={pet.id} data={pet} />)}
      </div>
      {/* <Footer/> */}
      <Pagination filterPets={filterPets} pets={pets}></Pagination>
    </div>
  );
};

export default PetsContainer;
