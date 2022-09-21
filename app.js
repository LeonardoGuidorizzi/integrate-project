const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')
const { response } = require('express')
const { getAlunos } = require('./modules/alunos.js')