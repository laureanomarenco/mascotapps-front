import React, { useState } from "react";
import Card from "../Card/Card";
// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import swal from 'sweetalert';
import { useDispatch, useSelector } from "react-redux";
import FormFilter from "../FormFilter/FormFilter";
import { resetDetail, filterPets} from "../../store/actions";
const PetsContainer = () => {
  // const dispatch=useDispatch();
  // const {status}=useParams();
  
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
      [e.target.name] : e.target.value
    }
    dispatch(filterPets(obj));
  };
  const showAlert=()=>{
    swal("Oops","No se encuntra una mascota con esas caracteristicas.","error",{
      button:"ok"
    })
    .then(()=>handleClearFilter())
  }
  const handleClearFilter = () => {
    dispatch(resetDetail());
    setFilter({
      specie: "",
      gender: "",
      age: "",
      race: "",
    });
  };
{/* <NotFound  handleClearFilter={handleClearFilter} /> */}
  return (
    <div>
      <Navbar />
      <FormFilter handleClearFilter={handleClearFilter} filter={filter} handleFilter={handleFilter}/>
        {notFound && showAlert() }
      <div className=" grid gap-1 grid-cols-1 gird-rows-1 md:grid-cols-2 xl:gird-cols-3 2xl:grid-cols-3 bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
        {filterPet.length > 0 && !notFound
          ? filterPet.map((fPet) => <Card key={fPet.id} data={fPet} />)
          : !notFound && pets?.map((pet) => <Card key={pet.id} data={pet} />)}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default PetsContainer;
