import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas';
import FormalarioCadastro from './components/FormularioCadastro';

class App extends Component {
  render(){
    return (
      <section>
        <FormalarioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
