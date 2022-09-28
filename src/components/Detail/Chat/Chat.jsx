import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class Review extends Component {
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
      fotos: "",
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
      fotos,
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
      fotos,
    });
  }
  render() {
    const { pet } = this.state;

    console.log(pet);
    const {
      name,
      contact,
      confirm_where,
      condicion,
      fecha,
      hora,
      lugar,
      fotos,
    } = this.state;
    console.log({
      Nombre: name,
      Donde: confirm_where,
      Contacto: contact,
      condicion: condicion,
      fecha: fecha,
      hora: hora,
      lugar: lugar,
      foto: fotos,
    });

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

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    console.log(this.props.pet.city.split(",")[1]);

    return (
      <ChatBot
        className="relative mx-auto mt-12"
        headerTitle="Mascochat"
        botAvatar="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664367409/giphy_s_pqbpgn.gif"
        avatarStyle={{
          width: "80px",
          heigth: "180px",
          background: "transparent",
        }}
        bubbleStyle={{ background: "#28B0A2", fontWeight: "semi-bold" }}
        floating="true"
        placeholder="Tu respuesta..."
        // customStyle={{ background: "#FFC700" }}
        bubbleOptionStyle={{
          background: "#28B0A2",
          color: "white",
          fontWeight: "bold",
        }}
        floatingStyle={{
          background: "#FFC700",
          position: "relative",
        }}
        submitButtonStyle={{ fill: "#28B0A2" }}
        steps={[
          {
            id: "0",
            message:
              "Hola! soy MascoBot y me programaron para facilitar tu ayuda!",
            trigger: "1",
          },
          {
            id: "1",
            message: "¿Cuál es tu nombre?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: `Hola {previousValue}! ¿Crees haber visto a ${this.props.pet.name}?`,
            trigger: "confirm",
          },
          {
            id: "confirm",
            options: [
              { value: "no", label: "No", trigger: "finish" },
              { value: "si", label: "Si", trigger: "where" },
            ],
          },

          {
            id: "where",
            message: `¿Has visto a ${this.props.pet.name} en ${
              this.props.pet.city.split(",")[1]
            }?`,
            trigger: "confirm_where",
          },
          {
            id: "confirm_where",
            options: [
              { value: "no", label: "No", trigger: "preg-province" },
              {
                value: "si",
                label: "Si",
                trigger: "preg-province-next",
                metadata: { provincia: this.props.pet.city.split(",")[1] },
              },
            ],
          },
          {
            id: "preg-province",
            message: "Entonces, ¿en qué provincia la viste? -Ej: 'Santa Fé'-",
            trigger: "province",
          },

          {
            id: "province",
            user: true,
            trigger: "preg-city",
          },

          {
            id: "preg-province-next",
            message: `¿Has visto a ${this.props.pet.name} en ${
              this.props.pet.city.split(",")[0]
            }?`,
            trigger: "where-2",
          },
          {
            id: "where-2",
            options: [
              { value: "no", label: "No", trigger: "preg-city" },
              {
                value: `si`,
                label: "Si",
                metadata: { localidad: `${this.props.pet.city.split(",")[0]}` },
                trigger: "preg-city-next",
              },
            ],
          },
          {
            id: "preg-city",
            message: "¿En qué localidad la viste? -Ej: 'Vicente López'-",
            trigger: "city",
          },
          {
            id: "city",
            user: true,
            trigger: "preg-city-next",
          },

          {
            id: "preg-city-next",
            message:
              "Te acordás por dónde más precisamente? Ej: 'Av. San Martín al 4000 / 'Estación Acassuso del tren Mitre'",
            trigger: "lugar",
          },
          {
            id: "lugar",
            user: true,
            trigger: "preg-dia",
          },
          {
            id: "preg-dia",
            message:
              " Qué fecha o dia? Ej: '20 de septiembre'/'Ayer-miercoles '",
            trigger: "fecha",
          },
          {
            id: "fecha",
            user: true,
            trigger: "preg-hora",
          },
          {
            id: "preg-hora",
            message: "En qué hora del día? Ej: 'mañana, tarde, noche, 16:30hs'",
            trigger: "hora",
          },
          { id: "hora", user: true, trigger: "preg-condicion" },
          {
            id: "preg-condicion",
            message:
              "En qué condiciones estaba la mascota? Ej: 'Se veía flaca y con frío / Se veía en buen estado'",
            trigger: "condicion",
          },
          {
            id: "condicion",
            user: true,
            trigger: "preg-info",
          },
          {
            id: "preg-info",
            message: `¿Tenés más información para compartir que pueda ayudar a ecnontrar a ${this.props.pet.name}?`,
            trigger: "confirm-info",
          },

          {
            id: "confirm-info",
            options: [
              { value: "no", label: "No", trigger: "preg-img" },
              { value: "si", label: "Si", trigger: "text-comentarios" },
            ],
          },
          {
            id: "text-comentarios",
            message: "Ingresa la información que deseas agregar",
            trigger: "comentarios",
          },
          {
            id: "comentarios",
            user: true,
            trigger: "preg-img",
          },
          {
            id: "preg-img",
            message: "¿Tenés fotos para compartir?",
            trigger: "confirm-preg-img",
          },
          {
            id: "confirm-preg-img",
            options: [
              { value: "no", label: "No", trigger: "preg-contact" },
              { value: "si", label: "Si", trigger: "fotos" },
            ],
          },
          {
            id: "fotos",
            user: true,
            inputAttributes: { type: "file" },
            trigger: "preg-contact",
          },

          {
            id: "preg-contact",
            message: `¿Querés dejar alguna información de contacto para que se pueda comunicar con vos? Solo lo podrá ver el dueño de la mascota.`,
            trigger: "confirm-contact",
          },

          {
            id: "confirm-contact",
            options: [
              { value: "no", label: "No", trigger: "7" },
              { value: "si", label: "Si", trigger: "text-contact" },
            ],
          },
          {
            id: "text-contact",
            message: "Deja tu numero de contacto a continuacion...",
            trigger: "contact",
          },
          {
            id: "contact",
            user: true,
            trigger: "7",
            validator: (value) => {
              if (isNaN(value)) {
                return "debe ser un número";
              } else if (value.length < 10) {
                return "value must be positive";
              }
              return true;
            },
          },
          {
            id: "7",
            message: "Genial! Veamos un resumen de los datos ingresados",
            trigger: "review",
          },
          {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "update",
          },
          {
            id: "update",
            message: "¿Los datos son correctos?",
            trigger: "update-question",
          },
          {
            id: "update-question",
            options: [
              { value: "no", label: "No", trigger: "update-yes" },
              { value: "si", label: "Si", trigger: "end-message" },
            ],
          },
          {
            id: "update-yes",
            message: "¿Qué datos deseas modificar?",
            trigger: "update-fields",
          },
          {
            id: "update-fields",
            options: [
              { value: "name", label: "name", trigger: "update-name" },
              { value: "where", label: "where", trigger: "update-where" },
              {
                value: "contact",
                label: "contact",
                trigger: "update-contact",
              },
            ],
          },
          {
            id: "update-name",
            update: "name",
            trigger: "7",
          },
          {
            id: "update-where",
            update: "where",
            trigger: "7",
          },
          {
            id: "update-contact",
            update: "contact",
            trigger: "7",
          },
          {
            id: "end-message",
            message: "Gracias! Tus datos han sido enviados!",
            end: true,
          },
          {
            id: "finish",
            message: "Bueno muchas gracias pero no atiendo peleles",
            end: true,
          },
        ]}
      />
    );
  }
}

// export default SimpleForm;

function mapStateToProps(state) {
  return {
    pet: state.pet,
    user: state.myProfile,
  };
}

export default connect(mapStateToProps, null)(SimpleForm);
