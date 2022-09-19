// import React from "react";
import Swal from "sweetalert2";

const LoginAdmin = () => {
  const adminName = "adm_mascotapp";
  const adminPass = "mascotapp1234";

  return Swal.fire({
    title: "Bienvenido",
    text: "Inicia sesión para continuar",
    html: `<input type="password" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: "Inicia sesión",
    confirmButtonColor: "#28B0A2",
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#login").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!login || !password) {
        Swal.showValidationMessage(`Ingrese su usuario y contraseña`);
      } else if (login !== adminName || password !== adminPass) {
        Swal.showValidationMessage(`Verifique los datos ingresados`);
      }
      return { login: login, password: password };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Bienvenido!",
        icon: "success",
        confirmButtonColor: "#28B0A2",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.replace("/admin/general");
        }
      });
    }
  });
};

export default LoginAdmin;
