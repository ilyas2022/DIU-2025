**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**  
								  
								**Historia de Usuario HU \- 008**

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | ----- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Historia de usuario HU \- 008 |  |  |
| **Autor**  | Paola García Cárdenas |  |  |
| **Versión/Edición** | 1.0 | **Fecha Versión Actual** | 30/09/2025 |
| **Aprobado por** | Paola García Cárdenas | **Fecha última Aprobación** | 30/09/2025 |
|  |  | **Nº Total de Páginas** | 5 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 | Versión inicial | Paola García Cárdenas | 30/09/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

1 HU-008: Recarga online de la tarjeta…………………………………….....……………….4   
     1.1 Descripción...................................................................................................................................4   
     1.2 Criterios de aceptación..................................................................................................................4   
     1.3 Discusiones posteriores ................................................................................................................5  
**HU \- 008\. Recarga online de la tarjeta**

***1.1 Descripción***  
**Como usuario registrado**, **quiero** poder recargar mi tarjeta de transporte online, usando la web o la aplicación móvil, **para** evitar desplazamientos, y disponer siempre de saldo para viajar.

***1.2 Criterios de aceptación***  
A continuación, en la siguiente tabla, se indican todos los criterios de aceptación de esta historia de usuario.

| Núm.criterio | Descripción |
| ----- | ----- |
|  1 |  Como usuario registrado puedo solicitar recargar mi    tarjeta de transporte de manera online. |
|  2 |  El sistema reconoce automáticamente la tarjeta asociada   al  usuario. |
|  3 |  En el caso de no tener vinculada una tarjeta, se solicita vincularla, haciendo uso del id de la tarjeta. |
|  4 |  El usuario selecciona el importe de recarga. |
|  5 |  El sistema ofrece distintos métodos de pago online   (tarjeta bancaria, Bizum, PayPal, etc.). |
|  6 |  Tras el pago, el sistema muestra un mensaje de   confirmación y genera un recibo digital que se enviará al   correo vinculado a la cuenta.  |
|  7 |  El saldo recargado se actualiza automáticamente en la   tarjeta de transporte del usuario. |
|  8 |  El sistema guarda un historial de recargas con fecha,   hora, importe y método de pago. |

La información necesaria para esta historia de usuario se muestra en la siguiente tabla.

| Nombre | Tipo | Longitud | Formato |
| ----- | ----- | ----- | ----- |
| idRecarga |  Cadena de caracteres |  1-10 |  Alfanumérico |
|  idUsuario |  Cadena de caracteres |  6-12 |  Alfanumérico |
| idTarjeta |  Cadena de caracteres |  8-16 |  Alfanumérico |
|  Importe |  Numérico |  \- |  \#\#0.00 (EUR) |
|  Método de pago |  Enumerado |  \- |  Tarjeta/ Bizum/ Paypal |
|  Fecha y Hora |  Cadena de caracteres |  19 |  dd/mm/aaaa hh:mm:ss |

***1.3 Discusiones posteriores***  
No hay discusiones posteriores.