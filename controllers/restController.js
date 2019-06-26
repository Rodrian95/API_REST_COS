var db =  require('../database/db.js');
var connection = db.connection;

const uploadData = (request, response) => {//función que se importa en las rutas
    var post  = {campo_1: request.body.campo_1, campo_2: request.body.campo_2};//json con los cmapos de la base de datos y sus valores en el request
    
    connection.connect();//conectando a base de datos
 
    connection.query('INSERT INTO prueba SET ?', post, function (error, results, fields) {//consulta a la base
        if (error){//por si falla
            console.log("algo no jaló " + error)
        }
        else{//por si rifa
            console.log(results)
            response.status(200).json(results.rows);
        }
    });
      
    
    connection.end();//cierre de la conexión a la base de datos

}

module.exports = {
    uploadData//exportando la función
}