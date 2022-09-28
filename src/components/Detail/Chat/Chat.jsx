import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      where: "",
      contact: "",
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    const { name, where, contact } = steps;

    this.setState({ name, where, contact });
  }

  render() {
    const { name, where, contact } = this.state;
    console.log({
      Nombre: name.value,
      Donde: where.value,
      Contacto: contact.value,
    });
    return (
      <div style={{ width: "100%" }}>
        <h3>Resumen</h3>
        <table>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Dónde</td>
              <td>{where.value}</td>
            </tr>
            <tr>
              <td>Contacto</td>
              <td>{contact.value}</td>
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
    return (
      <ChatBot
        steps={[
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
            message: "Hola {previousValue}! ¿Dónde viste esta mascota?",
            trigger: "where",
          },
          {
            id: "where",
            user: true,
            trigger: "5",
          },
          {
            id: "5",
            message:
              "Deja un número para que el anunciante se ponga en contacto",
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
        ]}
      />
    );
  }
}

export default SimpleForm;
