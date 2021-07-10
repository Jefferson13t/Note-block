const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db/db')

db.connect((err)=> {
    if(err) {
        console.log('erro ao conectar com banco de dados')
        return
    }
    console.log('Conexão estabelecida com banco de dados')
}
)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.send('Olá')
})

app.post('/api/inserir', (req, res)=>{
    const titulo = req.body.titulo
    const conteudo = req.body.conteudo

    const sqlInsert = 'INSERT INTO notas (title, content) VALUES (?,?)'
    db.query(sqlInsert, [ titulo, conteudo ], (err, result)=>{
        if(err) console.log(err)
    })
   
})

app.get('/api/selecionar', (req, res)=>{
    
    const sqlSelect = 'SELECT * FROM notas'
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    })
})

app.delete('/api/deletar/:id', (req, res)=>{
    const id = req.params.id

    const sqlSelect = 'DELETE FROM notas WHERE id = ?'
    db.query(sqlSelect, id, (err, result)=>{
        if(err) console.log(err)
    })
   
})

app.listen(3001, ()=>{
    console.log('server is running on door 3001')
})