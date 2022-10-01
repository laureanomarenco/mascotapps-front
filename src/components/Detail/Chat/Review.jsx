import React, { Component } from "react";
// import axios from "axios";
export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      confirm_where: "",
      contact: "",
      condicion: "",
      fecha: "",
      hora: "",
      lugar: "",
      where2: "",
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    console.log(steps);
    const {
      name,
      confirm_where,
      contact,
      condicion,
      fecha,
      hora,
      lugar,
    } = steps;
    console.log(condicion, fecha, hora, lugar);

    this.setState({
      name,
      confirm_where,
      contact,
      condicion,
      fecha,
      hora,
      lugar,
    });

    // axios
    //   .post("https://juka-production.up.railway.app/comments/newComment", {
    //     state: this.state,
    //     petId: this.props.pet.id,
    //   })
    //   .then((res) => {
    //     console.log(res.status);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
  render() {
    const { pet } = this.state;
    console.log("ACA EL ESTADO SETEADO", this.state);
    console.log(pet);
    const {
      name,
      contact,
      confirm_where,
      condicion,
      fecha,
      hora,
      lugar,
    } = this.state;

    const nuevoObjeto = {
      name: name,
      contact: contact,
      condicion: condicion,
      fecha: fecha,
      hora: hora,
      lugar: lugar,
    };
    console.log("NUEVO OBJETO", nuevoObjeto);
    console.log(this.state);
    return (
      <div style={{ width: "100%" }}>
        <h3>Resumen</h3>
        <table>
          <tbody>
            <tr>
              <td className="font-semibold">Nombre</td>
              <td className="capitalize">{name.value}</td>
            </tr>
            <tr>
              <td className="font-semibold">Dónde: </td>
              <td className="capitalize">{confirm_where.value}</td>
            </tr>
            <tr>
              <td className="font-semibold">Contacto: </td>
              <td className="capitalize">
                {contact ? contact.value : "No ha dejado datos de contacto"}
              </td>
            </tr>
            <tr>
              <td className="font-semibold">Contacto: </td>
              <td className="capitalize">
                {contact ? contact.value : "No ha dejado medio de contacto"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
