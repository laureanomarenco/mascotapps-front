import { Component } from "react";
import axios from "axios";


export default class Post extends Component {
  constructor(props) {
    super(props);
    const { steps, petId } = this.props;
    // console.log(steps);
    console.log(petId);
    const {
      name,
      confirm_where,
      province,
      where2,
      city,
      lugar,
      fecha,
      hora,
      condicion,
      comentarios,
      contact,
    } = steps;

    this.state = {
      petId,
      name,
      confirm_where,
      province,
      where2,
      city,
      lugar,
      fecha,
      hora,
      condicion,
      comentarios,
      contact,
    };
  }

  componentDidMount() {
    const infoPet = {
      petId: this.state.petId,
      nombre: this.state.name.value,
      provincia: !this.state.province?.value
        ? this.state.confirm_where?.value
        : this.state.province.value,
      localidad: !this.state.city?.value
        ? this.state.where2.value
        : this.state.city.value,
      lugar: this.state.lugar?.value,
      fecha: this.state.fecha?.value,
      hora: this.state.hora?.value,
      condicion: this.state.condicion?.value,
      comentarios: this.state.comentarios?.value,
      contact: this.state.contact?.value,
      fotos: undefined,
    };

    axios
      .post(
        `https://juka-production.up.railway.app/comments/newComment`,
        infoPet
      )
      .then((res) => {
        console.log(res.status);
      })
      .catch(function(error) {
        console.log(error);
      });
    // return this.props.chatbotComments(infoPet);
  }
  render() {
    return;
  }
}
//eslint-disable-next-line
// export const mapDispatchToProps = { chatbotComments };

// export default connect(null, mapDispatchToProps)(Post);
