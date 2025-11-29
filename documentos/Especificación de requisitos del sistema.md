**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**

**Especificación de requisitos**

Versión 4.0  
Fecha 03/10/2025

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | ----- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Especificación de requisitos |  |  |
| **Autor**  | Paola García Cárdenas, Alejandro Ortega Ramón, Omar El Mascardi, Pilar Puente Torres, Ilyas El Hamdi |  |  |
| **Versión/Edición** | 5.0 | **Fecha Versión Actual** | 03/10/2025 |
| **Aprobado por** | Alejandro Ortega Ramón y Paola García Cárdenas | **Fecha última Aprobación** | 03/10/2025 |
|  |  | **Nº Total de Páginas** | 38 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 | Versión inicial | Alejandro Ortega Ramón y Paola García Cárdenas | 27/09/2025 |
| 2.0 | Segunda versión | Ilyas El Hamdi | 01/10/2025 |
| 3.0 | Tercera versión | Pilar Puente Torres y Omar El Mascardi | 02/10/2025 |
| 4.0 | Cuarta versión | Alejandro Ortega Ramón y Paola García Cárdenas | 03/10/2025 |
| 5.0 | Versión final  | Alejandro Ortega Ramón y Paola García Cárdenas | 14/11/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

1. **Introducción…………………………………………………………………………..5**

1.1 Alcance…………………………………………………………………………….5  
1.2 Objetivos…………………………………………………………………………...5

2. **Información del dominio del problema………………………………………….….6**

2.1 Introducción al Dominio del Problema…………………………………...……….6  
2.2 Glosario de Términos…………………………………………………………..….6

3. **Catálogo de Requisitos del sistema a desarrollar……………………………..……7**  
   3.1 Requisitos Generales del Sistema…………………………………………………7  
   3.2 Casos de uso del Sistema………………………………………………………...11  
   3.2.1 Diagrama de Casos de Uso del Sistema………………………………..11  
   3.2.2 Especificación de Actores del Sistema………………………………....13  
   3.2.3 Especificación de Casos de Uso del Sistema…………………………..16  
   3.3 Requisitos Funcionales del Sistema………...…………………………………....29  
   3.3.1 Requisitos de Información del Sistema…………………………...……29  
   3.4 Requisitos No Funcionales del Sistema……...…………………………………..34  
   	3.4.1 Requisitos de Usabilidad……………………………………………….34  
4. **Anexos……………………………………………………………………………….38**

	4.1 Anexo A: Actas de Reuniones…………………………………………………...38  
	4.2 Anexo B: Documentación Relevante…………………………………………….38  
	4.3 Anexo C: Glosario de Acrónimos y Abreviaturas……………………………….38

**1\. Introducción**

El proyecto SIT Autobús Almería consiste en informatizar y hacer más inteligente el transporte urbano mediante el desarrollo de una solución. Se crearán apps nativas (Android e iOS) y una web.

**1.1. Alcance**

Una vez finalizado el proyecto, se dispondrá de una aplicación para la gestión y el uso del servicio de autobuses urbanos de Almería. La aplicación móvil estará orientada a los usuarios finales y permitirá consultar líneas, horarios y tiempos estimados de llegada, planificar viajes, recargar la tarjeta de transporte y recibir notificaciones sobre incidencias o retrasos. La aplicación web estará dirigida al personal de operación y administración facilitando el seguimiento de los autobuses, la publicación de avisos y la gestión de contenidos, usuarios y parámetros del sistema.

**1.2 Objetivos**

Mejorar el servicio al usuario del autobús (información fiable y rutas óptimas), reducir la incertidumbre mediante predicciones y avisos proactivos, y facilitar el trabajo del operador con herramientas sencillas. Además, sentar una base escalable y segura para futuras fases (pagos, telemetría real y analítica).

**2\. Información del Dominio del Sistema**

**2.1. Introducción al Dominio del Sistema**

El proyecto aborda la mejora del servicio de autobús urbano en el término municipal de Almería. Actualmente el servicio opera con varias líneas y una flota estable durante todo el año. Se requiere evolucionar hacia un sistema más “sostenible e inteligente” que facilite la planificación de viajes, la consulta de horarios y tiempos estimados, y la atención a la ciudadanía. El alcance incluye el desarrollo de un prototipo funcional con dos canales: aplicación móvil nativa (Android/iOS) y aplicación web de escritorio. El sistema integrará funciones de apoyo basadas en inteligencia artificial para ofrecer información personalizada, resolver dudas frecuentes y ayudar en la toma de decisiones operativas. Los principales usuarios son personas viajeras, personal de operación y personal municipal de seguimiento del servicio. El éxito se medirá por la facilidad de uso, la fiabilidad de la información, la reducción de incidencias y el aumento del uso del autobús.

**2.2. Glosario de Términos**

* Ayuntamiento de Almería: Titular del servicio público de autobuses urbanos.   
* Concesionaria: Empresa adjudicataria que opera el servicio; en este caso, ALSA/SURBUS.   
* SURBUS: Marca comercial del servicio urbano de autobuses en Almería.   
* Flota: Conjunto de vehículos del servicio (53 en la actualidad).   
* Línea: Ruta de autobús; existen 15 líneas operativas.   
* Sostenibilidad financiera: Aporte municipal que complementa las tarifas para cubrir costes.   
* PMUS: Plan de Movilidad Urbana Sostenible que impulsa el uso del autobús.   
* App nativa: Aplicación móvil para Android/iPhone.   
* App web de escritorio: Versión accesible desde navegador en PC.   
* Servicios de IA: Funcionalidades basadas en inteligencia artificial integradas en el sistema.   
* Prototipo: Implementación inicial para validar el sistema inteligente en ambos entornos.

**3\. Catálogo de Requisitos del Sistema a Desarrollar**

En esta sección se describe la solución propuesta por el equipo para satisfacer las necesidades de la aplicación.

**3.1. Requisitos Generales del Sistema**

A continuación, se describen los requisitos generales del sistema en forma de objetivos.

| *OBJ-1* | *Autentificación* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe permitir iniciar sesión con correo electrónico y contraseña. |
| **Comentarios** | La pantalla de acceso debe ser sencilla y mostrar mensajes claros si hay errores. Se permitirá recordar la sesión y proteger la cuenta tras varios intentos fallidos. |

| *OBJ-2* | *Registro de usuarios* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe permitir el registro de nuevos usuarios con validación de correo y contraseña segura. |
| **Comentarios** | El proceso de registro debe ser rápido y seguro, confirmando los datos por correo electrónico antes de activar la cuenta. |

| *OBJ-3* | *Planificación de viajes (Origen – Destino)* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe calcular la mejor ruta entre un origen y un destino, mostrando duración, transbordos y alternativas. |
| **Comentarios** | El usuario podrá buscar rutas escribiendo una dirección y elegir entre varias opciones sugeridas por el sistema. |

| *OBJ-4* | *Información en tiempo real* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe mostrar el tiempo estimado de llegada de los autobuses por línea y parada seleccionada. |
| **Comentarios** | Ningún comentario |

| *OBJ-5* | *Favoritos* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe permitir guardar y eliminar paradas como favoritas. |
| **Comentarios** | Los favoritos se guardarán en la cuenta del usuario y se mantendrán disponibles al iniciar sesión desde cualquier dispositivo. |

| *OBJ-6* | *Consulta de líneas y paradas* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe permitir consultar el catálogo de líneas, recorridos y paradas con información detallada. |
| **Comentarios** | El usuario podrá buscar por nombre o código y ver información actualizada de cada línea o parada de manera rápida y clara. |

| *OBJ-7* | *Información sobre bonos* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe mostrar todos los bonos disponibles con precio, condiciones y vigencia. |
| **Comentarios** | La información de los bonos se mostrará de forma sencilla e incluirá detalles sobre el cambio de condiciones (con aviso previo). Además, si se aplica, se podrán comprar o recargar de manera online. |

| *OBJ-8* | *Noticias y avisos* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe publicar avisos y nuevas noticias sobre incidencias o retrasos de los autobuses. |
| **Comentarios** | Ningún comentario |

| *OBJ-9* | *Recarga online de tarjeta* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe permitir recargar la tarjeta de transporte mediante pasarela de pago segura. |
| **Comentarios** | El proceso de pago debe ser rápido y claro, mostrando una confirmación al usuario una vez realizada la recarga correctamente. |

| *OBJ-10* | *Gestión del perfil de usuario* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe ofrecer una sección “Mi perfil” donde el usuario puede consultar y modificar sus datos personales. |
| **Comentarios** | El usuario podrá actualizar su información  y preferencias en cualquier momento. Así como, podrá ver cuándo fue la última modificación realizada. |

| *OBJ-11* | *Consulta de saldo* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe mostrar el saldo disponible. |
| **Comentarios** | La información de saldo debe ser fácil de localizar y actualizarse automáticamente tras cada recarga. |

| *OBJ-12* | *Mapa completo (líneas y paradas)* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe mostrar una imagen del mapa con todas las líneas y paradas. |
| **Comentarios** | El mapa deberá estar actualizado y permitir identificar las líneas por colores y las paradas mediante marcadores visibles. |

| *OBJ-13* | *Contacto y soporte* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe permitir enviar mensajes de contacto o soporte mediante un formulario. |
| **Comentarios** | El usuario podrá enviar consultas o incidencias fácilmente y recibirá una confirmación del envío junto con la respuesta por correo electrónico. |

| *OBJ-14* | *Consultar información de la empresa ALSA* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe permitir a los usuarios, tanto registrados como no registrados, consultar información de la empresa ALSA, incluyendo su historia, misión, valores, servicios principales y medios de contacto. |
| **Comentarios** | La información se mostrará de forma clara y actualizada dentro de la sección “Conócenos”. |

| *OBJ-15* | *Operación del servicio* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe ofrecer a los operadores herramientas para monitorizar, gestionar incidencias y publicar avisos. |
| **Comentarios** | El personal autorizado podrá controlar el estado de los autobuses y comunicar incidencias o cambios de servicio en tiempo real. |

| *OBJ-16* | *Administración del sistema* |
| :---- | :---- |
| **Versión** | 1.0 |
| **Descripción** | El sistema debe permitir al administrador gestionar usuarios, contenidos, bonos, horarios y avisos. |
| **Comentarios** | Para el administrador, el panel será intuitivo, seguro y debe registrar todas las acciones realizadas para mantener un seguimiento correcto. |

**3.2. Casos de Uso del Sistema**

Esta sección contiene la especificación de los casos de uso del sistema, incluyendo un diagrama de casos de uso, la especificación de los actores y la especificación de cada uno de los casos de uso.

**3.2.1. Diagramas de Casos de Uso del Sistema**

El diagrama mostrado en la Figura 1 resume visualmente los casos de uso identificados.

**![][image1]**  
*Figura 1: Diagrama de Caso de Uso*

**3.2.2. Especificación de Actores del Sistema**

En primer lugar, se describen los Perfiles de Usuario (PU) que interactúan con el sistema, junto con su función principal dentro del sistema.

| *PU-1* | *Usuario*  |
| :---- | :---- |
| **Descripción** | Es la persona que accede a la aplicación o a la web para consultar información sobre líneas, horarios, rutas, incidencias y realizar operaciones como recargar su tarjeta o gestionar sus bonos. Puede estar registrada o utilizar las funciones básicas sin registro. |
| **Comentarios** | Ninguno. |

| *PU-2* | *Operario* |
| :---- | :---- |
| **Descripción** | Empleado responsable de la operación diaria del servicio. Su labor incluye el seguimiento de la flota de autobuses, la publicación de avisos informativos, la gestión de incidencias y la atención a los mensajes de contacto enviados por los usuarios. |
| **Comentarios** | Ninguno. |

| *PU-3* | *Administrador* |
| :---- | :---- |
| **Descripción** | Persona encargada de la configuración y mantenimiento del sistema. Es la responsable de garantizar la seguridad, estabilidad y el correcto funcionamiento de la aplicación. |
| **Comentarios** | Ninguno. |

En segundo lugar, se describen los actores (ACT) que intervienen en el sistema, indicando su relación con los perfiles de usuario definidos anteriormente.

| *ACT-1* | *Usuario no registrado* |
| :---- | :---- |
| **Perfil de usuario** | PU-1 (Usuario) |
| **Requisitos asociados** | RF-1, RF-2, RF-3, RF-5, RF-6, RF-7, RF-10, RF-13 |
| **Descripción** | Personas que realizan un conjunto de tareas relacionadas con el perfil Usuario. Los usuarios con este rol acceden a la aplicación o la web sin tener una cuenta creada. Pueden consultar información general del servicio, como líneas, paradas, mapa del sistema y avisos. Sin embargo, no tienen acceso a funciones personalizadas. |
| **Comentarios** | Ninguno. |

| *ACT-2* | *Usuario registrado* |
| :---- | :---- |
| **Perfil de usuario** | PU-1 (Usuario) |
| **Requisitos asociados** | RF-1, RF-2, RF-3, RF-4, RF-5, RF-6, RF-7, RF-8, RF-9, RF-10, RF-11, RF-12 |
| **Descripción** | Personas que realizan un conjunto de tareas relacionadas con el perfil Usuario. Las personas con este rol disponen de una cuenta en el sistema y acceden mediante inicio de sesión. Pueden realizar operaciones personalizadas como gestionar el perfil, recargar la tarjeta, guardar favoritos, consultar bonos y recibir notificaciones. |
| **Comentarios** | Ninguno. |

| *ACT-3* | *Operador* |
| :---- | :---- |
| **Perfil de usuario** | PU-2 (Operador) |
| **Requisitos asociados** | RF-7, RF-11 |
| **Descripción** | Personas que realizan un conjunto de tareas relacionadas con el perfil de Operador. Las personas con este rol supervisan el funcionamiento diario del servicio, monitorizando la flota de autobuses, registrando incidencias, publicando avisos informativos y gestionando los mensajes o consultas enviados por los usuarios. |
| **Comentarios** | Ninguno. |

| *ACT-4* | *Administrador* |
| :---- | :---- |
| **Perfil de usuario** | PU-3 (Administrador) |
| **Requisitos asociados** | RF-1, RF-5, RF-6, RF-7, RF-8, RF-10, RF-11, RF-12 |
| **Descripción** | Personas que realizan un conjunto de tareas relacionadas con el perfil de Administrador. Las personas con este rol se encargan de la configuración general y el mantenimiento del sistema, gestionando usuarios, roles, horarios, tarifas, contenidos y demás parámetros necesarios para garantizar el correcto funcionamiento y la seguridad de la aplicación. |
| **Comentarios** | Ninguno. |

**3.2.3. Especificación de Casos de Uso del Sistema**

A continuación, se muestran las especificaciones de los casos de uso del sistema que han sido identificados.

| *RF-1* | *Consultar información de la empresa ALSA* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-14, OBJ-16 |  |
| **Requisitos asociados** | RI-10 |  |
| **Descripción** | El sistema permitirá que cualquier usuario, consulte información general sobre la empresa ALSA. |  |
| **Precondición** | La aplicación o la página web deben estar operativas y en funcionamiento.  |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita consultar información sobre la empresa. |
|  | 2 | El sistema valida la disponibilidad y localiza el contenido que desea visualizar el usuario. |
|  | 3 | El sistema recupera el contenido y lo entrega al usuario. |
| **Postcondición** | La información de la empresa se muestra correctamente y el usuario puede conocer los datos de la institución y de contacto. |  |
| **Excepciones** | 2 | Si no existe contenido disponible, el sistema informa de que “no hay información disponible en este momento”. |
| **Comentarios** | La información será actualizada periódicamente por el administrador para garantizar su veracidad.  |  |

| *RF-2* | *Planificación de viajes (Origen-Destino)* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-3 |  |
| **Requisitos asociados** | RI-2, RI-9 |  |
| **Descripción** | El sistema permitirá al usuario planificar un viaje introduciendo un punto de origen y un destino. A partir de esos datos, el sistema calculará las rutas posibles en transporte público, mostrando alternativas con información de duración, horarios y paradas intermedias. |  |
| **Precondición** | El servicio de búsquedas de ubicaciones está operativo para interpretar el origen y destino de interés introducido por el usuario. |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita planificar un viaje. |
|  | 2 | El usuario introduce el origen (dirección, parada o ubicación actual). |
|  | 3 | El usuario introduce el destino (dirección o parada). |
|  | 4  | El sistema valida los datos introducidos y busca las rutas disponibles. |
|  | 5 | El sistema muestra las rutas disponibles con sus respectivos horarios, duración y paradas intermedias. |
|  | 6 | El usuario revisa y selecciona la ruta preferida. |
| **Postcondición** | El usuario obtiene una o varias rutas posibles entre el origen y el destino, con toda la información necesaria para realizar el viaje. |  |
| **Excepciones** | 2-3 | Si el origen o el destino no se encuentran disponibles, el sistema muestra un mensaje indicando la situación. |
|  | 4 | Si la conexión con el servicio de mapas falla, se mostrará un aviso. |
| **Comentarios** | El sistema debe permitir al usuario modificar en cualquier momento los datos de origen y destino. Además, la interfaz debe ser clara, mostrando los resultados de forma visual y comprensible. |  |

| *RF-3* | *Consultar el tiempo de llegada del autobús en tiempo real*  |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-4 |  |
| **Requisitos asociados** | RI-2, RI-7 |  |
| **Descripción** | El sistema permitirá al usuario consultar, para una parada concreta, el tiempo estimado de llegada de los próximos autobuses. La información se mostrará de forma clara y se actualizará automáticamente. |  |
| **Precondición** | El usuario selecciona una parada concreta |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita consultar los tiempos de llegada de un autobús a una parada concreta |
|  | 2 | El sistema valida la línea del autobús y solicita al proveedor los tiempos estimados de llegada. |
|  | 3 | El sistema recibe los tiempos estimados de llegada para cada una de las paradas en la línea seleccionada. |
|  | 4 | El sistema muestra los próximos autobuses con los minutos restantes. |
|  | 5 | El usuario solicita refrescar la información o mantener la pantalla activa. |
|  | 6 | El sistema actualiza automáticamente los datos a intervalos de tiempo. |
| **Postcondición** | El usuario visualiza los tiempos estimados de llegada para la parada deseada. |  |
| **Excepciones** | 3 | Si el sistema no es capaz de recibir la estimación de llegada mostrará un aviso como “Estimación no disponible”. |
| **Comentarios** | El sistema debe indicar que los tiempos son estimaciones. |  |

| *RF-4* | *Guardar paradas favoritas* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-5 |  |
| **Requisitos asociados** | RI-1, RI-2, RI-9 |  |
| **Descripción** | El sistema permitirá a un usuario registrado añadir, consultar y eliminar paradas favoritas para acceder fácilmente a sus tiempos de llegada. Las favoritas quedarán asociadas al perfil del usuario. |  |
| **Precondición** | El usuario se encuentra registrado. |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita guardar como favorita una parada . |
|  | 2 | El usuario identifica la parada. |
|  | 3 | El usuario confirma la parada a guardar como favorita. |
|  | 4 | El sistema verifica que no esté ya en favoritos y la almacena asociada al perfil del usuario. |
|  | 5 | El sistema confirma la operación y muestra la lista de favoritos actualizada. |
|  | 6 | El usuario visualiza su lista de Favoritos actualizada. |
| **Postcondición** | La parada queda guardada como favorita y aparece en la lista del usuario. |  |
| **Excepciones** | 4 | Si la parada ya está guardada como favorita, el sistema mostrará “Ya está en favoritos” y no dejará añadirla de nuevo. |
| **Comentarios** | Las paradas favoritas deben persistir en la cuenta del usuario y estar disponibles en todos sus dispositivos.  |  |

| *RF-5* | *Consultar líneas y paradas de autobuses* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-6, OBJ-16 |  |
| **Requisitos asociados** | RI-2 |  |
| **Descripción** | El sistema permitirá al usuario (registrado o no registrado) consultar el catálogo de líneas y las paradas asociadas, visualizar el recorrido y acceder a la información básica. También dispondrá de un buscador por nombre. |  |
| **Precondición** | El catálogo de líneas y paradas se encuentra disponible. |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita consultar las líneas y las paradas. |
|  | 2 | El sistema presenta el listado de líneas con nombre y destino final. |
|  | 3 | El usuario localiza una línea mediante el buscador (nombre/código) o explorando el listado. |
|  | 4 | El usuario selecciona la línea de interés. |
|  | 5 | El sistema muestra todas las paradas de la línea en orden de recorrido. |
| **Postcondición** | El usuario visualiza la información de la línea seleccionada y sus paradas en orden. |  |
| **Excepciones** | 3 | Si no existe la línea solicitada. el sistema mostrará “No se ha encontrado información sobre la búsqueda realizada” |
| **Comentarios** | La presentación debe ser clara y concisa, mostrando primero el listado de líneas y, tras seleccionar una línea, el detalle de paradas en orden de recorrido. |  |

| *RF-6* | *Información sobre todos los bonos disponibles* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-7, OBJ-16 |  |
| **Requisitos asociados** | RI-3 |  |
| **Descripción** | El sistema permitirá al usuario (registrado o no registrado) consultar la lista de bonos disponibles, visualizando para cada bono su nombre, número de viajes o duración, condiciones de uso y vigencia. |  |
| **Precondición** | La aplicación o la página web deben estar operativas y en funcionamiento.  |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita consultar los bonos disponibles para el transporte urbano. |
|  | 2 | El sistema recupera el catálogo de bonos vigentes. |
|  | 3 | El sistema muestra el listado de bonos con su información básica. |
|  | 4 | El usuario selecciona un bono para ver en detalle. |
|  | 5 | El sistema presenta la ficha completa del bono (precio, nº de viajes, duración, condiciones…). |
| **Postcondición** | El usuario ha consultado la información actualizada de uno o varios bonos y puede elegir el que mejor se adapte a sus necesidades. |  |
| **Excepciones** | 3 | Si el sistema no consigue recuperar la lista de bonos vigentes mostrará “No hay bonos disponibles en este momento”. |
| **Comentarios** | La información de los bonos debe mantenerse actualizada por el administrador, debido a que los bonos solo están disponibles durante un periodo de tiempo. |  |

| *RF-7* | *Noticias y avisos sobre ciertas incidencias o retrasos producidos* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-8, OBJ-15 |  |
| **Requisitos asociados** | RI-2, RI-4 |  |
| **Descripción** | El sistema permitirá a cualquier usuario (registrado o no registrado) consultar noticias y avisos relacionados con incidencias del servicio (huelgas, averías, retrasos, desvíos). |  |
| **Precondición** | La aplicación o la página web deben estar operativas y en funcionamiento.  |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita consultar noticias y avisos. |
|  | 2 | El sistema obtiene las incidencias y avisos disponibles. |
|  | 3 | El sistema ordena los avisos (los más recientes primero). |
| **Postcondición** | El usuario ha consultado los últimos avisos, y ha sido informado acerca de posibles incidencias o cambios que puedan alterar sus viajes. |  |
| **Excepciones** | 2 | Si no hay avisos disponibles, el sistema mostrará “No hay avisos activos en este momento” |
| **Comentarios** | Los avisos y noticias deben ordenarse por fecha/hora (más reciente primero) e indicar claramente la línea o zona afectada. |  |

| *RF-8* | *Recarga online de tarjeta* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-9, OBJ-16 |  |
| **Requisitos asociados** | RI-1, RI-6 |  |
| **Descripción** | El sistema permitirá a un usuario registrado recargar su tarjeta de transporte desde la web o la aplicación móvil, eligiendo un importe y un método de pago. Tras completar el pago, se confirmará la operación, se actualizará el saldo y se generará un recibo digital que se enviará a la cuenta de correo asociada al perfil. |  |
| **Precondición** | La tarjeta de usuario está asociada a su cuenta |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita recargar su tarjeta de transporte. |
|  | 2 | El usuario confirma la tarjeta a recargar. |
|  | 3 | El sistema recupera la tarjeta asociada y verifica su estado. |
|  | 4 | El usuario selecciona el importe de recarga. |
|  | 5 | El usuario elige el método de pago disponible. |
|  | 6 | El sistema procesa el pago a través de la pasarela. |
|  | 7 | El sistema muestra confirmación y genera un recibo digital. |
|  | 8 | El sistema actualiza el saldo de la tarjeta y registra la recarga realizada. |
| **Postcondición** | El saldo de la tarjeta se actualiza automáticamente y el usuario recibe un recibo digital para usar en caso de incidencias. |  |
|  | 2-3 | Si no hay una tarjeta asociada o la tarjeta no es válida, el sistema solicita vincular una. |
| **Excepciones** | 6 | Si el pago es rechazado o falla la pasarela, el sistema mostrará "No se ha podido completar la operación” y no se actualizará el saldo. |
| **Comentarios** | Antes de confirmar, el sistema mostrará un resumen de la operación (importe y método) . Si se supera el tiempo de confirmación de la pasarela, la recarga no se aplica y el sistema indicará que debe reintentarse la operación. |  |

| *RF-9* | *Gestión de perfil de usuario registrado* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-10 |  |
| **Requisitos asociados** | RI-, RI-3, RI-6 |  |
| **Descripción** | El sistema permitirá a un usuario registrado consultar y modificar la información de su perfil. Cada cambio quedará registrado con la fecha y hora de la última modificación. |  |
| **Precondición** | El usuario ha iniciado sesión correctamente. |  |
|  | El sistema dispone de los datos actuales del perfil asociados a la cuenta. |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita abrir su perfil. |
|  | 2 | El sistema presenta los datos personales actuales. |
|  | 3 | El usuario solicita editar sus datos. |
|  | 4 | El usuario modifica los campos deseados. |
|  | 5 | El sistema valida los nuevos datos introducidos. |
|  | 6 | El usuario confirma los cambios. |
|  | 7 | El sistema guarda la información actualizada y actualiza la fecha/hora de la última modificación. |
|  | 8 | El sistema muestra un mensaje de confirmación de guardado correcto. |
| **Postcondición** | El perfil queda actualizado y los datos visibles reflejan los cambios efectuados por parte del usuario. |  |
| **Excepciones** | 6 | Si la validación de datos falla (por ejemplo, correo no válido), el sistema muestra el error específico y no guarda los cambios. |
| **Comentarios** | Las operaciones de perfil deben ser seguras. |  |

| *RF-10* | *Ver mapa completo de todas las líneas y paradas* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-12, , OBJ-16 |  |
| **Requisitos asociados** | RI-2, RI-8 |  |
| **Descripción** | El sistema permitirá al usuario (registrado o no registrado) visualizar una imagen del mapa con todas las líneas y paradas del servicio. |  |
| **Precondición** | La imagen del mapa está publicada y es accesible desde la aplicación móvil o web. |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita ver el mapa de líneas y paradas. |
|  | 2 | El sistema recupera el mapa actualizado. |
|  | 3 | El sistema muestra el mapa con todas las líneas por color y las paradas señaladas. |
|  | 4 | El usuario amplía o reduce la imagen para mejorar la visualización de zonas. |
|  | 5 | El sistema mantiene la información actualizada . |
| **Postcondición** | El usuario visualiza el mapa actualizado con las líneas diferenciadas por color y las paradas claramente señaladas. |  |
| **Excepciones** | 2 | Si la imagen del mapa no está disponible o no puede cargarse, el sistema mostrará el error específico. |
| **Comentarios** | El mapa debe actualizarse cuando cambien rutas o paradas. Además, se debe indicar la fecha de última actualización. La leyenda debe ser legible y coherente para poder distinguir de manera correcta cada recorrido. |  |

| *RF-11* | *Envío de mensajes de contacto* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-13, OBJ-15 |  |
| **Requisitos asociados** | RI-1, RI-5 |  |
| **Descripción** | El sistema permitirá a un usuario registrado enviar un mensaje de contacto a la empresa mediante un formulario. El sistema validará los campos obligatorios, registrará el mensaje y mostrará una confirmación de recepción. El usuario recibirá una copia en su correo y la respuesta de la empresa llegará al correo facilitado. |  |
| **Precondición** | El usuario ha iniciado sesión correctamente. |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita enviar un mensaje de contacto. |
|  | 2 | El sistema muestra el formulario (asunto y mensaje) |
|  | 3 | El usuario rellena los campos obligatorios y envía el formulario. |
|  | 4 | El sistema valida el contenido de los campos. |
|  | 5 | El sistema registra el mensaje con fecha/hora e identificador de seguimiento. |
|  | 6 | El sistema muestra una confirmación de recepción. |
|  | 7 | El sistema envía una copia del mensaje al correo del usuario. |
|  | 8 | (Proceso posterior) La respuesta de la empresa se enviará al correo indicado por el usuario. |
| **Postcondición** | El mensaje queda registrado en el sistema y el usuario dispone de una confirmación y copia en su correo electrónico. |  |
| **Excepciones** | 5 | Si la validación falla o el sistema no puede enviar el mensaje se mostrará un error específico “No se ha podido enviar el mensaje. Revisa los campos e inténtalo de nuevo.” y no se registrará la solicitud. |
| **Comentarios** | El sistema debe guardar los mensajes con su estado. La confirmación y la copia por correo ayudan al usuario a verificar que su solicitud fue recibida. |  |

| *RF-12* | *Iniciar sesión de un usuario registrado* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-1 |  |
| **Requisitos asociados** | RI-1 |  |
| **Descripción** | El sistema permitirá que un usuario registrado acceda a su cuenta introduciendo sus credenciales. Si la autenticación es correcta, el usuario podrá utilizar las funcionalidades personalizadas. |  |
| **Precondición** | Existe un usuario dado de alta con credenciales válidas. |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita iniciar sesión. |
|  | 2 | El sistema solicita correo electrónico y contraseña. |
|  | 3 | El usuario introduce sus credenciales y confirma. |
|  | 4 | El sistema valida el formato de los campos y comprueba las credenciales.  |
|  | 5 | Si son correctas, el sistema autentica al usuario, crea la sesión y redirige al área principal de su perfil. |
| **Postcondición** | La sesión queda iniciada y el usuario puede acceder a sus funciones personalizadas según su perfil. |  |
| **Excepciones** | 4 | Si la validación de credenciales falla o el formato es inválido, el sistema mostrará el error “Credenciales no válidas ” o “Formato no válido” y no se iniciará sesión. |
|  | 3 | Si el usuario no recuerda la contraseña de su cuenta puede acceder a “¿Olvidaste su contraseña? para recuperarla correctamente. |
| **Comentarios** | Se ofrecerá “Recordar contraseña” en el caso de que el usuario haya olvidado la suya. |  |

| *RF-13* | *Registrarse en el sistema* |  |
| :---- | :---- | :---- |
| **Objetivos asociados** | OBJ-2 |  |
| **Requisitos asociados** | RI-1 |  |
| **Descripción** | El sistema permitirá a un usuario no registrado crear una nueva cuenta. Para ello completará un formulario de alta, el sistema validará los datos y creará  la cuenta para ese usuario. |  |
| **Precondición** | El usuario no se encuentra registrado. |  |
| **Secuencia normal** | **Paso** | **Acción** |
|  | 1 | El usuario solicita registrarse. |
|  | 2 | El sistema muestra el formulario de registro. |
|  | 3 | El usuario rellena los campos obligatorios y confirma el alta. |
|  | 4 | El sistema valida el formato de los datos. |
|  | 5 | El sistema verifica que el correo no esté ya registrado. |
|  | 6 | Si todo es correcto, el sistema crea la cuenta con estado “Pendiente de confirmación”. |
|  | 7 | El sistema envía un correo de confirmación al usuario con un enlace para realizar la activación de la cuenta. |
|  | 8 | El usuario confirma el registro desde el enlace recibido. |
|  | 9 | El sistema activa la cuenta y notifica que el proceso se ha completado satisfactoriamente. |
| **Postcondición** | La cuenta del usuario queda creada y activada. A partir de este momento, el usuario registrado puede acceder a las opciones y tareas personalizadas. |  |
| **Excepciones** | 4 | Si la validación de datos falla, el sistema mostrará un error específico, y  no creará la cuenta. |
|  | 5 | Si el correo ya está registrado, el sistema mostrará el motivo del error y no creará la cuenta. |
| **Comentarios** | El alta debe ser clara y segura, para evitar cuentas duplicadas. |  |

**3.3. Requisitos Funcionales del Sistema**

En esta sección se describen los requisitos de información del sistema.

**3.3.1. Requisitos de Información del Sistema**

Esta sección contiene los requisitos de almacenamiento de información (requisitos de Información) que han sido identificados.

| *RI-1* | *Información sobre usuarios registrados* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-1, OBJ-2, OBJ-10 |
| **Requisitos asociados** | RF-9, RF-12, RF-13, RF-11 |
| **Descripción** | El sistema debe almacenar los datos necesarios para identificar al usuario y gestionar su perfil. |
| **Datos específicos** | idUsuario: cadena de caracteres 6-12 (alfanumérico) Nombre: cadena de caracteres  1-50 (texto) Correo: cadena de caracteres (1-100) (formato correo válido) Teléfono: numérico 9 (\#\#\#\#\#\#\#\#\#) Contraseña: cadena de caracteres (alfanumérico con mayúsculas y números). Fecha de Registro: cadena de caracteres 19 (dd/mm/aaaa hh:mm:ss) Última Modificación: cadena de caracteres 19 (dd/mm/aaaa hh:mm:ss) |
| **Comentarios** | El correo será único por cuenta y las contraseñas se almacenarán cifradas. Se registrará la fecha de alta y la última modificación de los datos. |

| *RI-2* | *Información sobre el catálogo de líneas y paradas* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-6, OBJ-12, OBJ-16 |
| **Requisitos asociados** | RF-5, RF-10 |
| **Descripción** | El sistema debe almacenar el catálogo vigente de líneas y sus paradas en orden de recorrido |
| **Datos específicos** | idLinea: Numérico 1-6 (entero) Nombre Línea: cadena de caracteres 1-50 (texto) Destino Principal: cadena de caracteres 1-50 (texto) idParada: cadena de caracteres 1-6 (entero) Nombre Parada: cadena de caracteres 1-50 (texto). |
| **Comentarios** | idLinea e idParada serán únicos. El catálogo de líneas y paradas siempre se mantendrá actualizado para asegurar la consistencia con el mapa y horarios. |

| *RI-3* | *Información sobre bonos* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-7, OBJ-16 |
| **Requisitos asociados** | RF-6 |
| **Descripción** | El sistema debe almacenar el catálogo de bonos con su precio, condiciones y vigencia. |
| **Datos específicos** | idBono: cadena de caracteres 4-10 (alfanumérico) Nombre: cadena de caracteres 1-50 (texto) Precio: numérico (\#\#0.00 EUR) Condiciones: cadena de caracteres 1-200 (texto) Fecha inicio: cadena de caracteres 19 (dd/mm/aaaa hh:mm:ss) Fecha fin: cadena de caracteres 19 (dd/mm/aaaa hh:mm:ss) |
| **Comentarios** | Cada bono tendrá identificador único y vigencia (inicio/fin). Al llegar la fecha de fin, el bono se marcará como no vigente y dejará de mostrarse al usuario. |

| *RI-4* | *Información sobre noticias y avisos* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-8, OBJ-15, OBJ-16 |
| **Requisitos asociados** | RF-7 |
| **Descripción** | El sistema debe almacenar los avisos publicados sobre incidencias, retrasos o cambios de servicio. |
| **Datos específicos** | idIncidencia: cadena de caracteres 6-10 (alfanumérico) Título incidencia: cadena de caracteres 1-100 (texto) idLinea: numérico 1-6 (entero) Nombre Línea: cadena de caracteres 1-50 (texto) Descripción: cadena de caracteres 1-200 (texto) Fecha publicación: cadena de caracteres 19 (dd/mm/aaaa hh:mm:ss |
| **Comentarios** | Los avisos y noticias se ordenarán por fecha (más reciente primero) e incluirán toda la información necesaria para que el usuario esté correctamente informado. En el caso de ser una incidencia, si esta se resuelve, se archivará. |

| *RI-5* | *Información sobre mensajes de contacto* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-13, OBJ-15, OBJ-16 |
| **Requisitos asociados** | RF-11 |
| **Descripción** | El sistema debe almacenar los mensajes enviados por los usuarios y su gestión. |
| **Datos específicos** | idUsuario: cadena de caracteres 6-12 (alfanumérico) idMensaje: numérico 1-6 (entero) Asunto: cadena de caracteres 1-50 (texto) Mensaje: cadena de caracteres 1-2000 (texto) Fecha y Hora Envío: cadena de caracteres 19 (dd/mm/aaaa hh:mm:ss) Estado mensaje: enumerado (Enviado / Respondido / Archivado) |
| **Comentarios** | Cada mensaje realizado por un usuario tendrá un identificador único. Se conservará el seguimiento (fechas de envío y respuesta) y se enviará copia por correo al usuario. |

| *RI-6* | *Información sobre recargas de tarjeta* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-9, OBJ-11, OBJ-16 |
| **Requisitos asociados** | RF-8 |
| **Descripción** | El sistema debe almacenar las operaciones de recarga realizadas por los usuarios. |
| **Datos específicos** | idRecarga: cadena de caracteres 1-10 (alfanumérico) idUsuario: cadena de caracteres 6-12 (alfanumérico) idTarjeta: cadena de caracteres 8-16 (alfanumérico) Importe: numérico (\#\#0.00 EUR) Método de pago: enumerado (Tarjeta / Bizum / Paypal) Fecha y Hora: cadena de caracteres 19 (dd/mm/aaaa hh:mm:ss) |
| **Comentarios** | Cada operación de recarga tendrá un identificador único para evitar duplicados de cobros. |

| *RI-7* | *Información sobre las estimaciones de llegada* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-4 |
| **Requisitos asociados** | RF-3 |
| **Descripción** | El sistema debe almacenar los datos de estimación de llegada por línea y parada. |
| **Datos específicos** | idParada: numérico 1-6 (entero) Nombre Parada: cadena de caracteres 1-50 (texto) idLinea: numérico 1-6 (entero) Nombre Linea: cadena de caracteres 1-50 (Texto) Tiempo llegada: entero (minutos) |
| **Comentarios** | Ninguno. |

| *RI-8* | *Información sobre el mapa estático del sistema* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-12, OBJ-16 |
| **Requisitos asociados** | RF-10 |
| **Descripción** | El sistema debe almacenar la imagen vigente del mapa. |
| **Datos específicos** | idImagen: cadena de caracteres 1-10 (alfanumérico) URLImagen: cadena de caracteres 1-200 (PNG / JPG) Fecha Actualización: cadena de caracteres 19 (dd/mm/aaaa hh:mm:ss) |
| **Comentarios** | La imagen del mapa incluirá versión y fecha de última actualización, y su leyenda deberá corresponderse con el catálogo vigente de líneas y paradas. Cuando el catálogo cambie o se actualice se generará una nueva imagen y se mostrará la última actualización. |

| *RI-9* | *Información sobre los viajes planificados (Origen \- Destino)* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-3 |
| **Requisitos asociados** | RF-2 |
| **Descripción** | El sistema debe almacenar la consulta de planificación de viajes. |
| **Datos específicos** | Origen: cadena de caracteres 1-100 (dirección) Destino: cadena de caracteres 1-100 (dirección) idRuta: numérico 1-6 (entero) Duración viaje: numérico (minutos) |
| **Comentarios** | Ninguno. |

| *RI-10* | *Información corporativa de la empresa ALSA* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-14, OBJ-16 |
| **Requisitos asociados** | RF-1 |
| **Descripción** | El sistema debe almacenar el contenido institucional que se muestra en la sección “Conócenos” (historia, valores, misión, servicios y contacto). |
| **Datos específicos** | Título sección: cadena de caracteres 1-50 (texto) Descripción: cadena de caracteres 1-1000 (texto) Teléfono: numérico 9 (\#\#\#\#\#\#\#\#\#) Correo: cadena de caracteres (1-100) (formato correo válido) Enlaces: URL (dirección web válida) |
| **Comentarios** | El contenido será gestionado por el administrador y siempre estará actualizado. |

**3.4. Requisitos No Funcionales del Sistema**

En esta sección se describen únicamente los requisitos no funcionales del sistema que se refieren a la usabilidad.

**3.4.1. Requisitos de Usabilidad**

| *RNF-1* | *Accesibilidad*  |
| :---- | :---- |
| **Objetivos asociados** | OBJ-3, OBJ-4, OBJ-5, OBJ-6, OBJ-8, OBJ-9, OBJ-10, ONJ-12, OBJ-13 |
| **Requisitos asociados** | RF-2, RF-3, RF-4, RF-5, RF-7, RF-8, RF-9, RF-10, RF-11, RF-12, RF-13 |
| **Descripción** | La interfaz será accesible para personas con discapacidad, siguiendo buenas prácticas de accesibilidad. |
| **Comentarios** | Es necesario garantizar una experiencia de usuario inclusiva. Además, la interfaz debe ofrecer un alto contraste visual, usar etiquetas claras en los campos y descripciones de imágenes que tengan sentido. El diseño debe ser totalmente flexible. |

| *RNF-2* | *Rendimiento* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-3, OBJ-4, OBJ-5, OBJ-6, OBJ-12 |
| **Requisitos asociados** | RF-2, RF-3, RF-5, RF-10 |
| **Descripción** | Las pantallas principales deben responder con fluidez, evitando esperas largos o bloqueos |
| **Comentarios** | La aplicación mostrará indicadores de carga siempre que una consulta tarde en responder. |

| *RNF-3* | *Consistencia y lenguaje claro* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-5, OBJ-6, OBJ-7, OBJ-8, OBJ-10, OBJ-13, OBJ-14 |
| **Requisitos asociados** | RF-1, RF-4, RF-5, RF-6, RF-7, RF-9, RF-11 |
| **Descripción** | Las terminologías, iconos y patrones serán coherentes en toda la aplicación móvil y la web. |
| **Comentarios** | Se seguirán una serie de condiciones: Usar nombres iguales para acciones iguales, evitar tecnicismos, y mantener formatos de fecha, hora y moneda consistentes. |

| *RNF-4* | *Diseño responsive y legibilidad* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-5, OBJ-6, OBJ-10, OBJ-12 |
| **Requisitos asociados** | RF-4, RF-5, RF-9, RF-10 |
| **Descripción** | La interfaz se adaptará correctamente a móvil y escritorio, manteniendo legibilidad y orden en todo momento. |
| **Comentarios** | La interfaz se implementará con diseños fluidos, preservando tipografía clara y espacios adecuados para su uso responsive. |

| *RNF-5* | *Feedback y estado del sistema* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-4, OBJ-8, OBJ-9, OBJ-12 |
| **Requisitos asociados** | RF-3, RF-7, RF-8, RF-11 |
| **Descripción** | El sistema informará siempre de lo que está ocurriendo y del resultado de cada acción |
| **Comentarios** | La aplicación comunicará siempre qué está ocurriendo mediante indicadores de progreso y confirmaciones visibles. Por otro lado, redactará los errores con una causa comprensible, y mostrando la solución a este. |

| *RNF-6* | *Navegación eficiente* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-3, OBJ-4, OBJ-5, OBJ-6 |
| **Requisitos asociados** | RF-2, RF-3, RF-4, RF-5 |
| **Descripción** | Las funciones más usadas deben ser accesibles en pocos pasos, con una estructura fácil de entender. |
| **Comentarios** | La información se estructurará con una jerarquía clara. Además, se ofrecerán accesos directos a funciones frecuentes desde la pantalla de inicio. |

| *RNF-7* | *Tolerancia a errores y recuperación* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-4, OBJ-5, OBJ-8, OBJ-9, OBJ-13 |
| **Requisitos asociados** | RF-3, RF-4, RF-7, RF-8, RF-11 |
| **Descripción** | El sistema evitará errores y ayudará a corregirlos. |
| **Comentarios** | Ninguno. |

| *RNF-8* | *Control de notificaciones* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-7, OBJ-8, OBJ-10, OBJ-13 |
| **Requisitos asociados** | RF-6, RF-7, RF-9, RF-11 |
| **Descripción** | El usuario decidirá qué avisos quiere recibir, evitando notificaciones innecesarias. |
| **Comentarios** | El sistema permitirá personalizar las notificaciones de ciertas secciones (como avisos y noticias). Estas podrán desactivarse siempre y cuando el usuario lo desee. |

| *RNF-9* | *Correspondencia con el mundo real* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-3, OBJ-4, OBJ-5, OBJ-6, OBJ-12 |
| **Requisitos asociados** | RF-2, RF-3, RF-5, RF-7, RF-10 |
| **Descripción** | La interfaz usará lenguaje, iconos y convenciones equivalentes al mundo real: destinos reconocibles, colores estándar para líneas, tiempos expresados en minutos y textos comprensibles. Se evitarán términos internos o técnicos. |
| **Comentarios** | Se emplearán nombres de lugares reales, colores intuitivos en mapas y frases habituales para usuarios de transporte público. El sistema mostrará la información en el orden natural esperado. |

| *RNF-10* | *Control y libertad del usuario* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-3, OBJ-4, OBJ-5, OBJ-10, OBJ-12 |
| **Requisitos asociados** | RF-2, RF-3, RF-4, RF-9, RF-12 |
| **Descripción** | Se permitirá cancelar operaciones, corregir entradas, rehacer búsquedas o volver atrás sin perder los datos ya introducidos. El sistema proporciona seguridad frente a acciones no deseadas. |
| **Comentarios** | El usuario podrá modificar origen/destino, cancelar formularios y corregir información sin tener que reiniciar procesos. Se evitarán callejones sin salida. |

| *RNF-11* | *Reconocimiento mejor que recuerdo* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-3, OBJ-4, OBJ-5, OBJ-6, OBJ-10 |
| **Requisitos asociados** | RF-2, RF-4, RF-5, RF-7 |
| **Descripción** | El sistema mostrará elementos recientes, favoritos, búsquedas previas y accesos visibles a funciones frecuentes, reduciendo la necesidad de recordar datos. |
| **Comentarios** | Los accesos a paradas recientes, rutas guardadas y búsquedas anteriores estarán siempre visibles en secciones clave; el diseño evitará desplegables ocultos para funciones principales. |

| *RNF-12* | *Diseño estético y minimalista* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-5, OBJ-6, OBJ-8, OBJ-10, OBJ-12 |
| **Requisitos asociados** | RF-1, RF-2, RF-5, RF-7, RF-10 |
| **Descripción** | La interfaz evitará elementos innecesarios, texto excesivo o pantallas sobrecargadas. Se mostrará únicamente la información imprescindible para completar cada tarea. |
| **Comentarios** | El diseño será limpio, ordenado y con foco en lo esencial. Se evitarán imágenes irrelevantes, bloques de texto largos y elementos repetidos. |

| *RNF-13* | *Ayuda contextual y documentación* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-3, OBJ-5, OBJ-6, OBJ-10, OBJ-13 |
| **Requisitos asociados** | RF-1, RF-6, RF-8, RF-11 |
| **Descripción** | El sistema ofrecerá ayudas breves y contextuales: iconos de información, aclaraciones en formularios, explicación de términos y acceso rápido a sección de ayuda. |
| **Comentarios** | La ayuda será breve, clara y aparecerá en el momento justo. No se requerirá abandonar la pantalla para comprender una funcionalidad. |

| *RNF-14* | *Prevención de errores* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-1, OBJ-2, OBJ-3, OBJ-10 |
| **Requisitos asociados** | RF-8, RF-9, RF-11, RF-12, RF-13 |
| **Descripción** | Se validará la introducción de datos antes del envío, se bloquearán acciones inválidas y se solicitará confirmación en operaciones críticas. |
| **Comentarios** | Los formularios tendrán validación en tiempo real; se deshabilitarán botones hasta completar los datos requeridos. Se mostrará un resumen antes de confirmaciones importantes (ej. recarga). |

| *RNF-15* | *Consistencia de formatos y estándares* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-5, OBJ-6, OBJ-7, OBJ-10, OBJ-14 |
| **Requisitos asociados** | RF-1, RF-4, RF-5, RF-6, RF-7, RF-9 |
| **Descripción** | Toda la interfaz seguirá formatos consistentes para fechas, horas, monedas, nombres de líneas y acciones. Se respetarán estándares de diseño móvil y web. |
| **Comentarios** | Se empleará un mismo formato de fecha (“dd/mm/aaaa”), de hora (24h), de moneda (€) y de nombres de líneas. Los iconos tendrán el mismo significado en toda la app. |

| *RNF-16* | *Mensajes de error claros y solucionables* |
| :---- | :---- |
| **Objetivos asociados** | OBJ-3, OBJ-4, OBJ-5, OBJ-8, OBJ-9, OBJ-10 |
| **Requisitos asociados** | RF-3, RF-7, RF-8, RF-11, RF-12 |
| **Descripción** | Los mensajes de error explicarán claramente qué ocurrió, por qué y qué debe hacer el usuario para solucionarlo. Se redactarán en lenguaje natural y sin tecnicismos. |
| **Comentarios** | Los mensajes serán visibles, breves y orientados a la solución: “Revisa tu conexión”, “Introduce un correo válido”, “Vuelve a intentarlo”. No se mostrarán códigos internos ni mensajes ambiguos. |

**4\. Anexos**

**4.1. Anexo A: Actas de Reuniones**

**Reunión 1: Arranque del proyecto**

Fecha: 26/09/2025  
Objetivo: Decidir los requisitos de la aplicación y cómo dividir el trabajo.  
Resumen: Se definieron los requisitos funciones y no funcionales iniciales y se acordó la división en Historias de Usuario.

**Reunión 2: Revisión de HU y planificación de redacción**

Fecha: 30/09/2025  
Objetivo: Revisar y aprobar las HU y organizar la redacción del ERS.  
Resumen: Una vez redactadas, las HU fueron revisadas y aprobadas. Se acordó la organización para redactar: Objetivos, Requisitos Funcionales, Requisitos de Información y Requisitos No Funcionales.

**Reunión 3: Cierre y correcciones finales**

Fecha: 05/10/2025  
Objetivo: Dejar el documento listo para entrega.  
Resumen: Se realizó la versión final del ERS: corrección de textos, unificación de formatos y cierre de OBJ, RF, RI y RNF.

**4.2. Anexo B: Documentación Relevante**

Ejemplo de ERS : Parking Inteligente (aportado por el profesor)

**4.3. Anexo C: Glosario de Acrónimos y Abreviaturas** 

- HU: Historia de Usuario.  
- RF: Requisito Funcional.  
- RNF: Requisito No Funcional.  
- RI: Requisito de Información.  
- PU: Perfil de Usuario.  
- ACT: Actores del sistema.

[image1]: <data:image/png;base64,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>