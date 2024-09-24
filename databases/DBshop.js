//Base de datos de productos del D1

db.shop.insertMany([
  
  {nombreProducto: 'BOLSO DE PLAYA', descripcion: 'Bolso de Playa Malla,Presentación: x1 UND,Composición: 65% PVC, 35% Poliéster', precio: 19900, categoria: 'Extraordinarios', disponibilidadInventario: 8, marca: 'Red Flag', numeroModelo: 'RF-BP2023', peso: 500, unidadesVendidas: 150, valoracionPromedio: 4.5 },
  {nombreProducto: 'CESTAS ALMACENAMIENTO', descripcion: 'JUEGO DE CESTAS DE ALMACENAMIENTO,Tamaño: L 33.5 X 33.5 X 6.5 cm, M 30 X 15 X 5 cm, S 15 X 15 X 5 cm ', precio: 69990, categoria: 'Extraordinarios', disponibilidadInventario: 4, marca: 'Red Flag', numeroModelo: 'RF-CA2023', peso: 1200, unidadesVendidas: 85, valoracionPromedio: 4.7 },
  {nombreProducto: 'CHAQUETA ACOLCHADA HOMBRE', descripcion: 'Liviana, cómoda, mantiene la temperatura interna. 2 Tallas: S/M M/L Colores: Verde y Azul', precio: 99990, categoria: 'Extraordinarios', disponibilidadInventario: 1, marca: 'Jack in a Bag', numeroModelo: 'JIB-CHA2023', peso: 800, unidadesVendidas: 60, valoracionPromedio: 4.8 },
  {nombreProducto: 'SOMBRILLA MINI', descripcion: 'SOMBRILLA MINI CON ESTUCHE REDFLAG 1 UD', precio: 27990, categoria: 'Extraordinarios', disponibilidadInventario: 1, marca: 'Red Flag', numeroModelo: 'RF-SM2023', peso: 300, unidadesVendidas: 40, valoracionPromedio: 4.6 },
  {nombreProducto: 'BUSO NAVIDEÑO', descripcion: 'Buso Navideño Niña/ Niño,Colores: Rojo / Verde', precio: 49990, categoria: 'Extraordinarios', disponibilidadInventario: 21, marca: 'Party Power', numeroModelo: 'PP-BN2023', peso: 400, unidadesVendidas: 90, valoracionPromedio: 4.5 },
  {nombreProducto: 'MORRAL', descripcion: 'Morral 40 cm,4 Diseños,Tamaño: 32 x 13 x 40 cm,Peso Máx. de Carga: 5kg', precio: 34990, categoria: 'Extraordinarios', disponibilidadInventario: 32, marca: 'Aletria', numeroModelo: 'ALE-MOR2023', peso: 600, unidadesVendidas: 110, valoracionPromedio: 4.4 },
  {nombreProducto: 'AJIACO PREPARADO', descripcion: 'AJIACO PREPARADO BON MENÚ 380 G', precio: 7990, categoria: 'Congelados', disponibilidadInventario: 54, marca: 'BON MENÚ', numeroModelo: 'BM-AJ2023', peso: 380, unidadesVendidas: 200, valoracionPromedio: 4.3 },
  {nombreProducto: 'PIZZA', descripcion: 'PIZZA JAMÓN/QUESO HAWAIA BACKEREI 130 GR', precio: 4490, categoria: 'Congelados', disponibilidadInventario: 38, marca: 'BACKEREI', numeroModelo: 'BK-PZ2023', peso: 130, unidadesVendidas: 150, valoracionPromedio: 4.6 },
  {nombreProducto: 'DEDITO DE QUESO', descripcion: 'DEDITO DE QUESO BACKEREI 250 GRS', precio: 5990, categoria: 'Congelados', disponibilidadInventario: 132, marca: 'BACKEREI', numeroModelo: 'BK-DQ2023', peso: 250, unidadesVendidas: 170, valoracionPromedio: 4.5 },
  {nombreProducto: 'NUGGETS DE POLLO', descripcion: 'NUGGETS DE POLLO PREMIUM BRASSET 300 GR', precio: 7700, categoria: 'Congelados', disponibilidadInventario: 137, marca: 'BRASSET', numeroModelo: 'BR-NP2023', peso: 300, unidadesVendidas: 190, valoracionPromedio: 4.4 },
  {nombreProducto: 'PEPPERONI ', descripcion: 'PEPPERONI TAJADO VALDECAVA 60 GR', precio: 4490, categoria: 'Congelados', disponibilidadInventario: 11, marca: 'CENTURION', numeroModelo: 'CV-PN2023', peso: 60, unidadesVendidas: 80, valoracionPromedio: 4.2 },
  {nombreProducto: 'JAMON DE PAVO', descripcion: 'JAMON DE PAVO FINAS HIERBAS', precio:  11500, categoria: 'Congelados', disponibilidadInventario: 20, marca: 'WHITE HOLLAND', numeroModelo: 'WH-JP2023', peso: 227, unidadesVendidas: 60, valoracionPromedio: 4.3 },
  {nombreProducto: 'ACEITE DE CANOLA', descripcion: 'ACEITE CANOLA FAMILIAR DON OLIO 2000 ML', precio: 25950, categoria: 'Alimentos y despensa', disponibilidadInventario: 81, marca: 'DON OLIO', numeroModelo: 'DO-AC2023', peso: 2000, unidadesVendidas: 150, valoracionPromedio: 4.5 },
  {nombreProducto: 'ACEITE DE COCO', descripcion: 'ACEITE DE COCO VIRGEN NATRI', precio:  9990, categoria: 'Alimentos y despensa', disponibilidadInventario: 125, marca: 'NATRI', numeroModelo: 'NA-AC2023', peso: 500, unidadesVendidas: 100, valoracionPromedio: 4.4 },
  {nombreProducto: 'ALCAPARRAS', descripcion: 'ALCAPARRAS EN VINAGRE AINOA 125 GR', precio: 3990, categoria: 'Alimentos y despensa', disponibilidadInventario: 115, marca: 'AINOA', numeroModelo: 'AI-AL2023', peso: 125, unidadesVendidas: 80, valoracionPromedio: 4.6 },
  {nombreProducto: 'AREPA AMARILLA', descripcion: 'AREPA AMARILLA MASMAÍ 5 UND - 400 G', precio: 1450, categoria: 'Alimentos y despensa', disponibilidadInventario: 12, marca: 'MASMAÍ', numeroModelo: 'MA-AA2023', peso: 400, unidadesVendidas: 70, valoracionPromedio: 4.3 },
  {nombreProducto: 'ARROZ INTEGRAL', descripcion: 'ARROZ INTEGRAL DIANA 1.000 G', precio: 4500, categoria: 'Alimentos y despensa', disponibilidadInventario: 84, marca: 'DIANA', numeroModelo: 'DI-AI2023', peso: 1000, unidadesVendidas: 90, valoracionPromedio: 4.5 },
  {nombreProducto: 'ATÚN EN AGUA', descripcion: 'ATÚN EN AGUA CARLO FORTE 170 G NETO', precio: 4450, categoria: 'Alimentos y despensa', disponibilidadInventario: 35, marca: 'CARLO FORTE', numeroModelo: 'CF-AU2023', peso: 170, unidadesVendidas: 50, valoracionPromedio: 4.4 },
  {nombreProducto: 'AMBIENTADOR', descripcion: 'AMBIENTADOR EN AEROSOL LAVANDA HOSH 360 ML', precio: 5990, categoria: 'Aseo hogar', disponibilidadInventario: 30, marca: 'HOSH', numeroModelo: 'HS-AM2023', peso: 360, unidadesVendidas: 20, valoracionPromedio: 4.5 },
  {nombreProducto: 'BLANQUEADOR', descripcion: 'BLANQUEADOR BRILLA KING 2000 ML', precio: 2800, categoria: 'Aseo hogar', disponibilidadInventario: 340, marca: 'BRILLA KING', numeroModelo: 'BK-BL2023', peso: 2000, unidadesVendidas: 300, valoracionPromedio: 4.8 },
  {nombreProducto: 'CREMA LAVALOZA', descripcion: 'CREMA LAVALOZA BRILLA KING 500 GRS', precio: 2450, categoria: 'Aseo hogar', disponibilidadInventario: 400, marca: 'BRILLA KING', numeroModelo: 'BK-CL2023', peso: 500, unidadesVendidas: 350, valoracionPromedio: 4.7 },
  {nombreProducto: 'DETERGENTE', descripcion: 'DETERGENTE EN POLVO PREMUIM BONAROPA 3000 G', precio: 18900, categoria: 'Aseo hogar', disponibilidadInventario: 106, marca: 'BONAROPA', numeroModelo: 'BR-DP2023', peso: 3000, unidadesVendidas: 250, valoracionPromedio: 4.6 },
  {nombreProducto: 'DETERGENTE LÍQUIDO', descripcion: 'DETERGENTE PRENDAS OSCURAS BONAROPA 1LT', precio: 6350, categoria: 'Aseo hogar', disponibilidadInventario: 39, marca: 'BONAROPA', numeroModelo: 'BR-DL2023', peso: 1000, unidadesVendidas: 150, valoracionPromedio: 4.6 },
  {nombreProducto: 'ESPONJA', descripcion: 'ESPONJA MULTIUSOS ABRASIVA TIDYHOUSE 2U', precio: 1990, categoria: 'Aseo hogar', disponibilidadInventario: 114, marca: 'TIDY HOUSE', numeroModelo: 'TH-ES2023', peso: 150, unidadesVendidas: 200, valoracionPromedio: 4.5 },
  {nombreProducto: 'SERVILLETA', descripcion: 'SERVILLETA CORTADA RENDY 200 UND', precio: 2180, categoria: 'Aseo hogar', disponibilidadInventario: 33, marca: 'RENDY', numeroModelo: 'RD-SV2023', peso: 200, unidadesVendidas: 80, valoracionPromedio: 4.4 },
  {nombreProducto: 'ACONDICIONADOR', descripcion: 'ACONDICIONADOR ELVIVE HIDRAHIALURONICO', precio: 20890, categoria: 'Aseo y cuidado personal', disponibilidadInventario: 40, marca: 'ELVIVE', numeroModelo: 'EV-AC2023', peso: 400, unidadesVendidas: 60, valoracionPromedio: 4.7 },
  {nombreProducto: 'ACETAMINOFEN', descripcion: 'ACETAMINOFEN CAPSULAS DOLOFEN 10 UND', precio: 6490, categoria: 'Aseo y cuidado personal', disponibilidadInventario: 92, marca: 'DOLOFEN', numeroModelo: 'DF-AC2023', peso: 100, unidadesVendidas: 120, valoracionPromedio: 4.6 },
  {nombreProducto: 'BASE', descripcion: 'BASE LIQUIDA MATIFICANTE USK', precio: 14950, categoria: 'Aseo y cuidado personal', disponibilidadInventario: 12, marca: 'USHIKO', numeroModelo: 'USK-BS2023', peso: 20, unidadesVendidas: 40, valoracionPromedio: 4.5 },
  {nombreProducto: 'PAPEL HIGIÉNICO', descripcion: 'PAPEL HIGIÉNICO 3 H 12 UN RENDY 33 MTS', precio: 13950, categoria: 'Aseo y cuidado personal', disponibilidadInventario: 207, marca: 'RENDY', numeroModelo: 'RD-PH2023', peso: 800, unidadesVendidas: 300, valoracionPromedio: 4.8 },
  {nombreProducto: 'TOALLA FEMENINA', descripcion: 'TOALLA FEMENINA INVISIBLE 24 UND', precio: 8550, categoria: 'Aseo y cuidado personal', disponibilidadInventario: 62, marca: 'NOSOTRAS', numeroModelo: 'NS-FT2023', peso: 250, unidadesVendidas: 90, valoracionPromedio: 4.6 },
  {nombreProducto: 'DESODORANTE', descripcion: 'DESODORANTE AEROSOL HOMBRE REXONA 150ML', precio: 12950, categoria: 'Aseo y cuidado personal', disponibilidadInventario: 38, marca: 'REXONA', numeroModelo: 'RX-DL2023', peso: 150, unidadesVendidas: 70, valoracionPromedio: 4.5 },
  {nombreProducto: 'ALPINITO', descripcion: 'ALPINITO FRESA/MELOCOTÓN 4 UND 180 GR', precio: 5300, categoria: 'Lácteos', disponibilidadInventario: 26, marca: 'ALPINITO', numeroModelo: 'AP-AL2023', peso: 180, unidadesVendidas: 60, valoracionPromedio: 4.7 },
  {nombreProducto: 'AVENA', descripcion: 'AVENA ALPINA VASO 250 ML', precio: 3200, categoria: 'Lácteos', disponibilidadInventario: 28, marca: 'ALPINA', numeroModelo: 'AL-AV2023', peso: 250, unidadesVendidas: 120, valoracionPromedio: 4.5 },
  {nombreProducto: 'BEBIDA CAFÉ', descripcion: 'BEBIDA CAFÉ POMAR 250 ML SURTIDA', precio: 4600, categoria: 'Lácteos', disponibilidadInventario: 68, marca: 'POMAR', numeroModelo: 'PM-BC2023', peso: 250, unidadesVendidas: 150, valoracionPromedio: 4.6 },
  {nombreProducto: 'MANTEQUILLA', descripcion: 'MANTEQUILLA SIN SAL ALPINA 125 GRS', precio: 7990, categoria: 'Lácteos', disponibilidadInventario: 3, marca: 'ALPINA', numeroModelo: 'AL-MT2023', peso: 125, unidadesVendidas: 50, valoracionPromedio: 4.4 },
  {nombreProducto: 'ALIMENTO PARA CACHORROS', descripcion: 'ALIMENTO CACHORROS MAGIC FRIENDS 1KG', precio: 5490, categoria: 'Mascotas', disponibilidadInventario: 16, marca: 'MAGIC FRIENDS', numeroModelo: 'MF-AC2023', peso: 1000, unidadesVendidas: 80, valoracionPromedio: 4.5 },
  {nombreProducto: 'ALIMENTO PARA GATOS', descripcion: 'ALIMENTO PARA GATOS MAGIC FRIENDS 1KG', precio: 6300, categoria: 'Mascotas', disponibilidadInventario: 115, marca: 'MAGIC FRIENDS', numeroModelo: 'MF-AG2023', peso: 1000, unidadesVendidas: 90, valoracionPromedio: 4.4 },
  {nombreProducto: 'TOALLITAS HÚMEDAS', descripcion: 'TOALLITAS HÚMEDAS MASCOTAS QSH 48 UND', precio: 4300, categoria: 'Mascotas', disponibilidadInventario: 85, marca: 'MAGIC FRIENDS', numeroModelo: 'MF-TH2023', peso: 400, unidadesVendidas: 75, valoracionPromedio: 4.6 },
  {nombreProducto: 'BOLSAS DESECHOS', descripcion: 'BOLSAS DESECHOS DE MASCOTAS M FRIENDS', precio: 4300, categoria: 'Mascotas', disponibilidadInventario: 23, marca: 'MAGIC FRIENDS', numeroModelo: 'MF-BD2023', peso: 200, unidadesVendidas: 65, valoracionPromedio: 4.5 },
  {nombreProducto: 'ARENA PARA GATOS', descripcion: 'ARENA PARA GATOS 4 5 KG', precio: 14850, categoria: 'Mascotas', disponibilidadInventario: 95, marca: 'MAGIC FRIENDS', numeroModelo: 'MF-AG2023', peso: 4500, unidadesVendidas: 50, valoracionPromedio: 4.7 }
]);

//Búsquedas

//db.shop.find({nombreProducto:{$eq:'PIZZA'}})

//db.shop.find({precio:{$gt:50000}})

//db.shop.find({disponibilidadInventario:{$gte:100}})

//db.shop.find({numeroModelo:{$lt:'modelo'}})

//db.shop.find({peso:{$lte:300}})

//db.shop.find({unidadesVendidas:{$ne:10}})

//db.shop.find({valoracionPromedio:{$in:['valores']}})

//db.shop.find({categoria:{$nin:['Lácteos','Mascotas']}})

//db.shop.find({marca:'Red Flag'})

//db.shop.updateOne({nombreProducto:'PIZZA'},{$set:{precio:4990}})