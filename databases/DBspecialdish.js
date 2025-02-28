//Base de datos de platos especiales del restaurante de alta cocina "El Celler de Can Roca"

db.specialdish.insertMany([
  
  {nombrePlato: 'Canelones de la abuela', descripcion: 'Canelones tradicionales con bechamel y queso gratinado', precio: 35, categoria: 'Pasta', tiempoPreparacion: 40, calorias: 500, ingredientesPrincipales: 'Pasta, carne picada, bechamel', nivelPicante: 'No picante', disponibilidad: 80, popularidad: 87},
  {nombrePlato: 'Callos a la madrileña', descripcion: 'Guiso tradicional de callos con chorizo y morcilla', precio: 30, categoria: 'Guiso', tiempoPreparacion: 180, calorias: 600, ingredientesPrincipales: 'Callos, chorizo, morcilla', nivelPicante: 'Medio', disponibilidad: 30, popularidad: 85},
  {nombrePlato: 'Tartar de atún', descripcion: 'Atún rojo cortado a cuchillo con aderezo asiático', precio: 40, categoria: 'Pescado', tiempoPreparacion: 20, calorias: 250, ingredientesPrincipales: 'Atún rojo, soja, sésamo', nivelPicante: 'Ligero', disponibilidad: 45, popularidad: 92},
  {nombrePlato: 'Cocochas de merluza al pil-pil', descripcion: 'Cocochas de merluza en salsa de ajo y guindilla', precio: 55, categoria: 'Pescado', tiempoPreparacion: 25, calorias: 300, ingredientesPrincipales: 'Cocochas de merluza, ajo, guindilla', nivelPicante: 'Medio', disponibilidad: 38, popularidad: 90},
  {nombrePlato: 'Pimientos del piquillo rellenos', descripcion: 'Pimientos rellenos de bacalao y gratinados', precio: 35, categoria: 'Entrada', tiempoPreparacion: 30, calorias: 280, ingredientesPrincipales: 'Pimientos del piquillo, bacalao', nivelPicante: 'Ligero', disponibilidad: 62, popularidad: 88},
  {nombrePlato: 'Tortilla de patatas', descripcion: 'Clásica tortilla española con cebolla caramelizada', precio: 25, categoria: 'Huevos', tiempoPreparacion: 20, calorias: 400, ingredientesPrincipales: 'Huevos, patatas, cebolla', nivelPicante: 'No picante', disponibilidad: 17, popularidad: 95},
  {nombrePlato: 'Rabo de toro estofado', descripcion: 'Rabo de toro cocinado a fuego lento con vino tinto', precio: 45, categoria: 'Carne', tiempoPreparacion: 240, calorias: 550, ingredientesPrincipales: 'Rabo de toro, vino tinto, verduras', nivelPicante: 'No picante', disponibilidad: 50, popularidad: 91},
  {nombrePlato: 'Pulpo a la brasa', descripcion: 'Tentáculos de pulpo a la parrilla con puré de patata', precio: 50, categoria: 'Marisco', tiempoPreparacion: 35, calorias: 300, ingredientesPrincipales: 'Pulpo, patata, pimentón', nivelPicante: 'Ligero', disponibilidad: 25, popularidad: 95},
  {nombrePlato: 'Pato Pekín', descripcion: 'Pato lacado al estilo Pekín con crepes', precio: 65, categoria: 'Carne', tiempoPreparacion: 90, calorias: 700, ingredientesPrincipales: 'Pato, crepes, salsa hoisin', nivelPicante: 'No picante', disponibilidad: 20, popularidad: 93},
  {nombrePlato: 'Raviolis de gamba roja', descripcion: 'Pasta rellena de gamba roja con bisque', precio: 45, categoria: 'Pasta', tiempoPreparacion: 30, calorias: 380, ingredientesPrincipales: 'Pasta, gambas rojas, bisque', nivelPicante: 'No picante', disponibilidad: 35, popularidad: 90},
  {nombrePlato: 'Solomillo Wellington', descripcion: 'Solomillo de ternera envuelto en hojaldre', precio: 70, categoria: 'Carne', tiempoPreparacion: 60, calorias: 750, ingredientesPrincipales: 'Solomillo, hojaldre, foie gras', nivelPicante: 'No picante', disponibilidad: 62, popularidad: 96},
  {nombrePlato: 'Tarta Tatin', descripcion: 'Tarta de manzana caramelizada con helado de vainilla', precio: 25, categoria: 'Postre', tiempoPreparacion: 45, calorias: 400, ingredientesPrincipales: 'Manzanas, caramelo, masa', nivelPicante: 'No picante', disponibilidad: 39, popularidad: 89},
  {nombrePlato: 'Gazpacho andaluz', descripcion: 'Sopa fría de tomate y verduras', precio: 20, categoria: 'Sopa', tiempoPreparacion: 15, calorias: 150, ingredientesPrincipales: 'Tomate, pepino, pimiento', nivelPicante: 'No picante', disponibilidad: 41, popularidad: 85},
  {nombrePlato: 'Paella de mariscos', descripcion: 'Arroz con variedad de mariscos', precio: 60, categoria: 'Arroz', tiempoPreparacion: 45, calorias: 600, ingredientesPrincipales: 'Arroz, gambas, mejillones, calamares', nivelPicante: 'No picante', disponibilidad: 43, popularidad: 97},
  {nombrePlato: 'Croquetas de jamón', descripcion: 'Croquetas cremosas de jamón ibérico', precio: 25, categoria: 'Aperitivo', tiempoPreparacion: 20, calorias: 300, ingredientesPrincipales: 'Bechamel, jamón ibérico', nivelPicante: 'No picante', disponibilidad: 34, popularidad: 92},
  {nombrePlato: 'Oliva Esférica', descripcion: 'Una aceituna líquida que explota en la boca', precio: 15, categoria: 'Aperitivo', tiempoPreparacion: 10, calorias: 50, ingredientesPrincipales: 'Aceitunas, alginato, cloruro de calcio', nivelPicante: 'No picante', disponibilidad: 28, popularidad: 95},
  {nombrePlato: 'Ostra con distilado de tierra', descripcion: 'Ostra fresca con esencia de tierra y mar', precio: 25, categoria: 'Entrada', tiempoPreparacion: 15, calorias: 80, ingredientesPrincipales: 'Ostras, destilado de tierra', nivelPicante: 'No picante', disponibilidad: 36, popularidad: 90},
  {nombrePlato: 'Gambas de Palamós', descripcion: 'Gambas frescas a la plancha con sal marina', precio: 45, categoria: 'Marisco', tiempoPreparacion: 12, calorias: 120, ingredientesPrincipales: 'Gambas de Palamós, sal marina', nivelPicante: 'No picante', disponibilidad: 30, popularidad: 98},
  {nombrePlato: 'Trufa Melanosporum', descripcion: 'Trufa negra servida sobre una cama de patata', precio: 60, categoria: 'Entrada', tiempoPreparacion: 20, calorias: 180, ingredientesPrincipales: 'Trufa negra, patata', nivelPicante: 'No picante', disponibilidad: 33, popularidad: 92},
  {nombrePlato: 'Cochinillo confitado y crujiente', descripcion: 'Cochinillo cocinado a baja temperatura y terminado al horno', precio: 55, categoria: 'Carne', tiempoPreparacion: 180, calorias: 650, ingredientesPrincipales: 'Cochinillo, hierbas aromáticas', nivelPicante: 'No picante', disponibilidad: 56, popularidad: 96},
  {nombrePlato: 'Langosta con vinagreta de cítricos', descripcion: 'Langosta fresca con vinagreta de naranja y limón', precio: 70, categoria: 'Marisco', tiempoPreparacion: 25, calorias: 200, ingredientesPrincipales: 'Langosta, naranja, limón', nivelPicante: 'No picante', disponibilidad: 50, popularidad: 94},
  {nombrePlato: 'Cordero con berenjena y café', descripcion: 'Cordero asado con puré de berenjena y espuma de café', precio: 50, categoria: 'Carne', tiempoPreparacion: 45, calorias: 550, ingredientesPrincipales: 'Cordero, berenjena, café', nivelPicante: 'No picante', disponibilidad: 26, popularidad: 89},
  {nombrePlato: 'Lenguado con cítricos y bergamota', descripcion: 'Filete de lenguado con salsa de cítricos y esencia de bergamota', precio: 65, categoria: 'Pescado', tiempoPreparacion: 30, calorias: 280, ingredientesPrincipales: 'Lenguado, naranja, limón, bergamota', nivelPicante: 'No picante', disponibilidad: 24, popularidad: 91},
  {nombrePlato: 'Viaje a La Habana', descripcion: 'Postre inspirado en los sabores de Cuba', precio: 30, categoria: 'Postre', tiempoPreparacion: 20, calorias: 350, ingredientesPrincipales: 'Tabaco, ron, chocolate', nivelPicante: 'No picante', disponibilidad: 31, popularidad: 93},
  {nombrePlato: 'Tarta de queso líquida', descripcion: 'Reinterpretación fluida de la clásica tarta de queso', precio: 25, categoria: 'Postre', tiempoPreparacion: 15, calorias: 300, ingredientesPrincipales: 'Queso, galleta, frutas del bosque', nivelPicante: 'No picante', disponibilidad: 20, popularidad: 97},
  {nombrePlato: 'Parfait de almendras', descripcion: 'Helado de almendras con crujiente de caramelo', precio: 20, categoria: 'Postre', tiempoPreparacion: 10, calorias: 280, ingredientesPrincipales: 'Almendras, caramelo, nata', nivelPicante: 'No picante', disponibilidad: 25, popularidad: 88},
  {nombrePlato: 'Ensalada de tomates', descripcion: 'Variedad de tomates con vinagreta de albahaca', precio: 35, categoria: 'Ensalada', tiempoPreparacion: 15, calorias: 120, ingredientesPrincipales: 'Tomates, albahaca, aceite de oliva', nivelPicante: 'No picante', disponibilidad: 20, popularidad: 87},
  {nombrePlato: 'Ceviche de lubina', descripcion: 'Lubina fresca marinada en cítricos', precio: 40, categoria: 'Pescado', tiempoPreparacion: 20, calorias: 180, ingredientesPrincipales: 'Lubina, lima, cilantro', nivelPicante: 'Ligero', disponibilidad: 32, popularidad: 92},
  {nombrePlato: 'Risotto de setas', descripcion: 'Risotto cremoso con variedad de setas silvestres', precio: 45, categoria: 'Arroz', tiempoPreparacion: 30, calorias: 450, ingredientesPrincipales: 'Arroz, setas, parmesano', nivelPicante: 'No picante', disponibilidad: 37, popularidad: 94},
  {nombrePlato: 'Foie gras caramelizado', descripcion: 'Foie gras con reducción de Pedro Ximénez', precio: 55, categoria: 'Entrada', tiempoPreparacion: 25, calorias: 380, ingredientesPrincipales: 'Foie gras, Pedro Ximénez', nivelPicante: 'No picante', disponibilidad: 40, popularidad: 91},
  {nombrePlato: 'Sopa de cebollas', descripcion: 'Sopa tradicional con gratinado de queso', precio: 30, categoria: 'Sopa', tiempoPreparacion: 40, calorias: 320, ingredientesPrincipales: 'Cebollas, caldo, queso gruyère', nivelPicante: 'No picante', disponibilidad: 62, popularidad: 86},
  {nombrePlato: 'Mollejas a la plancha', descripcion: 'Mollejas de cordero a la plancha con chimichurri', precio: 40, categoria: 'Carne', tiempoPreparacion: 25, calorias: 350, ingredientesPrincipales: 'Mollejas, chimichurri', nivelPicante: 'Ligero', disponibilidad: 46, popularidad: 88},
  {nombrePlato: 'Ensalada de queso de cabra', descripcion: 'Ensalada con queso de cabra gratinado y vinagreta de miel', precio: 30, categoria: 'Ensalada', tiempoPreparacion: 15, calorias: 280, ingredientesPrincipales: 'Lechuga, queso de cabra, miel', nivelPicante: 'No picante', disponibilidad: 49, popularidad: 89},
  {nombrePlato: 'Sorbete de limón al cava', descripcion: 'Sorbete refrescante de limón con cava', precio: 15, categoria: 'Postre', tiempoPreparacion: 10, calorias: 150, ingredientesPrincipales: 'Limón, cava', nivelPicante: 'No picante', disponibilidad: 24, popularidad: 86},
  {nombrePlato: 'Carpaccio de ternera', descripcion: 'Finas láminas de ternera con rúcula y parmesano', precio: 35, categoria: 'Entrada', tiempoPreparacion: 15, calorias: 250, ingredientesPrincipales: 'Ternera, rúcula, parmesano', nivelPicante: 'No picante', disponibilidad: 43, popularidad: 90},
  {nombrePlato: 'Lubina a la sal', descripcion: 'Lubina entera cocida en costra de sal', precio: 75, categoria: 'Pescado', tiempoPreparacion: 40, calorias: 400, ingredientesPrincipales: 'Lubina, sal marina', nivelPicante: 'No picante', disponibilidad: 28, popularidad: 93},
  {nombrePlato: 'Arroz negro', descripcion: 'Arroz con tinta de calamar y mariscos', precio: 55, categoria: 'Arroz', tiempoPreparacion: 35, calorias: 550, ingredientesPrincipales: 'Arroz, tinta de calamar, sepia', nivelPicante: 'No picante', disponibilidad: 34, popularidad: 91},
  {nombrePlato: 'Crema catalana', descripcion: 'Postre tradicional catalán con crema quemada', precio: 20, categoria: 'Postre', tiempoPreparacion: 15, calorias: 320, ingredientesPrincipales: 'Leche, huevos, azúcar', nivelPicante: 'No picante', disponibilidad: 64, popularidad: 88},
  {nombrePlato: 'Jamón ibérico de bellota', descripcion: 'Plato de jamón ibérico de bellota cortado a mano', precio: 45, categoria: 'Entrada', tiempoPreparacion: 10, calorias: 200, ingredientesPrincipales: 'Jamón ibérico de bellota', nivelPicante: 'No picante', disponibilidad: 46, popularidad: 99},
  {nombrePlato: 'Arroz caldoso con bogavante', descripcion: 'Arroz meloso con bogavante fresco', precio: 70, categoria: 'Arroz', tiempoPreparacion: 45, calorias: 650, ingredientesPrincipales: 'Arroz, bogavante, fumet de pescado', nivelPicante: 'No picante', disponibilidad: 15, popularidad: 96}

]);

//Búsquedas:

//db.specialdish.find({nombrePlato:{$eq:'Sopa de cebollas'}}) //Busca el platillo que sea igual a Sopa de cebollas

//db.specialdish.find({precio:{$gt:50},categoria:'Carne'}) //Busca los platillos cuyo precio sea mayor a 50 y su categoria sea Carne

//db.specialdish.find({tiempoPreparacion:{$gte:60}}) //Busca los platillos cuyo tiempo de preparación sea mayor o igual que 60 tiempoPreparacion

//db.specialdish.find({disponibilidad:{$lt:30}}) //Busca los platillos cuya disponibilidad sea menor a 30 platos

//db.specialdish.find({popularidad:{$lte:90}}) //Busca los platillos cuya popularidad sea menor o igual que 90

//db.specialdish.find({nivelPicante:{$ne:'No picante'}}) //Busca los platillos cuyo nivel de picante sea diferente de No picante

//db.specialdish.find({calorias:{$in:[300,400,500]}}) //Busca los platillos que esten entre 300,400 o 500 calorias

//db.specialdish.find({categoria:{$nin:['Pescado','Carne','Marisco']}}) //Busca los platillos que no sean de las categorías Pescado, Carne ni Marisco

//db.specialdish.find({precio:{$gte:60},categoria:'Arroz'}) //Busca los platillos cuyo precio sea mayor o igual a 60 y esté en la categoría de Arroz

//db.specialdish.updateOne({nombrePlato:'Tortilla de patatas'},{$set:{precio:28,disponibilidad:20}}) //Para esta actualización se ha hecho uso del operador $set, ya que este es el que permite realizar las modificaciones de los campos que se le especifique, en este caso en el platillo Tortilla de patatas actualizará el precio con el nuevo valor que es 28 y también el campo de disponibilidad con el valor 20
