**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**  
								  
								**Historia de Usuario HU \- 002**

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | ----- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Historia de usuario HU \- 002 |  |  |
| **Autor**  | Alejandro Ortega Ramón |  |  |
| **Versión/Edición** | 1.0 | **Fecha Versión Actual** | 27/09/2025 |
| **Aprobado por** | Alejandro Ortega Ramón | **Fecha última Aprobación** | 27/09/2025 |
|  |  | **Nº Total de Páginas** | 5 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 | Versión inicial | Alejandro Ortega Ramón | 27/09/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

1 HU-002: Planificación de viajes (origen-destino)...................................................................4   
     1.1 Descripción...................................................................................................................................4   
     1.2 Criterios de aceptación..................................................................................................................4   
     1.3 Discusiones posteriores ................................................................................................................5  
**HU \- 002\. Planificación de viajes (origen-destino)**

***1.1 Descripción***  
**Como usuario (registrado o no registrado)**, **quiero** planificar un viaje indicando un origen y un destino **para** que el sistema me muestra la mejor ruta en transporte público.

***1.2 Criterios de aceptación***  
A continuación, en la siguiente tabla, se indican todos los criterios de aceptación de esta historia de usuario.

| Núm.criterio | Descripción |
| ----- | ----- |
|  1 |  Como usuario, puedo planificar un viaje en transporte   público indicando un origen y un destino. |
|  2 |  Como usuario, puedo introducir un origen    (dirección o parada) |
|  3 |  Como usuario, puedo introducir un destino   (dirección o parada) |
|  4 |  El sistema muestra las opciones de ruta disponibles   en transporte público. |
|  5 |  El sistema indica los horarios, duración del viaje y   paradas intermedias. |
|  6 |  El sistema actualiza la información en tiempo real si   hay incidencias o retrasos en la ruta seleccionada. |
|  7 |  El sistema utiliza la API de Google Maps para mostrar la   ruta en un mapa interactivo. |

La información necesaria para esta historia de usuario se muestra en la siguiente tabla.

| Nombre | Tipo | Longitud | Formato |
| ----- | ----- | ----- | ----- |
|  Origen |  Cadena de caracteres |  1-100 |  Dirección  |
|  Destino |  Cadena de caracteres |  1-100 |  Dirección |
|  idRuta  |  Numérico |  1-6 |  Entero |
|  Duración viaje |  Numérico |  \- |  Minutos |

***1.3 Discusiones posteriores***  
No hay discusiones posteriores.