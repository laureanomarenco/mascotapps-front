import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    console.log(name.value, gender.value, age.value);
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
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
            message: "Cual es tu nombre?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "2",
          },
          {
            id: "2",
            message: "Hola, {previousValue}! ¿Crees que viste a esta mascota?",
            trigger: "vista",
          },
          {
            id: "vista",
            options: [
              { value: "Si", label: "Si", trigger: "5" },
              { value: "No", label: "No", trigger: "6" },
            ],
          },
          {
            id: "5",
            message: "¿Dónde crees haberla visto?",
            trigger: "contact",
          },
          {
            id: "6",
            message: "Gracias por tu ayuda!",
            end: true,
          },
          {
            id: "contact",
            message: "Deja un número de contacto",
            trigger: "7",
          },
          {
            id: "7",
            user: true,
            trigger: "review",
          },
          {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "end-message",
          },
          // {
          //   id: "update",
          //   message: "Would you like to update some field?",
          //   trigger: "update-question",
          // },
          // {
          //   id: "update-question",
          //   options: [
          //     { value: "yes", label: "Yes", trigger: "update-yes" },
          //     { value: "no", label: "No", trigger: "end-message" },
          //   ],
          // },
          // {
          //   id: "update-yes",
          //   message: "What field would you like to update?",
          //   trigger: "update-fields",
          // },
          // {
          //   id: "update-fields",
          //   options: [
          //     { value: "name", label: "Name", trigger: "update-name" },
          //     { value: "gender", label: "Gender", trigger: "update-gender" },
          //     { value: "age", label: "Age", trigger: "update-age" },
          //   ],
          // },
          // {
          //   id: "update-name",
          //   update: "name",
          //   trigger: "7",
          // },
          // {
          //   id: "update-gender",
          //   update: "gender",
          //   trigger: "7",
          // },
          // {
          //   id: "update-age",
          //   update: "age",
          //   trigger: "7",
          // },
          {
            id: "end-message",
            message: "Thanks! Your data was submitted successfully!",
            end: true,
          },
        ]}
        hideInput={true}
      />
    );
  }
}

export default SimpleForm;
