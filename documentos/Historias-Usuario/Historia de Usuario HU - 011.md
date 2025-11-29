**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**

								**Historia de Usuario HU \- 011**

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | ----- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Historia de usuario HU \- 011 |  |  |
| **Autor**  | Paola García Cárdenas |  |  |
| **Versión/Edición** | 1.0 | **Fecha Versión Actual** | 29/09/2025 |
| **Aprobado por** | Paola García Cárdenas | **Fecha última Aprobación** | 29/09/2025 |
|  |  | **Nº Total de Páginas** | 5 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 | Versión inicial | Paola García Cárdenas | 29/09/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

1 HU-011: Envío de mensajes de contacto…………………………………....……………….4   
     1.1 Descripción...................................................................................................................................4   
     1.2 Criterios de aceptación..................................................................................................................4   
     1.3 Discusiones posteriores ................................................................................................................5  
**HU \- 011\. Envío de mensajes de contacto**

***1.1 Descripción***  
**Como usuario registrado**, **quiero** poder enviar mensajes de contacto al soporte o a la empresa, **para** resolver dudas, informar de incidencias o realizar sugerencias sobre los servicios.

***1.2 Criterios de aceptación***  
A continuación, en la siguiente tabla, se indican los criterios de aceptación de la correspondiente historia de usuario.

| Núm.criterio | Descripción |
| ----- | ----- |
|  1 |  Como usuario registrado puedo solicitar enviar un   mensaje de contacto. |
|  2 |  El sistema muestra un formulario con los campos    necesarios  para enviar un mensaje ( asunto y    mensaje). |
|  3 |  El sistema valida que los campos obligatorios estén   completos antes de permitir el envío. |
|  4 |  Tras enviar el mensaje, el sistema muestra una   confirmación indicando que el mensaje ha sido   recibido correctamente. |
|  5 |  Como usuario registrado recibo una copia del   mensaje en mi correo electrónico registrado. |
|  6 |  La respuesta de la empresa se envía al correo   electrónico proporcionado por el usuario. |

La información necesaria para esta historia de usuario se muestra en la siguiente tabla.

| Nombre | Tipo | Longitud | Formato |
| ----- | ----- | ----- | ----- |
|  idUsuario |  Cadena de caracteres |  6-12 |  Alfanumérico |
|  idMensaje |  Numérico |  1-6 |  Entero |
|  Correo |  Cadena de caracteres |  1-100 |  Formato correo |
|  Mensaje |  Cadena de caracteres |  1-2000 |  Texto |
|  Fecha y Hora Envío |  Cadena de caracteres |  19 |  dd/mm/aaaa hh:mm:ss |
|  Estado mensaje |  Enumerado |  \- |  Enviado/   Respondido/Archivado |

***1.3 Discusiones posteriores***  
No hay discusiones posteriores.

## 

