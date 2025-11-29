**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**  
								  
**Historia de Usuario HU \- 003**

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | ----- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Historia de usuario HU \- 003 |  |  |
| **Autor**  | Omar El Masaudi |  |  |
| **Versión/Edición** | 1.0 | **Fecha Versión Actual** | 28/09/2025 |
| **Aprobado por** | Omar El Masaudi | **Fecha última Aprobación** | 28/09/2025 |
|  |  | **Nº Total de Páginas** | 5 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 | Versión inicial | Omar El Masaudi | 28/09/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

1 HU-003: Consultar el tiempo de llegada del autobús en tiempo real......................................4   
     1.1 Descripción...................................................................................................................................4   
     1.2 Criterios de aceptación..................................................................................................................4   
     1.3 Discusiones posteriores ................................................................................................................5

**HU \- 003\. Consultar el tiempo de llegada del autobús en tiempo real.**

***1.1 Descripción***  
**Como usuario (registrado o no registrado)**, **quiero** consultar en tiempo real el tiempo estimado de llegada de los autobuses a una parada **para** organizar mejor mis desplazamientos y evitar esperas innecesarias.

***1.2 Criterios de aceptación***  
A continuación, en la siguiente tabla, se indican todos los criterios de aceptación de esta historia de usuario.

| Núm.criterio | Descripción |
| ----- | ----- |
|  1 |  Como usuario, puedo consultar el tiempo estimado de    llegada de los próximos autobuses a las paradas de una    línea concreta |
|  3 |  El sistema muestra el tiempo estimado de llegada de   los próximos autobuses a esas paradas. |
|  4 |  El sistema actualiza de forma automática y continua   la información sobre los tiempos de llegada. |
|  5 |  En el caso de que se produzcan incidencias, el   sistema actualiza la información en tiempo real. |

La información necesaria para esta historia de usuario se muestra en la siguiente tabla.

| Nombre | Tipo | Longitud | Formato |
| ----- | ----- | ----- | ----- |
|  idParada |  Numérico |  1-6 |  Entero |
|  Nombre Parada |  Cadena de caracteres |  1-50 | Texto  |
|  idLinea |  Numérico |  1-6 |  Entero |
|  Nombre Línea |  Cadena de caracteres |  1-50 |  Texto  |
|  Tiempo Llegada |  Entero |  \- |  Minutos |

***1.3 Discusiones posteriores***  
No hay discusiones posteriores.