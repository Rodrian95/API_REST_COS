const express = require('express')//para peticiones http
const bodyParser = require('body-parser')//para codificar "bonito" las respuestas (middleware)
const cors = require('cors')//Para el crossover allow origin y permitir peticiones desde el mismo servidor
const app = express()//Se inicializa el app con express, con el puerto 3000, con body parser y el urlencoded en extendend en true
const port = 3000

app.use(bodyParser.json()) //
app.use(bodyParser.urlencoded({extended: true}))


//aquí usamos cors con la configuración que permite el allow origin y poder hacer peticiones a nuestra api rest desde el mismo servidor
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
   next();
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});//aquí inicializamos la primera petición

var restRoutes = require('./routes/restRoutes');

restRoutes(app);


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})