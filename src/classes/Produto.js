import React from "react";

class Produto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
  }

  componentDidMount() {
    console.log("Elemento foi montado");
  }

  componentDidUpdate() {
    document.title = this.state.contar;
  }

  componentWillUnmount() {
    console.log("Elemento saiu da tela");
  }

  handleClick = () => {
    console.log(this);
    this.setState((state) => ({ contar: state.contar + 1 }));
  };

  render() {
    return (
      <>
        <h1>{this.props.titulo} </h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </>
    );
  }
}
export default Produto;
