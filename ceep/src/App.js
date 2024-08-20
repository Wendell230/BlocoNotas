import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas';
import FormalarioCadastro from './components/FormularioCadastro';
import"./assest/app.css";
import "./assest/index.css";

class App extends Component {

  constructor(){
    super();
    this.state={
      notas:[]
    }
  }

  criarNota(titulo,texto){
    const novaNota = {titulo,texto}
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)    
  }

  render(){
    return (
      <section className="container">
        <FormalarioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
