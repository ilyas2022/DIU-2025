**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**  
								  
								**Historia de Usuario HU \- 006**

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | ----- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Historia de usuario HU \- 006 |  |  |
| **Autor**  | Alejandro Ortega Ramón |  |  |
| **Versión/Edición** | 1.0 | **Fecha Versión Actual** | 28/09/2025 |
| **Aprobado por** | Alejandro Ortega Ramón | **Fecha última Aprobación** | 28/09/2025 |
|  |  | **Nº Total de Páginas** | 5 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 | Versión inicial | Alejandro Ortega Ramón | 28/09/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

1 HU-006: Información sobre todos los bonos disponibles..………………………………….4   
     1.1 Descripción...................................................................................................................................4   
     1.2 Criterios de aceptación..................................................................................................................4   
     1.3 Discusiones posteriores ................................................................................................................5  
**HU \- 006\. Información sobre todos los bonos disponibles**

***1.1 Descripción***  
**Como usuario (registrado o no registrado)**, **quiero** consultar la información sobre todos los bonos disponibles **para** poder elegir el que mejor se adapte a mis necesidades de viaje.

***1.2 Criterios de aceptación***  
A continuación, en la siguiente tabla, se indican todos los criterios de aceptación de esta historia de usuario.

| Núm.criterio | Descripción |
| ----- | ----- |
|  1 |  Como usuario puedo solicitar ver los bonos disponibles para   el transporte urbano. |
|  2 |  El sistema muestra la lista completa  de todos los bonos   disponibles (ej.: bono de 10 viajes, bono mensual, bono   joven, bono universitario). |
|  3 |  Como usuario, puedo leer la información básica de cada uno    de los bonos, como el nombre, el precio, número de viajes,   duración o condiciones de uso. |
|  4 |  El sistema actualiza automáticamente la información de los   bonos o la lista si hay cambios . |

La información necesaria para esta historia de usuario se muestra en la siguiente tabla.

| Nombre | Tipo | Longitud | Formato |
| ----- | ----- | ----- | ----- |
|  idBono |  Cadena de caracteres |  4-10 |  Alfanumérico |
|  Nombre Bono |  Cadena de caracteres |  1-50 |  Texto |
|  Precio  |  Numérico |  \- |  \#\#0.00 (EUR) |
|  Condiciones |  Cadena de caracteres |  1 \-200 |  Texto  |
|  Fecha inicio |  Cadena de caracteres |  19 |  dd/mm/aaaa hh/mm/ss |
|  Fecha fin |  Cadena de caracteres |  19 |  dd/mm/aaaa hh/mm/ss |

***1.3 Discusiones posteriores***  
No hay discusiones posteriores.