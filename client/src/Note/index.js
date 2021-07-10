import React from 'react'
import './style.css'
import erase from '../assets/erase.svg'
import Axios from 'axios'

function Note(props) {

    const eraseNote = (id) => {
        console.log('apagou', id)
        Axios.delete(`http://localhost:3001/api/deletar/${id}`)
    }

    return(
        <article className="nota">
            <div className="nota__conteudo">
                <h2>{props.titulo}</h2>
                <p>{props.conteudo}</p>
            </div>
            <span className="nota__button">
            </span>
            <button onClick={()=> {eraseNote(props.id)}}><img src={erase} alt="X"></img></button>
        </article>
    )
}

export default Note