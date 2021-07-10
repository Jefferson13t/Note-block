import React, { useState } from 'react'
import './style.css'
import Axios from 'axios'


function Form() {

    const [ titulo, setTitulo ] = useState('')
    const [ conteudo, setConteudo ] = useState('')

    const insertNewNote = ()=> {
        Axios.post('http://localhost:3001/api/inserir', {
            titulo: titulo,
            conteudo: conteudo
        })
        document.querySelector('.main__form--title').value = ''
        document.querySelector('.main__form--content').value = ''
    }
    

    return(
        <section className="main__form">
            <h1>Inserir nota</h1>
            <div>
                <p>Título</p>
                <input type="text" className="main__form--title" onChange={(e)=> {
                    setTitulo(e.target.value)
                }}/>
                <p>Conteúdo</p>
                <textarea className="main__form--content" onChange={(e)=> {
                    setConteudo(e.target.value)
                }}/> <br/>
                <button className="main__form--button" onClick={insertNewNote}>Inserir</button>
            </div>
        </section>
    )
}

export default Form