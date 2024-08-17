import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas';
import FormalarioCadastro from './components/FormularioCadastro';
import"./assest/app.css";
import "./assest/index.css";

class App extends Component {
  render(){
    return (
      <section className="container">
        <FormalarioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
