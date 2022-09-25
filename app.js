var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'usuarios_db',
    user: 'root',
    password: ''
});


conexion.connect(function (error) {
    if (error) {
        throw error;
    }
    else {
        console.log("CONEXION EXITOSA");
    }
});

// //CONSULTAR
// conexion.query('SELECT * FROM usuarios', function (error, filas) {
//     if (error) {
//         throw error;
//     }

//     filas.forEach(fila => {
//         console.log(fila);
//     });
// });

// //INSERTAR
// conexion.query('INSERT INTO usuarios(nombre, apellido) VALUES ("prueba","prueba")', function (error, results) {
//     if (error) {
//         throw error;
//     } else {
//         console.log("Registro agrregado");
//     }
// });

// //ACTUALIZAR
// conexion.query('UPDATE usuarios SET nombre="prueba2",apellido="prueba2" WHERE id = 6', function (error, results) {
//     if (error) {
//         throw error;
//     } else {
//         console.log("Registro actualizado");
//     }
// });

//ELIMINAR
conexion.query('DELETE FROM usuarios WHERE id = 6', function (error, results) {
    if (error) {
        throw error;
    } else {
        console.log("Registro borrado");
    }
});



conexion.end();