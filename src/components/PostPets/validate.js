
const validate = (input) => {
  let error={}
 
  if (input.name.search("[0-9]") !== -1) {
    error.name = "El Nombre no puede tener numeros*";
  }
  if (input.name.search("[^A-Za-z0-9]") !== -1) {
    error.name = "El Nombre no puede tener simbolos*";
  }
  if(!input.spices){
    error.spices="Selecciona una especie*"
  }
  if (!input.race.trim()) {
    error.race = "raza requrido*";
  }
  if (input.race.search("[0-9]") !== -1) {
    error.name = "El Nombre no puede tener numeros*";
  }
  if (input.race.search("[^A-Za-z0-9]") !== -1) {
    error.name = "El Nombre no puede tener simbolos*";
  }
  if(!input.state){
    error.state="Selecciona el estado de la mascota*"
  }
  if(!input.gender){
    error.gender="Selecciona el genero de la mascota*"
  }
  if(!input.age){
    error.age="Selecciona una edad aproximada de la mascota*"
  }
  if(!input.vaccination){
    error.spices="Selecciona una especie*"
  }
  if (input.description.search("[0-9]") !== -1) {
    error.description = "La descripcion no puede tener numeros*";
  }
  if (input.description.search("[^A-Za-z0-9]") !== -1) {
    error.description = "La descripcion no puede tener simbolos*";
  }
  if(!input.city){
    error.city="Selecciona una ciudad*"
  }

return error;
}
export default validate