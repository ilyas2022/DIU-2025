**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**  
								  
								**Historia de Usuario HU \- 007**

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | :---- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Historia de usuario HU \- 007 |  |  |
| **Autor**  | Pilar Puente Torres |  |  |
| **Versión/Edición** | 1.0 | **Fecha Versión Actual** | 27/09/2025 |
| **Aprobado por** | Pilar Puente Torres | **Fecha última Aprobación** | 27/09/2025 |
|  |  | **Nº Total de Páginas** | 5 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 | Versión inicial | Pilar Puente Torres | 27/09/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

1 HU-007: Noticias y avisos sobre ciertas incidencias o retrasos producidos..……………….4   
     1.1 Descripción...................................................................................................................................4   
     1.2 Criterios de aceptación..................................................................................................................4   
     1.3 Discusiones posteriores ................................................................................................................5

**HU \- 007\. Noticias y avisos sobre ciertas incidencias o retrasos producidos**

***1.1 Descripción***  
**Como usuario (registrado o no registrado)**, **quiero** saber acerca de las noticias y avisos sobre ciertas incidencias o retrasos producidos en las líneas de autobús **para** organizarme mejor en caso de que una línea que uso habitualmente esté cortada.

***1.2 Criterios de aceptación***  
A continuación, en la siguiente tabla, se indican todos los criterios de aceptación de esta historia de usuario.

| Núm.criterio | Descripción |
| ----- | ----- |
|  1 |  Como usuario puedo solicitar ver noticias y avisos   activos. |
|  2  |  El sistema muestra avisos sobre incidencias relevantes   (retrasos, huelgas, averías, desvíos de ruta, etc.). |
|  3 |  Cada aviso incluye la fecha, la hora, la descripción y la   línea o zona afectada. |
|  4 |  El sistema actualiza de forma automática las noticias y   avisos, mostrando siempre la información más reciente. |

La información necesaria para esta historia de usuario se muestra en la siguiente tabla.

| Nombre | Tipo | Longitud | Formato |
| ----- | ----- | ----- | ----- |
|  idIncidencia |  Cadena de caracteres |  6-10 |  Alfanumérico |
|  Título incidencia |  Cadena de caracteres |  1-100 |  Texto |
|  idLinea |  Numérico |  1-6 |  Entero |
|  Nombre Línea |  Cadena de caracteres |  1-50 |  Texto |
|  Descripción  |  Cadena de caracteres |  1-200 |  Texto |
|  Fecha y Hora |  Cadena de caracteres |  19 |  dd/mm/aaaa hh:mm:ss |

***1.3 Discusiones posteriores***

No hay discusiones posteriores.