**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**

**Bocetos textuales**

 Versión 4.0  
Fecha 25/11/2025  
**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | ----- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Bocetos textuales |  |  |
| **Autor**  | Paola García Cárdenas, Alejandro Ortega Ramón, Omar El Mascardi, Pilar Puente Torres, Ilyas El Hamdi |  |  |
| **Versión/Edición** | 3.0 | **Fecha Versión Actual** | 25/11/25 |
| **Aprobado por** | Paola García Cárdenas | **Fecha última Aprobación** | 25/11/2025 |
|  |  | **Nº Total de Páginas** | 20 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 |  | Paola García Cárdenas | 8/11/2025 |
| 2.0 | Finalización cambios | Paola García Cárdenas | 9/11/2025 |
| 3.0 | Retoque formato índice | Paola García Cárdenas | 25/11/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

[**1\. Inicio (Cabecera)	4**](#1.-inicio-\(cabecera\))

[**2.Planificador (formulario)	5**](#2.planificador-\(formulario\))

[2.1.Resultado de rutas	5](#2.1.resultado-de-rutas)

[**3.Líneas (Lista)	6**](#3.líneas-\(lista\))

[3.1.Línea (Detalle)	6](#3.1.línea-\(detalle\))

[3.2.Paradas (Lista)	7](#3.2.paradas-\(lista\))

[**4.Mapa completo	8**](#4.mapa-completo)

[**5.Bonos (Lista)	9**](#5.bonos-\(lista\))

[5.1.Bonos (Detalle)	9](#5.1.bonos-\(detalle\))

[**6.Avisos y noticias (Lista)	10**](#6.avisos-y-noticias-\(lista\))

[**7.Lista de favoritos	11**](#7.lista-de-favoritos)

[7.1.Favorito (alta)	11](#7.1.favorito-\(alta\))

[7.2.Favorito (Eliminación)	12](#7.2.favorito-\(eliminación\))

[**8.Recarga (Formulario)	13**](#8.recarga-\(formulario\))

[8.1.Vinculación de tarjeta	13](#8.1.vinculación-de-tarjeta)

[8.2.Pasarela de pago	14](#8.2.pasarela-de-pago)

[8.3.Recarga (confirmación)	14](#8.3.recarga-\(confirmación\))

[**9.Perfil (vista)	15**](#9.perfil-\(vista\))

[9.1.Perfil (edición)	15](#9.1.perfil-\(edición\))

[9.2.Perfil (confirmación de guardado)	16](#9.2.perfil-\(confirmación-de-guardado\))

[9.3.Cerrar sesión (confirmación)	16](#9.3.cerrar-sesión-\(confirmación\))

[**10.Info ALSA	17**](#10.info-alsa)

[**11.Contacto (Mensaje)	18**](#11.contacto-\(mensaje\))

[11.1 Mensaje (confirmación)	18](#11.1-mensaje-\(confirmación\))

[**12.Inicio de sesión	19**](#12.inicio-de-sesión)

[12.1.Recuperación de contraseña (formulario)	19](#12.1.recuperación-de-contraseña-\(formulario\))

[12.2.Instrucciones enviadas (Recuperación)	20](#12.2.instrucciones-enviadas-\(recuperación\))

### 

### **1\. Inicio (Cabecera)**  {#1.-inicio-(cabecera)}

| ID: U-001 | Título: Inicio (Cabecera) |
| :---- | :---- |
| **Descripción**: Barra superior persistente en la app y navegación principal. |  |
| **Datos que se obtienen:** |  |
| Información de usuario (idUsuario, contraseña…) |  |
| **Enlaces:** |  |
| Planificador			 | U-010 |
| Líneas | U-020 |
| Mapa | U-030 |
| Bonos | U-040 |
| Avisos y noticias | U-050 |
| Favoritos | U-60 |
| Recarga | U-70 |
| Perfil | U-80 |
| Info ALSA | U-90 |
| Contacto (Mensaje) | U-100 |
| Login | U-000 |
| **Comentarios:** La cabecera es persistente y responsive. Concentra la identidad de la app y la navegación principal en todas las pantallas. |  |

 

### **2.Planificador (formulario)** {#2.planificador-(formulario)}

| ID: U-010 | Título: Planificador (formulario) |
| :---- | :---- |
| **Descripción**: Introducir origen y destino para calcular rutas y alternativas de viaje. |  |
| **Datos que se obtienen:** |  |
| Origen | Destino |
| **Enlaces:** |  |
| Buscar rutas | U-011 (Resultado de las rutas) |
| Volver | U-001 (Inicio) |
| **Comentarios:** Formulario claro y accesible para planificar trayectos con autocompletado y uso opcional de ubicación. |  |

#### **2.1.Resultado de rutas** {#2.1.resultado-de-rutas}

| ID: U-011 |  |  | Título: Resultado de rutas |  |  |
| :---- | ----- | :---- | :---- | :---- | ----- |
| **Descripción**: Lista de alternativas entre origen y destino con duración y horas estimadas. |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| Lista de rutas |  | Duración total |  | Hora de salida/llegada |  |
| **Enlaces:** |  |  |  |  |  |
| Cambiar criterios |  |  | U-010 (Planificador (Formulario)) |  |  |
| Volver |  |  | U-001 (Inicio) |  |  |
| **Comentarios:** Se encuentran ordenadas por orden de duración por defecto. |  |  |  |  |  |

### **3.Líneas (Lista)** {#3.líneas-(lista)}

| ID: U-020 |  |  | Título: Líneas (Lista) |  |  |
| :---- | ----- | :---- | :---- | :---- | ----- |
| **Descripción**: Lista de líneas del servicio con su destino principal. |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| idLinea |  | nombreLínea |  | destinoPrincipal |  |
| **Enlaces:** |  |  |  |  |  |
| Detalle de línea |  |  | U0-21 |  |  |
| Buscar línea |  |  | U-020 (misma pantalla filtrada) |  |  |
| Volver |  |  | U-001 (Inicio) |  |  |
| **Comentarios:** Permite la búsqueda de una línea a través del deslizamiento de la lista o el filtrado mediante el buscador. |  |  |  |  |  |

#### **3.1.Línea (Detalle)** {#3.1.línea-(detalle)}

| ID: U-021 |  |  | Título: Línea (Detalle) |  |  |
| :---- | ----- | :---- | :---- | :---- | ----- |
| **Descripción**: Ficha de la línea seleccionada (datos clave) y paradas en orden de recorrido. |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| idLinea |  | nombreLínea |  | destinoPrincipal |  |
| Horario de servicio |  | Mapa |  | ListaParadas |  |
| **Enlaces:** |  |  |  |  |  |
| Ver paradas	 |  |  | U-022 |  |  |
| Guardar línea como favorita |  |  | U-061 |  |  |
| Volver |  |  | U-020 |  |  |
| **Comentarios:** Vista completa y accesible de la línea seleccionada con datos clave, mapa y paradas ordenadas, facilitando la consulta rápida del recorrido. |  |  |  |  |  |

#### **3.2.Paradas (Lista)** {#3.2.paradas-(lista)}

| ID: U-022 |  |  | Título: Paradas (Lista) |  |  |
| :---- | ----- | :---- | :---- | :---- | ----- |
| **Descripción**: Lista de la paradas que pertenecen a la línea seleccionada |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| idParada |  | nombreParada |  | ETAs |  |
| **Enlaces:** |  |  |  |  |  |
| Guardar parada como favorita |  |  | U-061 |  |  |
| Volver |  |  | U-021 |  |  |
| **Comentarios:** Acceso principal desde la Línea a la que pertenece. |  |  |  |  |  |

### **4.Mapa completo** {#4.mapa-completo}

| ID: U-030 |  |  | Título: Mapa completo |  |  |
| :---- | ----- | ----- | :---- | ----- | ----- |
| **Descripción**: Mapa estático con todas las líneas y paradas del servicio. |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| Imagen del Mapa |  |  | Fecha actualización |  |  |
| **Enlaces:** |  |  |  |  |  |
| Volver |  |  | U-001 (Inicio) |  |  |
| **Comentarios:** Acceso principal desde la Línea a la que pertenece. |  |  |  |  |  |

 

### **5.Bonos (Lista)** {#5.bonos-(lista)}

| ID: U-040 |  |  | Título: Bonos (Lista) |  |  |
| :---- | ----- | ----- | :---- | ----- | ----- |
| **Descripción**: Lista de bonos vigentes para los usuarios. |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| nombreBono identificativo |  |  | Precio |  |  |
| **Enlaces:** |  |  |  |  |  |
| Ver detalle de bono |  |  | U-041 |  |  |
| Volver			 |  |  | U-001 |  |  |
| **Comentarios:** Lista clara y accesible, con orden por relevancia o precio. |  |  |  |  |  |

#### **5.1.Bonos (Detalle)** {#5.1.bonos-(detalle)}

| ID: U-041 |  |  |  |  |  | Título: Bono (Detalle) |  |  |  |  |  |
| :---- | ----- | ----- | :---- | ----- | ----- | :---- | ----- | ----- | :---- | ----- | ----- |
| **Descripción**: Ficha completa del bono seleccionado. |  |  |  |  |  |  |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |  |  |  |  |  |  |
| nombreBono |  |  | Condiciones |  |  | Vigencia |  |  | Precio |  |  |
| **Enlaces:** |  |  |  |  |  |  |  |  |  |  |  |
| Volver |  |  |  |  |  | U-040 |  |  |  |  |  |
| **Comentarios:** Ficha clara y completa del bono con precio, tipo y vigencia, optimizada para consultar rápidamente en caso de dudas o interés. |  |  |  |  |  |  |  |  |  |  |  |

 

### **6.Avisos y noticias (Lista)** {#6.avisos-y-noticias-(lista)}

| ID: U-050 |  |  |  |  |  | Título: Avisos y noticias (Lista) |  |  |  |  |  |
| :---- | ----- | ----- | ----- | :---- | ----- | :---- | ----- | :---- | ----- | ----- | ----- |
| **Descripción**: Listado de avisos y noticias del servicio, ordenador por más recientes primero. |  |  |  |  |  |  |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |  |  |  |  |  |  |
| Título |  |  |  | Información |  |  |  | Fecha y Hora |  |  |  |
| **Enlaces:** |  |  |  |  |  |  |  |  |  |  |  |
| Volver |  |  |  |  |  | U-001 |  |  |  |  |  |
| **Comentarios:** Se muestran primero los más recientes.  En el caso de que no haya elementos, se mostrará un texto del tipo “No hay avisos o noticias activos”. |  |  |  |  |  |  |  |  |  |  |  |

### **7.Lista de favoritos** {#7.lista-de-favoritos}

| ID: U-060 | Título: Lista de favoritos |
| :---- | :---- |
| **Descripción**: Paradas y líneas guardadas por el usuario |  |
| **Datos que se obtienen:** |  |
| Lista de favoritos |  |
| **Enlaces:** |  |
| Ver elemento  | si es parada → U-022 / si es línea → U-021 |
| Eliminar favorito | U-062 |
| Volver | U-062 |
| **Comentarios:** Si la lista está vacía, mostrar un mensaje: “Aún no tienes favoritos”. Añadir atajo a Líneas (U-020) |  |

#### **7.1.Favorito (alta)** {#7.1.favorito-(alta)}

| ID: U-061 |  |  | Título: Favorito (alta) |  |  |
| :---- | ----- | :---- | :---- | :---- | ----- |
| **Descripción**: Diálogo de confirmación para añadir a favoritos la línea o parada desde su pantalla de detalle. |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| idElemento (línea o parada) |  | tipo (LÍNEA/PARADA) |  | nombreElemento |  |
| **Enlaces:** |  |  |  |  |  |
| Confirmar |  |  | U-060 (Lista de favoritos actualizada con el nuevo favorito) |  |  |
| Cancelar |  |  | U-060 (lista de favoritos, sin cambios) |  |  |
| \[Duplicado detectado\] |  |  | U-060 (Lista de favoritos; mostrar aviso “Ya está en favoritos) |  |  |
| **Comentarios:** El sistema debe verificar duplicados por idElemento. Si se confirma, guardar en cuenta del usuario y mostrar feedback “Añadido a favoritos). |  |  |  |  |  |

#### **7.2.Favorito (Eliminación)** {#7.2.favorito-(eliminación)}

| ID: U-062 |  |  | Título: Favorito (Eliminación) |  |  |
| :---- | ----- | :---- | :---- | :---- | ----- |
| **Descripción**: Diálogo de confirmación para eliminar un favorito seleccionado desde la lista |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| idFavorito |  | tipo (LÍNEA/PARADA) |  | nombreElemento (para confirmar al usuario qué va a borrar) |  |
| **Enlaces:** |  |  |  |  |  |
| Eliminar |  |  | U-060 (Lista de favoritos actualizada sin el elemento) |  |  |
| Cancelar |  |  | U-060 (lista de favoritos, sin cambios) |  |  |
| **Comentarios:** Al eliminar un favorito de la lista se muestra un mensaje claro del tipo: “¿Eliminar Parada 123 de favoritos?”. La eliminación ofrece feedback al usuario: “Eliminado de favoritos”. |  |  |  |  |  |

### **8.Recarga (Formulario)** {#8.recarga-(formulario)}

| ID: U-070 |  |  | Título: Recarga (Formulario) |  |  |
| :---- | ----- | :---- | :---- | :---- | ----- |
| **Descripción**: Pantalla para recargar la tarjeta introduciendo importe y método de pago.   |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| importe (número, con validación de mínimo/máximo) |  | metodoPago (TARJETA/BIZUM/PAYPAL) |  | idTarjetaAsociada |  |
| **Enlaces:** |  |  |  |  |  |
| Confirmar |  |  | U-071 (si hay tarjeta asociada) U-072 (si no hay tarjeta asociada) |  |  |
| Volver |  |  | U-001 (Inicio) |  |  |
| **Comentarios:** Es importante validar el importe (formato y rango permitido) Se mostrará un mensaje acerca de que la operación se finalizará en una pasarela segura. Si la tarjeta no está asociada permitirá al usuario vincularla de manera inmediata. |  |  |  |  |  |

#### **8.1.Vinculación de tarjeta** {#8.1.vinculación-de-tarjeta}

| ID: U-072 |  |  | Título: Vinculación de tarjeta |
| :---- | ----- | :---- | :---- |
| **Descripción**: Formulario para asociar una tarjeta de transporte a la cuenta del usuario antes de recargar  |  |  |  |
| **Datos que se obtienen:** |  |  |  |
| idTarjeta (número/código de la tarjeta) |  | Confirmación de vinculación |  |
| **Enlaces:** |  |  |  |
| Vincular |  |  | U-070 (retorno al formulario de recarga con la nueva tarjeta vinculada) |
| Cancelar |  |  | U-070 (sin cambios) |
| **Comentarios:** Se validará el formato y longitud del número de tarjeta. Además se informará al usuario acerca de los errores cometidos (si los hubiera). Si la operación es exitosa, se guardará la vinculación y se rellenará la U-70 con la tarjeta vinculada. Aquí no se solicitan datos de pago, solo la asociación de la tarjeta de transporte. |  |  |  |

#### **8.2.Pasarela de pago** {#8.2.pasarela-de-pago}

| ID: U-071 |  |  | Título: Pasarela de pago |  |  |
| :---- | ----- | :---- | :---- | :---- | ----- |
| **Descripción**: Paso de procesamiento del pago de la recarga en la pasarela externa. Muestra un resumen (importe y método) antes de pagar y recibir el estado de la transacción. |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| resumenOperacion (importe, método) |  |  |  |  |  |
| **Enlaces:** |  |  |  |  |  |
| Pago aprobado  |  |  | U-073 |  |  |
| Pago rechazado |  |  | U-070 (con mensaje de rechazo) |  |  |
| **Comentarios:** Ante un error, se regresará a U-70 con avisos. |  |  |  |  |  |

#### **8.3.Recarga (confirmación)** {#8.3.recarga-(confirmación)}

| ID: U-073 |  | Título: Recarga (confirmación) |  |
| :---- | :---- | :---- | :---- |
| **Descripción**: Pantalla de confirmación tras pago aprobado. Muestra idRecarga, importe, fecha/hora y saldo actualizado de la tarjeta. |  |  |  |
| **Datos que se obtienen:** |  |  |  |
| idRecarga | importe | fechaHora | saldoActualizado |
| **Enlaces:** |  |  |  |
| Volver |  | U-001 (Inicio) |  |
| **Comentarios:** No hay comentarios |  |  |  |

### **9.Perfil (vista)** {#9.perfil-(vista)}

| ID: U-080 |  | Título: Perfil (vista) |  |
| :---- | :---- | :---- | :---- |
| **Descripción**: Pantalla de lectura donde el usuario visualiza sus datos personales y estado de la cuenta: información básica, saldo y tarjeta y bonos activos. |  |  |  |
| **Datos que se obtienen:** |  |  |  |
| nombre y apellidos | correo electrónico | teléfono | saldo actual |
| tarjeta asociada | bonos activos | fecha y hora de última modificación |  |
| **Enlaces:** |  |  |  |
| Editar perfil			 |  | U-081 |  |
| Cerrar sesión			 |  | U-082 |  |
| Volver				 |  | U-001 (Inicio) |  |
| **Comentarios:** Si no hay una tarjeta asociada, se indicará “Sin tarjeta asociada”. |  |  |  |

#### **9.1.Perfil (edición)** {#9.1.perfil-(edición)}

| ID: U-081 |  | Título: Perfil (edición) |  |
| :---- | :---- | :---- | ----- |
| **Descripción**: Formulario para actualizar los datos del perfil del usuario. |  |  |  |
| **Datos que se obtienen:** |  |  |  |
| nombre y apellidos | correo electrónico | teléfono |  |
| **Enlaces:** |  |  |  |
| Guardar |  | U-083 |  |
| Cancelar |  | U-080 |  |
| **Comentarios:** Se validarán los formatos básicos (teléfono de 9 dígitos, nombre no vacío). |  |  |  |

#### **9.2.Perfil (confirmación de guardado)** {#9.2.perfil-(confirmación-de-guardado)}

| ID: U-083 |  | Título: Perfil (confirmación de guardado) |  |
| :---- | ----- | :---- | ----- |
| **Descripción**: Pantalla/ diálogo de confirmación tras persistir los cambios de perfil. |  |  |  |
| **Datos que se obtienen:** |  |  |  |
| Mensaje de éxito |  | Fecha y Hora de actualización aplicada |  |
| **Enlaces:** |  |  |  |
| Volver				 |  | U-001 (Inicio) |  |
| **Comentarios:** Reflejar los nuevos valores al regresar a U-80.  Si algún cambio no puede aplicarse, por ser erróneo, se mostrará un aviso específico. |  |  |  |

#### **9.3.Cerrar sesión (confirmación)** {#9.3.cerrar-sesión-(confirmación)}

| ID: U-082 |  | Título: Cerrar sesión (confirmación) |  |
| :---- | ----- | :---- | ----- |
| **Descripción**: Diálogo para confirmar el cierre de sesión de la cuenta actual. |  |  |  |
| **Datos que se obtienen:** |  |  |  |
| Confirmación del usuario (Sí/No) |  |  |  |
| **Enlaces:** |  |  |  |
| Confirmar |  | U-000 |  |
| Cancelar			 |  | U-080 |  |
| **Comentarios:** Tras el cierre, se redirigirá a la pantalla de Login general de la aplicación. |  |  |  |

### **10.Info ALSA** {#10.info-alsa}

| ID: U-90 |  |  | Título: Info ALSA |  |  |
| :---- | :---- | :---- | :---- | :---- | ----- |
| **Descripción**: Pantalla informativa con el contenido institucional de la empresa: historia, misión, valores, servicios principales y datos de contacto. |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |
| Secciones de Texto | Teléfono de Contacto | Correo de Contacto |  | Enlaces Externos |  |
| **Enlaces:** |  |  |  |  |  |
| Volver		 |  |  | U-001 (Inicio) |  |  |
| **Comentarios:** Esta sección es de solo lectura, sin edición ni formularios. Se mostrará siempre la fecha de última actualización del contenido. Permite abrir los enlaces externos en navegadores externos y permite copiar teléfonos/correos. |  |  |  |  |  |

### **11.Contacto (Mensaje)** {#11.contacto-(mensaje)}

| ID: U-100 | Título: Mensaje (formulario de contacto) |
| :---- | :---- |
| **Descripción**: Formulario para que el usuario registrado envíe una consulta o incidencia al servicio. |  |
| **Datos que se obtienen:** |  |
| asunto (texto corto) | mensaje (texto) |
| **Enlaces:** |  |
| Enviar			 | U-101 |
| Volver			 | U-001 (Inicio) |
| **Comentarios:** Se validarán los campos obligatorios (asunto y mensaje).  Al enviar correctamente, se registra el mensaje con estado “Enviado” y continúa con la confirmación. |  |

#### **11.1 Mensaje (confirmación)** {#11.1-mensaje-(confirmación)}

| ID: U-101 |  | Título: Mensaje (confirmación) |  |
| :---- | :---- | :---- | :---- |
| **Descripción**: Confirmación de que el mensaje ha sido registrado y se ha enviado una copia al correo del usuario |  |  |  |
| **Datos que se obtienen:** |  |  |  |
| idMensaje | Fecha/Hora registro | Asunto | Estado del mensaje: Enviado |
| **Enlaces:** |  |  |  |
| Volver			 |  | U-001 (Inicio) |  |
| **Comentarios:** Indicar claramente que la respuesta llegará al correo asociado al perfil del usuario.  |  |  |  |

### **12.Inicio de sesión** {#12.inicio-de-sesión}

| ID: U-000 |  |  |  |  |  | Título: Inicio de sesión |  |  |  |  |  |
| :---- | ----- | ----- | ----- | ----- | ----- | :---- | ----- | ----- | ----- | ----- | ----- |
| **Descripción**: Pantalla de acceso donde el usuario introduce sus credenciales o accede a la opción de recordar contraseña. |  |  |  |  |  |  |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |  |  |  |  |  |  |
| Correo electrónico |  |  |  |  |  | Contraseña |  |  |  |  |  |
| **Enlaces:** |  |  |  |  |  |  |  |  |  |  |  |
| Acceder			 |  |  |  |  |  | U-01 (Inicio, si las credenciales són válidas). U-00 (sí credenciales no válidas, con mensaje informativo para el usuario). |  |  |  |  |  |
| Recordar contraseña		 |  |  |  |  |  | U-005 |  |  |  |  |  |
| **Comentarios:** Se validarán los formatos de correo y contraseña antes de enviar.  Si la autenticación falla, se mostrará un mensaje claro (“Credenciales no válidas”). |  |  |  |  |  |  |  |  |  |  |  |

#### **12.1.Recuperación de contraseña (formulario)** {#12.1.recuperación-de-contraseña-(formulario)}

| ID: U-005 |  |  |  |  |  | Título: Recuperación de contraseña (formulario) |  |  |  |  |  |
| :---- | ----- | ----- | ----- | ----- | ----- | :---- | ----- | ----- | ----- | ----- | ----- |
| **Descripción**: Pantalla de acceso donde el usuario introduce sus credenciales o accede a la opción de recordar contraseña. |  |  |  |  |  |  |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |  |  |  |  |  |  |
| Correo electrónico |  |  |  |  |  |  |  |  |  |  |  |
| **Enlaces:** |  |  |  |  |  |  |  |  |  |  |  |
| Enviar |  |  |  |  |  | U-06 (si el correo es válido/existente) U-05 (si error, con mensaje) |  |  |  |  |  |
| Volver |  |  |  |  |  | U-000 |  |  |  |  |  |
| **Comentarios:** Se validará el formato del correo electrónico. Si el correo no existe o hay error, se mostrará un aviso. Si la validación se realiza con éxito, se informa que se ha enviado un correo con instrucciones para recuperar la contraseña de la cuenta.  |  |  |  |  |  |  |  |  |  |  |  |

#### **12.2.Instrucciones enviadas (Recuperación)** {#12.2.instrucciones-enviadas-(recuperación)}

| ID: U-006 |  |  |  |  |  | Título: Instrucciones enviadas (Recuperación) |  |  |  |  |  |
| :---- | ----- | ----- | ----- | ----- | ----- | :---- | ----- | ----- | ----- | ----- | ----- |
| **Descripción**: Confirmación de que se han enviado las instrucciones de restablecimiento al correo indicado. |  |  |  |  |  |  |  |  |  |  |  |
| **Datos que se obtienen:** |  |  |  |  |  |  |  |  |  |  |  |
| Mensaje de confirmación |  |  |  |  |  |  |  |  |  |  |  |
| **Enlaces:** |  |  |  |  |  |  |  |  |  |  |  |
| Ir a Login |  |  |  |  |  | U-000 |  |  |  |  |  |
| **Comentarios:** Indicar que una vez cambiada la contraseña desde el enlace enviado al correo electrónico, podrá iniciar sesión normalmente. |  |  |  |  |  |  |  |  |  |  |  |

