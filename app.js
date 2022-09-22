

const express = require('express')


const cors = require('cors')

const bodyParser = require('body-parser')
const { response } = require('express')
const { getAlunos, getAlunosByid} = require('./modules/alunos.js')
const {getCursos} = require('./modules/cursos')

const app = express();

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST,PUT,DELETE, OPTIONS')
    app.use(cors())
    next()
})

app.get('/curso/', cors(), async function (request, response, next) {


    //recebe a variavel nome por QueryString (indicada quando precisamos fazer filtros)
    let siglaCurso = request.query.siglaCurso
    console.log(siglaCurso)

    //chama a funcao e encaminha a palavra chave 
    let curso = getCursos(siglaCurso)
    if (curso) {
        response.status(200)
        response.json(curso)
    } else {
        response.status(404)
    }

})



    app.get('/cursoAlunos/', cors(), async function (request, response, next) {


        //recebe a variavel nome por QueryString (indicada quando precisamos fazer filtros)
        let nomeCursoAlunos = request.query.nomeCursoAlunos
        console.log(nomeCursoAlunos)
    
        //chama a funcao e encaminha a palavra chave 
        let alunos = getAlunos(siglaAlunosCurso)
        if (alunos) {
            response.status(200)
            response.json(alunos)
        } else {
            response.status(404)
        }
    
    })
    
    app.listen(3000, function(){
        console.log('aguardando servidor')})