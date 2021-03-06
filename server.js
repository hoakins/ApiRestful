const express = require('express')
const app = express()
const rutas = require('./routes/index.js')

app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use('./public', express.static(`${__dirname}/public`))
app.use('./html', express.static(`${__dirname}/html`))

app.use('/', rutas)



app.listen(8080, () => {
    console.log('Servidor escuchando puerto: 8080')
})