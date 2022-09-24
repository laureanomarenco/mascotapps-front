const validate = (input) => {
  let error = {};

  if (input.name.search("[0-9]") !== -1) {
    error.name = "El Nombre no puede tener numeros*";
  }
  // if (input.name.search("[^A-Za-z0-9]") !== -1) {
  //   error.name = "El Nombre no puede tener simbolos*";
  // }
  if (!input.specie) {
    error.specie= "Selecciona una especie*";
  }
  if (!input.race.trim()) {
    error.race = "raza requrido*";
  }
  if (input.race.search("[0-9]") !== -1) {
    error.race = "La raza no puede tener numeros*";
  }
  if (input.race.search("[^A-Za-z0-9]") !== -1) {
    error.race = "La raza no puede tener simbolos*";
  }
  if (!input.status) {
    error.status = "Selecciona el estado de la mascota*";
  }
  if (!input.gender) {
    error.gender = "Selecciona el genero de la mascota*";
  }
  if (!input.age) {
    error.age = "Selecciona la edad de la mascota*";
  }
  if (!input.vaccinationSchemeStatus) {
    error.vaccinationSchemeStatus = "Seleccione una opcion*";
  }
  if (!input.comments) {
    error.comments = "Completa con una breve descripcion";
  }
  if (input.comments.search("[0-9]") !== -1) {
    error.comments = "La descripcion no puede tener numeros*";
  }
  if (!input.contact.trim()) {
    error.contact = "Numero de contacto requerido*";
  }
  // if (!input.city) {
  //   error.city = "Seleccione un pais*";
  // }
  return error;
};
export default validate;
