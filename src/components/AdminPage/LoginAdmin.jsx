// import React from "react";
// import axios from "axios";
import axios from "axios";
import Swal from "sweetalert2";
// import { header } from "../../constants/token";

const LoginAdmin = () => {
  // const adminName = "adm_mascotapp";
  const adminPass = "SoyAdmin";
  const tokenAccess = localStorage.getItem("token");
  return Swal.fire({
    title: "Bienvenido",
    text: "Inicia sesión para continuar",
    html: `
    <input type="password" id="password" class="swal2-input" placeholder="Password" name="password" >`,
    confirmButtonText: "Inicia sesión",
    confirmButtonColor: "#28B0A2",
    focusConfirm: false,
    preConfirm: () => {
      const password = Swal.getPopup().querySelector("#password").value;
      if (!password) {
        Swal.showValidationMessage(`Ingrese su usuario y contraseña`);
      } else if (password !== adminPass) {
        Swal.showValidationMessage(`Verifique los datos ingresados`);
      }
      return { password: password };
    },
  }).then(async (result) => {
    console.log(result.value.password);
    if (result.isConfirmed) {
      await axios
        .post(
          "https://juka-production.up.railway.app/admin/hasAdminPowers/",
          {
            password: result.value.password,
          },
          {
            headers: {
              Authorization: `Bearer ${tokenAccess}`,
            },
          }
        )
        .then((res) => {
          console.log(res.status);
          Swal.fire({
            title: "Bienvenido!",
            icon: "success",
            confirmButtonColor: "#28B0A2",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/admin/general");
            }
          });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "Ups!",
            message: error.message,
            icon: "error",
            confirmButtonColor: "#28B0A2",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/admin/");
            }
          });
        });
    }
  });
};

export default LoginAdmin;
