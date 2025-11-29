**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**  
								  
								**Historia de Usuario HU \- 004**

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | :---- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Historia de usuario HU \- 004 |  |  |
| **Autor**  | Omar El Masaudi |  |  |
| **Versión/Edición** | 1.0 | **Fecha Versión Actual** | 29/09/2025 |
| **Aprobado por** | Omar El Masaudi | **Fecha última Aprobación** | 29/09/2025 |
|  |  | **Nº Total de Páginas** | 5 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 | Versión inicial | Omar El Masaudi | 29/09/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

1 HU-004: Guardar rutas o paradas favoritas………………………………………………….4   
     1.1 Descripción...................................................................................................................................4   
     1.2 Criterios de aceptación..................................................................................................................4   
     1.3 Discusiones posteriores ................................................................................................................5

**HU \- 004\. Guardar rutas o paradas favoritas**

***1.1 Descripción***  
**Como usuario registrado**, **quiero** guardar rutas o paradas como favoritas **para** acceder de forma más rápida a la información de horarios y tiempos de llegada.

***1.2 Criterios de aceptación***  
A continuación, en la siguiente tabla, se indican todos los criterios de aceptación de esta historia de usuario.

| Núm.criterio | Descripción |
| ----- | ----- |
|  1 |  Como usuario registrado, puedo añadir una parada   a la lista de favoritos. |
|  2 |  Como usuario registrado, puedo consultar mis favoritos    (paradas guardadas) en cualquier momento. |
|  3 |  El sistema guarda la información de mis favoritos   asociada a mi perfil de usuario. |
|  4 |  Como usuario registrado, puedo eliminar paradas   de mis lista de favoritos en cualquier momento. |

La información necesaria para esta historia de usuario se muestra en la siguiente tabla.

| Nombre | Tipo | Longitud | Formato |
| ----- | ----- | ----- | ----- |
|  idUsuario |  Cadena de caracteres |  6-12 |  Alfanumérico |
|  Tipo |  Enumerado |  \- |  Parada/Ruta |
|  idParada |  Numérico |  1-6 |  Entero |
|  Nombre parada |  Cadena de caracteres |  1-50 |  Texto |
|  idRuta |  Numérico |  1-6 |  Entero |
|  Fecha guardado |  Cadena de caracteres |  19 |  dd/mm/aaaa hh/mm/ss |

***1.3 Discusiones posteriores***  
No hay discusiones posteriores.  
