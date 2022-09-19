import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {useHistory} from 'react-router-dom';
import {fetchCity} from '../../store/actions/index'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {AiOutlineUserAdd} from 'react-icons/ai'
import {MdAlternateEmail} from 'react-icons/md'
import {RiLockPasswordLine} from 'react-icons/ri'
// import {MdOutlineLocationOn} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const SignUp = () => {

  //CIUDADES ARG
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cities)
  useEffect(() => {
    dispatch(fetchCity())
  }, [dispatch])
  
  let localidades = cities?.map(loc => {
    return {
      nombre: loc.nombre,
      provincia: loc.provincia.nombre
    }
  })

  localidades = localidades.sort((a,b) => a.provincia - b.provincia).map(l=> `${l.nombre}, ${l.provincia}`)  

  console.log(localidades)


  //ESTADOS

  const [input, setInput] = useState({
    name: '', email: '', password: '', 
    city: '', contact: '', image:''
  });  
  const [errors, setErrors] = useState({});

  const handleChange= (e)=>{
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
  }))
  }

  //VALIDACIONES
  function validate (input) {
    let errorObj = {}
      if (!input.name.trim()) {
        errorObj.name = "Todos los datos son obligatorios";
      }
      if (input.name.search("[0-9]") !== -1) {
        errorObj.name = "El nombre puede incluir números";
      }
      if (input.name.search("[^A-Za-z0-9]") !== -1) {
        errorObj.name = "El nombre puede incluir números, símbolos ni espacios";
      }
      if(!input.email.trim()){
        errorObj.email = 'Debes incluir tu email'
      }
      if (!input.password.trim()) {
        errorObj.password = "Debes incluir una contraseña";
      }
      // if (!input.city.trim()) {
      //   errorObj.city = "Debes indicar tu ciudad";
      // }
      if (!input.contact.trim()) {
        errorObj.contact = "Debes incluir un número de contacto";
      }
    return errorObj;
  }  

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(errors.name || errors.email || errors.password || errors.city || errors.contact) {
      alert('Verifique los campos')
    } else {
      alert('Usuario creado correctamente')
      setInput({})
    }
  }



  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
    <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-6 lg:py-12">
  
    <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Registro de Usuario</h1>
  
        <p className="mt-4 text-gray-500">
          Registrate completando el siguiente formulario y<br></br> 
          accede a todas las funcionalidades de la app!
        </p>
      </div>
  

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 mb-0 space-y-2">

        <div>
          <label htmlFor="nombre" className="sr-only">Nombre</label>
  
          <div className="relative">
            <input

              onChange={handleChange}
              type="text"
              name="name"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
              placeholder="Nombre"
              value={input.name}

            />
  
            <span className="absolute inset-y-0 inline-flex items-center right-4">
            <AiOutlineUserAdd color='grey'/>
            </span>
          </div>

          <div className="text-center text-xs text-red-500 mt-1">
        {!errors.name ? null : <span >*{errors.name}</span>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>
  
          <div className="relative">
            <input
              onChange={(e)=> handleChange(e)}

              type="email"
              name="email"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Email"

              value={input.email}

            />
  
            <span className="absolute inset-y-0 inline-flex items-center right-4">
            <MdAlternateEmail color='grey'/>
            </span>
          </div>

          <div className="text-center text-xs text-red-500 mt-1">
        {!errors.email ? null : <span >*{errors.email}</span>}
          </div>

        </div>
  
        <div>
          <label htmlFor="password" className="sr-only">Contraseña</label>
          <div className="relative">
            <input

              onChange={handleChange}

              type="password"
              name="password"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Contraseña"

              value={input.password}

            />
  
            <span className="absolute inset-y-0 inline-flex items-center right-4">
            <RiLockPasswordLine color='grey'/>
            </span>
          </div>

          <div className="text-center text-xs text-red-500 mt-1">
        {!errors.password ? null : <span >*{errors.password}</span>}
          </div>
        </div>
    

        <div>
          <div className="relative">
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={localidades}
                  sx={{ width: 1, borderRadius: 16, border: 0  }}
                  renderInput={(params) => <TextField {...params} label="Provincia, localidad ..." onChange={handleChange} name='city'/>}
                  
              />
          </div>

          <div className="text-center text-xs text-red-500 mt-1">
        {!errors.city ? null : <span >*{errors.city}</span>}
          </div>

        </div>

        <div>
          <label htmlFor="contact" className="sr-only">Contacto</label>
  
          <div className="relative">
            <input
              onChange={handleChange}

              type="text"
              name="contact"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Contacto"
              value={input.contact}
            />
  
            <span className="absolute inset-y-0 inline-flex items-center right-4">
            <AiOutlineWhatsApp color="grey"/>
            </span>
          </div>

          <div className="text-center text-xs text-red-500 mt-1">
        {!errors.contact ? null : <span >*{errors.contact}</span>}
          </div>
        </div>


        <div className="flex items-center justify-between">
        

        <button
            type="submit"
            className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Regístrate
          </button>

        </div>
        <p className="text-sm text-gray-500 text-center">
            ¿Ya tienes una cuenta?
            <Link to="/"><span className='font-medium text-[#007663] hover:text-teal-500'> Inicia Sesión</span></Link>
          </p>
      </form>
    </div>
  

    <div className="relative  sm:h-96 lg:w-1/2 lg:h-full">

      <img
        className="absolute inset-0 object-cover w-full h-full"
        src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
        alt=""
      />
    </div>
  </section>
  


  )
}

export default SignUp