//Nombres: Karoll Gabriela Delgado Charfuelan - Ana Cristina Mera Rodríguez

//DESCRIPCIÓN CASO DE ESTUDIO: El caso de estudio hace referencia a la base de datos que maneja un cine, administrando una variedad de colecciones que contienen información, 
//entre las colecciones se encuentran las películas, los productos, los clientes, los empleados y las funciones, cada una de ellas almacena datos recurrentes y estructurados,
//lo que proporciona organización, gestión y análisis de las operaciones del cine, entre estas operaciones se destaca la programación de funciones, venta de productos y también
//el seguimiento de clientes y empleados.
//Las colecciones que encontramos en la base de datos contiene: 
// 1. Películas: esta colección contiene información sobre el título de las películas, su género, duración, el tipo de clasificación, el idioma, el director, la fecha de estreno, una imágen y los actores principales.
// 2. Productos: esta colección contiene la información de los productos comestibles del cine, suministrando información como el nombre, el precio, la categoría, la cantidad disponible, su fecha de vencimiento, el proveedor que lo suministra, el tipo de empaque, el estado del producto y un descuento.
// 3. Clientes: esta colección maneja los datos de los clientes que van al cine, entre estos datos se encuentran sus datos personales, datos de contacto, las preferencias por los géneros de películas que estos tienen, puntos acumuludados por fidelidad y una fecha de registro.
// 4. Empleados: esta colección maneja información sobre el personal que hace parte del cine, como información personal, también su cargo, salario, su horario de trabajo y la fecha de constratación.
// 5. Funciones: esta colección contiene toda la información relacionada con las funciones programadas, fecha, hora de inicio y fin, la sala asignada, el precio de la boleta, el tipo de formato, los subtítulos, y la capacidad de cada sala.


db.peliculas.insertMany([
    
 {_id:1, titulo: 'Todo sobre mi madre', generoPelicula: 'Drama', duracion: 101, clasificacion: 'A', idioma: 'Español', director: 'Pedro Almodóvar', fechaEstreno: new Date('1999-04-08'), urlImagen: 'todosobremimadre.jpg', actoresPrincipales: 'Cecilia Roth, Marisa Paredes, Penélope Cruz'},
 {_id:2, titulo: 'El laberinto del fauno', generoPelicula: 'Fantasía', duracion: 118, clasificacion: 'R', idioma: 'Español', director: 'Guillermo del Toro', fechaEstreno: new Date('2006-10-11'), urlImagen: 'ellaberintodelfauno.jpg', actoresPrincipales: 'Ivana Baquero, Sergi López, Maribel Verdú'},
 {_id:3, titulo: 'Amores perros', generoPelicula: 'Drama', duracion: 154, clasificacion: 'R', idioma: 'Español', director: 'Alejandro González Iñárritu', fechaEstreno: new Date('2000-06-16'), urlImagen: 'amoresperros.jpg', actoresPrincipales: 'Emilio Echevarría, Gael García Bernal, Goya Toledo'},
 {_id:4, titulo: 'El secreto de sus ojos', generoPelicula: 'Drama', duracion: 129, clasificacion: 'R', idioma: 'Español', director: 'Juan José Campanella', fechaEstreno: new Date('2009-08-13'), urlImagen: 'elsecretodesusosos.jpg', actoresPrincipales: 'Ricardo Darín, Soledad Villamil, Pablo Rago'},
 {_id:5, titulo: 'Mar adentro', generoPelicula: 'Biografía', duracion: 125, clasificacion: 'PG-13', idioma: 'Español', director: 'Alejandro Amenábar', fechaEstreno: new Date('2004-09-03'), urlImagen: 'maradentro.jpg', actoresPrincipales: 'Javier Bardem, Belén Rueda, Lola Dueñas'},
 {_id:6, titulo: 'El orfanato', generoPelicula: 'Terror', duracion: 105, clasificacion: 'R', idioma: 'Español', director: 'J.A. Bayona', fechaEstreno: new Date('2007-09-20'), urlImagen: 'elorfanato.jpg', actoresPrincipales: 'Belén Rueda, Fernando Cayo, Roger Príncep'},
 {_id:7, titulo: 'Relatos salvajes', generoPelicula: 'Comedia negra', duracion: 122, clasificacion: 'B', idioma: 'Español', director: 'Damián Szifron', fechaEstreno: new Date('2014-08-21'), urlImagen: 'relatossalvajes.jpg', actoresPrincipales: 'Ricardo Darín, Oscar Martínez, Leonardo Sbaraglia'},
 {_id:8, titulo: 'Eva', generoPelicula: 'Ciencia ficción', duracion: 94, clasificacion: 'PG-13', idioma: 'Español', director: '***** Maíllo', fechaEstreno: new Date('2011-10-07'), urlImagen: 'eva.jpg', actoresPrincipales: 'Daniel Brühl, Marta Etura, Alberto Ammann'},
 {_id:9, titulo: 'Abre los ojos', generoPelicula: 'Thriller', duracion: 117, clasificacion: 'R', idioma: 'Español', director: 'Alejandro Amenábar', fechaEstreno: new Date('1997-12-19'), urlImagen: 'abrelosojos.jpg', actoresPrincipales: 'Eduardo Noriega, Penélope Cruz, Fele Martínez'},
 {_id:10, titulo: 'El espinazo del diablo', generoPelicula: 'Terror', duracion: 106, clasificacion: 'B', idioma: 'Español', director: 'Guillermo del Toro', fechaEstreno: new Date('2001-04-20'), urlImagen: 'elespinazodediablo.jpg', actoresPrincipales: 'Marisa Paredes, Eduardo Noriega, Federico Luppi'}

]);

db.productos.insertMany([
    
 {_id:11, nombreProducto:'Palomitas grandes', precio: 5, categoria:'Snacks', cantidadDisponible: 100, fechaVencimiento: new Date('2024-12-31'), proveedor: 'SnackMaster', tipoEmpaque: 'Caja de cartón', estadoProducto: 'Disponible', descuento: 0},
 {_id:12, nombreProducto:'Refresco mediano', precio: 3, categoria:'Bebidas', cantidadDisponible: 200, fechaVencimiento: new Date('2025-06-30'), proveedor: 'CocaCola', tipoEmpaque: 'Vaso de plástico', estadoProducto: 'Disponible', descuento: 0},
 {_id:13, nombreProducto:'Nachos con queso', precio: 4, categoria:'Snacks', cantidadDisponible: 75, fechaVencimiento: new Date('2024-10-15'), proveedor: 'MexiSnacks', tipoEmpaque: 'Bandeja de plástico', estadoProducto: 'En oferta', descuento: 0.10},
 {_id:14, nombreProducto:'Chocolate M&M\'s', precio: 2, categoria:'Dulces', cantidadDisponible: 150, fechaVencimiento: new Date('2025-03-15'), proveedor: 'Mars', tipoEmpaque: 'Bolsa', estadoProducto: 'Disponible', descuento: 0},
 {_id:15, nombreProducto:'Hot Dog', precio: 4.50, categoria:'Comida rápida', cantidadDisponible: 50, fechaVencimiento: new Date('2024-09-30'), proveedor: 'FastFood Inc', tipoEmpaque: 'Papel aluminio', estadoProducto: 'Disponible', descuento: 0},
 {_id:16, nombreProducto:'Agua mineral', precio: 2, categoria:'Bebidas', cantidadDisponible: 300, fechaVencimiento: new Date('2025-12-31'), proveedor: 'AquaPure', tipoEmpaque: 'Botella de plástico', estadoProducto: 'Disponible', descuento: 0},
 {_id:17, nombreProducto:'Helado de vainilla', precio: 3.75, categoria:'Postres', cantidadDisponible: 80, fechaVencimiento: new Date('2024-11-30'), proveedor: 'FrostyDelights', tipoEmpaque: 'Vaso de cartón', estadoProducto: 'Disponible', descuento: 0.15},
 {_id:18, nombreProducto:'Combo palomitas y refresco', precio: 8.99, categoria:'Combos', cantidadDisponible: 100, fechaVencimiento: new Date('2024-12-31'), proveedor: 'CinePleasures', tipoEmpaque: 'Caja de cartón y vaso', estadoProducto: 'En oferta', descuento: 0.05},
 {_id:19, nombreProducto:'Gomitas', precio: 2.50, categoria:'Dulces', cantidadDisponible: 200, fechaVencimiento: new Date('2025-05-31'), proveedor: 'SweetTreats', tipoEmpaque: 'Bolsa', estadoProducto: 'En oferta', descuento: 0},
 {_id:20, nombreProducto:'Café americano', precio: 2.75, categoria:'Bebidas calientes', cantidadDisponible: 100, fechaVencimiento: new Date('2024-12-31'), proveedor: 'JavaBeans', tipoEmpaque: 'Vaso de papel', estadoProducto: 'Disponible', descuento: 0}

]);

db.clientes.insertMany([
    
 {_id:21, nombreCliente: 'Juan', apellidoCliente: 'Pérez', correoCliente: 'juan.perez@email.com', telefono: '3185468392', fechaRegistro: new Date('2023-01-15'), puntosAcumulados: 150, direccion: 'Calle Principal 123', fechaNacimiento: new Date('1990-05-20'), preferencias: 'Acción'},
 {_id:22, nombreCliente: 'María', apellidoCliente: 'González', correoCliente: 'maria.gonzalez@email.com', telefono: '3214565689', fechaRegistro: new Date('2021-02-28'), puntosAcumulados: 80, direccion: 'Avenida Central 456', fechaNacimiento: new Date('1985-11-10'), preferencias: 'Comedia'},
 {_id:23, nombreCliente: 'Carlos', apellidoCliente: 'Rodríguez', correoCliente: 'carlos.rodriguez@email.com', telefono: '3112903458', fechaRegistro: new Date('2023-03-10'), puntosAcumulados: 220, direccion: 'Plaza Mayor 789', fechaNacimiento: new Date('1988-07-15'), preferencias: 'Ciencia ficción'},
 {_id:24, nombreCliente: 'Ana', apellidoCliente: 'Martínez', correoCliente: 'ana.martinez@email.com', telefono: '3187904569', fechaRegistro: new Date('2023-04-05'), puntosAcumulados: 100, direccion: 'Calle Secundaria 321', fechaNacimiento: new Date('1992-09-30'), preferencias: 'Animación'},
 {_id:25, nombreCliente: 'Luis', apellidoCliente: 'Sánchez', correoCliente: 'luis.sanchez@email.com', telefono: '3154673432', fechaRegistro: new Date('2024-05-20'), puntosAcumulados: 175, direccion: 'Avenida del Parque 654', fechaNacimiento: new Date('1983-12-05'), preferencias: 'Documental'}, 
 {_id:26, nombreCliente: 'Laura', apellidoCliente: 'López', correoCliente: 'laura.lopez@email.com', telefono: '3185673233', fechaRegistro: new Date('2022-06-12'), puntosAcumulados: 90, direccion: 'Callejón de las Flores 987', fechaNacimiento: new Date('1995-03-25'), preferencias: 'Terror'},
 {_id:27, nombreCliente: 'Pedro', apellidoCliente: 'Díaz', correoCliente: 'pedro.diaz@email.com', telefono: '3186667870', fechaRegistro: new Date('2024-07-08'), puntosAcumulados: 130, direccion: 'Paseo de la Montaña 159', fechaNacimiento: new Date('1987-08-18'), preferencias: 'Aventura'},
 {_id:28, nombreCliente: 'Sofía', apellidoCliente: 'Hernández', correoCliente: 'sofia.hernandez@email.com', telefono: '3176787789', fechaRegistro: new Date('2023-08-22'), puntosAcumulados: 60, direccion: 'Ronda del Mar 753', fechaNacimiento: new Date('1993-01-12'), preferencias: 'Musical'},
 {_id:29, nombreCliente: 'Miguel', apellidoCliente: 'Torres', correoCliente: 'miguel.torres@email.com', telefono: '3124563452', fechaRegistro: new Date('2024-09-14'), puntosAcumulados: 200, direccion: 'Camino del Bosque', fechaNacimiento: new Date('1980-06-30'), preferencias: 'Comedia'},
 {_id:30, nombreCliente: 'Elena', apellidoCliente: 'Vargas', correoCliente: 'elena.vargas@email.com', telefono: '3109890878', fechaRegistro: new Date('2023-10-01'), puntosAcumulados: 110, direccion: 'Bulevar de los Sueños', fechaNacimiento: new Date('1991-04-08'), preferencias: 'Fantasía'}

]);

db.empleados.insertMany([
    
 {_id:31, nombreEmpleado: 'Roberto', apellidoEmpleado: 'García', contacto: '3214569393', cargo: 'Gerente', fechaContratacion: new Date('2020-03-15'), salario: 3500, correoEmpleado: 'roberto.garcia@cine.com', turno: 'Día', horasTrabajadas: 40 },
 {_id:32, nombreEmpleado: 'Carmen', apellidoEmpleado: 'Rodríguez', contacto: '3184569393', cargo: 'Cajero', fechaContratacion: new Date('2021-06-01'), salario: 1800, correoEmpleado: 'carmen.rodriguez@cine.com', turno: 'Tarde', horasTrabajadas: 35 },
 {_id:33, nombreEmpleado: 'Javier', apellidoEmpleado: 'López', contacto: '3154569393', cargo: 'Técnico de proyección', fechaContratacion: new Date('2019-11-20'), salario: 2200, correoEmpleado: 'javier.lopez@cine.com', turno: 'Noche', horasTrabajadas: 38 },
 {_id:34, nombreEmpleado: 'Lucía', apellidoEmpleado: 'Martínez', contacto: '3184568373', cargo: 'Vendedor de snacks', fechaContratacion: new Date('2022-02-10'), salario: 1600, correoEmpleado: 'lucia.martinez@cine.com', turno: 'Tarde', horasTrabajadas: 30 },
 {_id:35, nombreEmpleado: 'Diego', apellidoEmpleado: 'Fernández', contacto: '3214562293', cargo: 'Acomodador', fechaContratacion: new Date('2021-09-05'), salario: 1500, correoEmpleado: 'diego.fernandez@cine.com', turno: 'Noche', horasTrabajadas: 25 },
 {_id:36, nombreEmpleado: 'Luna', apellidoEmpleado: 'Sánchez', contacto: '3214521393', cargo: 'Limpieza', fechaContratacion: new Date('2020-07-22'), salario: 1400, correoEmpleado: 'ana.sanchez@cine.com', turno: 'Día', horasTrabajadas: 35 },
 {_id:37, nombreEmpleado: 'Mauricio', apellidoEmpleado: 'Pérez', contacto: '3184569003', cargo: 'Cajero', fechaContratacion: new Date('2022-04-18'), salario: 1800, correoEmpleado: 'miguel.perez@cine.com', turno: 'Noche', horasTrabajadas: 35 },
 {_id:38, nombreEmpleado: 'Isabel', apellidoEmpleado: 'Gómez', contacto: '3214569800', cargo: 'Relaciones públicas', fechaContratacion: new Date('2024-01-30'), salario: 2500, correoEmpleado: 'isabel.gomez@cine.com', turno: 'Tarde', horasTrabajadas: 40 },
 {_id:39, nombreEmpleado: 'Pablo', apellidoEmpleado: 'Díaz', contacto: '3154564893', cargo: 'Técnico de mantenimiento', fechaContratacion: new Date('2019-08-12'), salario: 2000, correoEmpleado: 'pablo.diaz@cine.com', turno: 'Día', horasTrabajadas: 40 },
 {_id:40, nombreEmpleado: 'Sara', apellidoEmpleado: 'Torres', contacto: '3184561233', cargo: 'Asistente de gerencia', fechaContratacion: new Date('2023-12-01'), salario: 2800, correoEmpleado: 'sofia.torres@cine.com', turno: 'Tarde', horasTrabajadas: 38 }

]);

db.funciones.insertMany([
    
 {_id:41, fecha: new Date('2024-09-17'), horaInicio: '14:30', horaFin: '16:45', sala: 1, valorBoleta: 12.50, formato: '2D', subtitulos: 'Español', capacidad: 150, entradasDisponibles: 98},
 {_id:42, fecha: new Date('2024-09-17'), horaInicio: '17:00', horaFin: '19:30', sala: 2, valorBoleta: 15.00, formato: '3D', subtitulos: 'No', capacidad: 120, entradasDisponibles: 65},
 {_id:43, fecha: new Date('2024-09-17'), horaInicio: '20:00', horaFin: '22:15', sala: 3, valorBoleta: 13.00, formato: '2D', subtitulos: 'Inglés', capacidad: 100, entradasDisponibles: 100},
 {_id:44, fecha: new Date('2024-09-18'), horaInicio: '15:00', horaFin: '17:30', sala: 1, valorBoleta: 14.00, formato: 'IMAX', subtitulos: 'No', capacidad: 200, entradasDisponibles: 150},
 {_id:45, fecha: new Date('2024-09-18'), horaInicio: '18:00', horaFin: '20:10', sala: 4, valorBoleta: 11.50, formato: '2D', subtitulos: 'Español', capacidad: 80, entradasDisponibles: 45},
 {_id:46, fecha: new Date('2024-09-18'), horaInicio: '21:00', horaFin: '23:20', sala: 2, valorBoleta: 13.50, formato: '3D', subtitulos: 'No', capacidad: 120, entradasDisponibles: 110},
 {_id:47, fecha: new Date('2024-09-19'), horaInicio: '16:30', horaFin: '18:45', sala: 3, valorBoleta: 12.00, formato: '2D', subtitulos: 'Inglés', capacidad: 100, entradasDisponibles: 70},
 {_id:48, fecha: new Date('2024-09-19'), horaInicio: '19:15', horaFin: '21:45', sala: 1, valorBoleta: 15.50, formato: 'IMAX', subtitulos: 'No', capacidad: 200, entradasDisponibles: 180},
 {_id:49, fecha: new Date('2024-09-20'), horaInicio: '17:30', horaFin: '19:40', sala: 4, valorBoleta: 11.00, formato: '2D', subtitulos: 'Español', capacidad: 80, entradasDisponibles: 60},
 {_id:50, fecha: new Date('2024-09-20'), horaInicio: '20:30', horaFin: '22:50', sala: 2, valorBoleta: 14.50, formato: '3D', subtitulos: 'Inglés', capacidad: 120, entradasDisponibles: 95}

]);

//db.productos.find({precio:{$eq: 2}}) //De la colección productos busca los precios que sean iguales a 2

//db.productos.find({precio:{$gt: 3.50}}) //De la colección productos busca los precios mayores que 3.50

//db.productos.find({precio:{$gte: 3}}) //De la colección productos busca los precios mayores e iguales que 3

//db.productos.find({estadoProducto:{$in:['Disponible', 'En oferta']}}) //De la colección procuctos busca aquellos que su estado es Disponible y en Oferta

//db.productos.find({precio:{$not:{$gt:2.50}}}) //De la colección productos busca aquellos que su precio no sea mayor a 2.50

//db.productos.find({$and: [{categoria: {$eq:'Snacks'}}, {descuento:{$gt:0.10}}]}) //De la colección procuctos busca aquellos que sean de la categoría 'Snacks' con un descuento mayor al 10%

//db.peliculas.find({generoPelicula:{$eq: 'Drama'}}) //De la colección peliculas busca las peliculas del género igual a Drama

//db.peliculas.find({duracion: {$gt:120}}) //De la colección peliculas busca las peliculas con una duración mayor a 120 minutos

//db.peliculas.find({generoPelicula:{$not:{$eq:'Terror'}}}) //De la coleccion peliculas busca aquellas que NO sean del género Terror

//db.peliculas.find({clasificacion:{$nin:['A', 'B']}}) //De la colección peliculas busca las películas que no tengan clasificación A ni B

//db.peliculas.find({$nor:[{generoPelicula:'Drama'},{generoPelicula:'Fantasía'}]}) //De la colección peliculas busca las que no sean del género 'Drama' ni 'Fantasía'

//db.peliculas.find({$nor:[{director: 'Alejandro Amenábar'},{clasificacion:'PG-13'}]}) //De la colección peliculas busca las que no tengan como director a 'Alejandro Amenábar' y que tampoco tengan una clasificación de 'PG-13'

//db.clientes.find({fechaRegistro: {$gte: new Date('2023-01-15')}}) //De la colección clientes busca los clientes que se registraron en la fecha establecida o después

//db.clientes.find({$nor:[{preferencias: 'Terror'},{preferencias:'Comedia'}]}) //De la colección clientes busca aquellos que no tengan preferencias ni por Terror ni Comedia

//db.clientes.find({preferencias:{$ne: 'Ciencia ficción'}}) //De la colección clientes busca los que NO tienen preferencia por el género de Ciencia ficción

//db.empleados.find({salario: {$lte: 2000}}) //De la colección empleados busca los empleados con un salario menor o igual a 2000

//db.empleados.find({turno:{$nin:['Día']}}) //De la colección empleados busca los empleados que NO trabajen en el turno del Día

//db.empleados.find({$nor:[{salario:{$gt:3000}},{cargo:'Gerente'}]}) //De la colección empleados busca aquellos que no tengan un salario mayor a 3000 y que tampoco trabajen en el cargo de 'Gerente'

//db.funciones.find({$or:[{formato:{$eq:'2D'}}, {subtitulos:{$eq:'Español'}}]}) //De la colección funciones busca aquellas que sean en formato 2D o que tengan subtitulos en español

//db.funciones.find({formato:{$not:{$eq: '3D'}}}) //De la colección funciones busca las que no están en formato 3D



// ANÁLISIS DE LAS BÚSQUEDAS REALIZADAS: En primer lugar el uso de operadores de comparación y operadores lógicos permite que la información o los datos que requieren de un cierto filtro, se puedan realizar de una manera organizada 
// y que además sea mucho más fácil interactuar con la base de datos. En  este caso cada una de estas búsquedas funciona como un filtro para poder visualizar información que resulte relevante dentro de una base de datos con demasiada información
// de acuerdo a esto, podemos destacar búsquedas que pueden suministrar datos que resultan relevantes para que el área encargada de promoción u otro pueda impulsar este tipo de empresa, por ejemplo sabiendo las preferencias de los clientes, lo cuál
// puede llevar a que el cine se enfoque en promocionar películas que a la mayoría de personas les interesa, en cuanto a productos es importante saber su estado, con el fin ya sea de abastecerse o de tomar otras medidas que se toman en este tipo de eventos,
// en cuanto a las funciones estas búsquedas permiten saber su programación y la capacidad de las salas, datos importantes para tener un mejor manejo de esta información, así mismo poder manejar los datos del personal que labora en el cine, y tener una base de datos organizada y bien estructurada.

// En general la contrucción realizada y la implementación de las diferentes colecciones permiten que la información y las búsquedas del cine permitan OPTIMIZAR la operación que realiza la empresa, al permitir comprender mucho mejor el comportamiento tanto de los clientes como de los empleados,
// manejar adecuadamente la gestión de los productos y las funciones eficientemente y de esta manera asegurar que las tareas que cada uno de estos realizan estén alineados con las necesidades que cada uno requiere.
// Además la organización de los datos y las búsquedas facilitaría la toma de decisiones basada en la información suministrada, siendo más precisa y efectiva.




