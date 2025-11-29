**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**

								**Historia de Usuario HU \- 013**

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | ----- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Historia de usuario HU \- 013 |  |  |
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

1 HU-013: Registrarse en el sistema…………….…………………………....……………….4   
     1.1 Descripción...................................................................................................................................4   
     1.2 Criterios de aceptación..................................................................................................................4   
     1.3 Discusiones posteriores ................................................................................................................5

**HU \- 013\. Registrarse en el sistema**

***1.1 Descripción***  
**Como usuario no registrado**, **quiero** poder registrarme en la web o en la aplicación móvil, **para** crear una cuenta personal, y así acceder a todas las funciones disponibles, como recargas online, gestión de bonos, favoritos y notificaciones personalizadas.

***1.2 Criterios de aceptación***  
A continuación, en la siguiente tabla, se indican los criterios de aceptación de la correspondiente historia de usuario.

| Núm.criterio | Descripción |
| ----- | ----- |
|  1 |  Como usuario no registrado, puedo solicitar crear una   cuenta. |
|  2 |  El sistema muestra un formulario de registro con los   campos necesarios (nombre, correo, contraseña,   confirmación de contraseña, etc.). |
|  3 |  El sistema valida que todos los campos obligatorios   estén completos y que los datos tengan un formato   correcto. |
|  4 |  El sistema verifica que el correo electrónico no esté ya  registrado. |
|  5 |  Si los datos son válidos, el sistema crea una nueva   cuenta de usuario. |
|  6 |  El usuario recibe un correo de confirmación del registro |
|  7 |  El sistema notifica al usuario que el registro se ha   completado correctamente y le redirige a la página de    inicio de sesión. |
|  8 |  El sistema protege los datos personales. |

La información necesaria para esta historia de usuario se muestra en la siguiente tabla.

| Nombre | Tipo | Longitud | Formato |
| ----- | ----- | ----- | ----- |
|  idUsuario | Cadena de caracteres |  6-12 |  Alfanumérico |
|  Nombre |  Cadena de caracteres |  1-50 |  Texto |
|  Correo |  Cadena de caracteres |  1-100 |  Formato email |
|  Contraseña |  Cadena de caracteres |  8-20 |  Alfanumérico con   mayúsculas y números |
|  Teléfono |  Numérico |  9 |  \#\#\#\#\#\#\#\#\# |
|  Fecha registro |   Cadena de caracteres | 19 |  dd/mm/aaaa hh:mm:ss |
|  Estado sesión |  Enumerado |  \- |  Activa / Cerrada / Error |

## ***1.3 Discusiones posteriores***

No hay discusiones posteriores.