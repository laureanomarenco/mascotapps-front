import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
// import Review from "./Review.jsx";
import Post from "./Post.jsx";
import { ThemeProvider } from "styled-components";

// Review.propTypes = {
//   steps: PropTypes.object,
// };

// Review.defaultProps = {
//   steps: undefined,
// };
// all available theme props
const theme = {
  background: "#f5f8fb",
  headerBgColor: "#FFC700",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  headerFontWeight: "bold",
  botBubbleColor: "#28B0A2",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          className="relative mx-auto mt-8 rounded"
          headerTitle="Mascochat"
          botAvatar="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664378896/pngwing.com_8_asimhv.png"
          avatarStyle={{
            width: "80px",
            heigth: "180px",
            background: "transparent",
          }}
          // bubbleStyle={{ background: "#28B0A2", fontWeight: "semi-bold" }}
          hideUserAvatar={true}
          floating="true"
          placeholder="Tu respuesta..."
          // customStyle={{ background: "#FFC700" }}
          bubbleOptionStyle={{
            background: "#FFD803",
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
              message:
                "¿Cuál es tu nombre? Si prefieres no decirlo, pulsa ENTER",
              trigger: "name",
            },
            {
              id: "name",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: `Hola {previousValue}! ¿Crees haber visto a ${this.props.pet?.name}?`,
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
              message: `¿Has visto a ${this.props.pet?.name} en ${
                this.props.pet?.city?.split(",")[1]
              }?`,
              trigger: "confirm_where",
            },
            {
              id: "confirm_where",
              options: [
                { value: "no", label: "No", trigger: "preg-province" },
                {
                  value: this.props.pet?.city?.split(",")[1],
                  label: "Si",
                  trigger: "preg-province-next",
                  metadata: { provincia: this.props.pet?.city?.split(",")[1] },
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
              validator: (value) => {
                if (isNaN(value) && value.length > 4) {
                  return true;
                }
                return "Introduce una provincia válida";
              },
            },

            {
              id: "preg-province-next",
              message: `¿Has visto a ${this.props.pet?.name} en ${
                this.props.pet?.city?.split(",")[0]
              }?`,
              trigger: "where2",
            },
            {
              id: "where2",
              options: [
                { value: "no", label: "No", trigger: "preg-city" },
                {
                  value: `${this.props.pet?.city?.split(",")[0]}`,
                  label: "Si",
                  metadata: {
                    localidad: `${this.props.pet?.city?.split(",")[0]}`,
                  },
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
              validator: (value) => {
                if (isNaN(value) && value.length > 3) {
                  return true;
                }
                return "Introduce una ciudad válida";
              },
            },

            {
              id: "preg-city-next",
              message:
                "¿Te acordás por dónde más precisamente? Ej: 'Av. San Martín al 4000 / 'Estación Acassuso del tren Mitre'",
              trigger: "lugar",
            },
            {
              id: "lugar",
              user: true,
              trigger: "preg-dia",
              validator: (value) => {
                if (isNaN(value) && value.length > 5) {
                  return true;
                }
                return "Introduce un dato válido";
              },
            },
            {
              id: "preg-dia",
              message:
                "¿Qué fecha o dia? Ej: '20 de septiembre'/'Ayer-miercoles'",
              trigger: "fecha",
            },
            {
              id: "fecha",
              user: true,
              trigger: "preg-hora",
              validator: (value) => {
                if (isNaN(value) && value.length > 2) {
                  return true;
                }
                return "Introduce una fecha válida";
              },
            },
            {
              id: "preg-hora",
              message:
                "¿En qué hora del día? Ej: 'mañana, tarde, noche, 16:30hs'",
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
              message: `¿Tenés más información para compartir que pueda ayudar a encontrar a ${this.props.pet?.name}?`,
              trigger: "confirm-info",
            },

            {
              id: "confirm-info",
              options: [
                { value: "no", label: "No", trigger: "preg-contact" },
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
                { value: "no", label: "No", trigger: "review" },
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
              trigger: "review",
              validator: (value) => {
                if (isNaN(value)) {
                  return "Introduce un número válido";
                } else if (value.length < 10 || value.length > 11) {
                  return "Introduce un número válido";
                }
                return true;
              },
            },
            // {
            //   id: "7",
            //   message:
            //     "Muchas gracias por colaborar en la búsqueda de " +
            //     this.props.pet.name,
            //   trigger: "review",
            // },
            {
              id: "review",
              component: <Post petId={this.props.pet?.id} />,
              // asMessage: true,
              trigger: "update",
            },
            {
              id: "update",
              message: "Eso es todo. Los datos se enviarán al anunciante.",
              trigger: "end-message",
            },

            {
              id: "end-message",
              message:
                "Muchas gracias por colaborar en la búsqueda de " +
                this.props.pet.name +
                ". Tus datos han sido enviados!",
              end: true,
            },
            {
              id: "finish",
              message: "Bueno, muchas gracias pero no atiendo peleles",
              end: true,
            },
          ]}
        />
      </ThemeProvider>
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
