import React, { useState, useEffect } from 'react'
import './style.css'
import Note from '../Note'
import Axios from 'axios'

function Posts() {

    const [ noteList, setNotelist ] = useState([])

    useEffect(()=> {
        Axios.get('http://localhost:3001/api/selecionar').then((response)=>{
            setNotelist(response.data)
        })
    })

    const final = noteList.map((note)=>{
        return(<div>
            <Note id={note.id} titulo={note.title} conteudo={note.content}/>
        </div>)
    })    
    return(
        <section className="main__postagens">
            <div>
            <h1>NOTAS</h1>
            </div>
            <div className="main__postagens--notas">
            {final}
            </div>
        </section>
    )
}

export default Posts