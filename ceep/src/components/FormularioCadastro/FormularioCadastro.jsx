import React, { Component } from "react"
import "./estilo.css"
class FormalarioCadastro extends Component{
    render(){
        return(
            <form>
                <input type='text' placeholder="Titulo"/>
                <textarea placeholder="Escreva sua nota..." rows={15}></textarea>
                <button>Criar Nota</button>
            </form>
        )
    }
}

export default FormalarioCadastro;

