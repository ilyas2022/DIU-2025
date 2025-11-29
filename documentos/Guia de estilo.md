  
**Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería**

**Bocetos textuales**

 Versión 1.0

Fecha 04/11/2025

**HOJA DE CONTROL**

| Organismo  | Universidad de Almería |  |  |
| :---- | ----- | :---- | :---: |
| **Proyecto**  | Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería |  |  |
| **Entregable**  | Guía de estilo |  |  |
| **Autor**  | Paola García Cárdenas, Alejandro Ortega Ramón, Omar El Mascardi, Pilar Puente Torres, Ilyas El Hamdi |  |  |
| **Versión/Edición** | 1.0 | **Fecha Versión Actual** | 04/11/2025 |
| **Aprobado por** | Alejandro Ortega Ramón y Ilyas El Hamdi | **Fecha última Aprobación** | 04/11/2025 |
|  |  | **Nº Total de Páginas** | 11 |

REGISTRO DE CAMBIOS

| Versión | Causa del cambio | Responsable del cambio | Fecha del cambio |
| :---: | :---: | :---: | :---: |
| 1.0 |  | Alejandro Ortega Ramón y Ilyas El Hamdi | 04/11/2025 |

CONTROL DE DISTRIBUCIÓN

| Nombre y Apellidos |
| :---- |
| Paola García Cárdenas |
| Alejandro Ortega Ramón |
| Omar El Masaudi |
| Pilar Puente Torres |
| Ilyas El Hamdi |

**ÍNDICE**

**[1\. Introducción](#1.-introducción)** [……………………………………………………………………………………………………..	4](#1.-introducción)

[**2\. Identificadores** …………………………………………………………………………………………………..	4](#2.-identificadores)

[**3\. Colores** …………………………………………………………………………………………………………...	4](#3.-colores)

[**4\. Tipografía** ………………………………………………………………………………………………………..	5](#4.-tipografía)

[Tipos de fuentes ………………………………………………………………………………………………...	5](#heading=)

[Tamaños de fuente ……………………………………………………………………………………………...	6](#heading=)

[**5\. Iconografıa** ………………………………………………………………………………………………………	6](#5.-iconografıa)

[**6\. Botones, menús y estructuras** …………………………………………………………………………………..	**7**](#6.-botones,-menús-y-estructuras)

[Botones …………………………………………………………………………………………………………	8](#heading=)

[Estilos de los botones …………………………………………………………………………………………...	8](#estilos-de-los-botones)

[Formularios ……………………………………………………………………………………………………..	8](#heading=)

[**7\. Tipos de interfaces (Móvil)** ……………………………………………………………………………………..	9](#7.-tipos-de-interfaces-\(móvil\))

[**8.Tipos de interfaces (PC)** ………………………………………………………………………………………..	10](#8.tipos-de-interfaces-\(pc\))

[**9.Reglas de posicionamiento** ……………………………………………………………………………………..	10](#9.reglas-de-posicionamiento)

[**10.Elementos fijos** ………………………………………………………………………………………………...	11](#10.elementos-fijos)

# 

# **1\. Introducción** {#1.-introducción}

La presente guía tiene como objetivo establecer los criterios, convenciones y buenas prácticas que deberán seguir los equipos de desarrollo, diseño y mantenimiento del sistema para asegurar la consistencia, legibilidad, escalabilidad y calidad técnica del código y de los componentes de la interfaz.

# **2\. Identificadores** {#2.-identificadores}

Los identificadores serán etiquetas que permitan identificar cada elemento de forma única. Para ello, se concatenan una letra que representa la categoría del código junto con un número que lo identifica dentro de la categoría. La siguiente tabla muestra el criterio seleccionado

| Tipo | Identificador | Ejemplo |
| :---: | :---: | :---: |
| Color | CXX | C01, C20 |
| Imagen | IMXX | IM001, IM20 |
| Icono | ICXX | IC001, IC20 |
| Fuente | FXX | F01, F20 |
| Tamaño de fuente | TFXX | TF01, TF20 |
| Plantillas | PXX | P01, P20 |

Tabla 1: Identificadores

# **3\. Colores** {#3.-colores}

En esta sección se presentan los principales colores que se usarán en el desarrollo de la interfaz. Debido al uso de la plataforma web, los colores se usarán en el formato hexadecimal, propio de lenguajes de marcado como HTML y de su extensión de formato CSS.

| Identificador | Color | Código hexadecimal | Función del color |
| :---: | :---: | :---: | :---: |
| C01 | ![][image1] | \#000000 | Color primario del texto |
| C02 | ![][image2] | \#FFFFFF | Fondo de formularios |
| C03 | ![][image3] | \#F2F2F2 | Fondo neutro de contenedores y tarjetas |
| C04 | ![][image4] | \#6CABEF | Color principal de cabeceras, botones y paneles |
| C05 | ![][image5] | \#60B3EB | Fondo secundario o menús |
| C06 | ![][image6] | \#EBED7E | Color de acento y botones de acción |
| C07 | ![][image7] | \#7EED9C | Confirmaciones o procesos exitosos |
| C08 | ![][image8] | \#E85858 | Errores, advertencias o cancelaciones |
| C09 | ![][image9] | \#F0F059 | Avisos informativos o estados de alerta |
| C10 | ![][image10] | \#4D4D4D | Texto sobre fondos claros o elementos deshabilitados |

Tabla 2: Colores

# **4\. Tipografía** {#4.-tipografía}

En esta sección se presentan las diferentes tipografías y sus variantes.

## **Tipos de fuentes**

Estas fuentes se han elegido porque son fáciles de leer en pantallas pequeñas y grandes. Inter y Roboto dan un aspecto moderno y limpio. Además, son comunes en Android, iPhone y web, por lo que garantizan que todo el sistema se vea igual en cualquier dispositivo.

| Identificador | Fuente (preferencia) | Uso recomendado |
| :---: | :---: | :---: |
| F01 | Inter | Fuente principal en toda la app (móvil y web) |
| F02 | Roboto | Alternativa principal si Inter no está disponible |
| F03 | Noto Sans | Alternativa con cobertura extensa de caracteres |
| F04 | Segoe UI | Windows / Edge (web escritorio) |
| F05 | Arial | Fallback universal (sistemas legacy) |

Tabla 3: Fuentes de texto

Estas familias sirven para que el sistema use siempre una fuente legible, incluso si alguna no está disponible. Así, la interfaz mantiene el mismo estilo sin importar el dispositivo o navegador que use el usuario

| Identificador | Familia CSS |
| :---: | :---: |
| F06 | Inter, “Notos Sans”, Roboto, “Segoe UI”, Arial, sans-serif |
| F07 | Roboto, “Noto Sans”, “Segoe UI”, Arial, sans-serif |
| F08 | “Noto Sans”, Roboto, “Segoe UI”, Arial, sans-serif |

Tabla 4: Fuentes en CSS

## **Tamaños de fuente**

    

Los tamaños se adaptan según la importancia del texto. Los títulos son más grandes para que destaquen, mientras que los textos normales mantienen una lectura cómoda. Se usan unidades flexibles para que todo se vea bien tanto en móviles como en ordenadores.

| Identificador | Tamaño | Peso | Uso |
| :---: | :---: | :---: | :---: |
| TF01 | 1.00 rem | 400 | Texto normal, como descripciones u horarios. |
| TF02 | 1.00 rem | 600 | Texto de botones o acciones importantes. |
| TF03 | 0.875 rem | 400 | Etiquetas o textos pequeños dentro de tarjetas. |
| TF04 | 1.125 rem | 600 | Subtítulos o apartados de secciones. |
| TF05 | 1.50 rem | 600 | Título principal en la pantalla móvil. |
| TF06 | 2.00 rem | 700 | Título destacado o encabezado en escritorio. |
| TF07 | 0.75 rem | 600 | Texto reducido en iconos o botones pequeños. |

Tabla 5: Tabla de tamaños de fuente.

Todos los textos tienen buen contraste con el fondo para que se lean sin esfuerzo. Se evita usar letras demasiado pequeñas o mayúsculas en exceso. Los botones y menús usan un tamaño mínimo de 14 px para que sean cómodos al tocar en pantalla.

# **5\. Iconografıa** {#5.-iconografıa}

Se presenta una lista de iconos, cada uno de ellos asociados a un concepto o funcionalidad de la aplicación. Los identificadores pueden presentar saltos entre ellos cuyo propósito es dejar un espacio de identificación en el caso de necesitar añadir nuevos iconos del módulo asociado.

Los iconos ayudan a que los usuarios reconozcan rápido cada función sin necesidad de leer texto. Se han elegido imágenes simples y universales, fáciles de entender por cualquier persona, incluso si no conoce bien la aplicación.

| Identificador | Icono | Funcionalidad |
| :---: | :---: | :---: |
| IC01 | ![][image11] | Líneas activas |
| IC02 | ![][image12] | Indica las paradas del autobús en el mapa |
| IC03 | ![][image13] | Acceso al mapa general de rutas y recorridos. |
| IC04 | ![][image14] | Muestra el tiempo estimado de llegada o salida. |
| IC05 | ![][image15] | Avisos de incidencias, retrasos o mantenimiento. |
| IC06 | ![][image16] | Paradas o líneas guardadas como favoritas. |
| IC07 | ![][image17] | Perfil del usuario o información personal. |
| IC08 | ![][image18] | Gestión de bonos, recargas y pagos. |
| IC09 | ![][image19] | Configuración de la app o ajustes del sistema. |

Tabla 6: Iconos

# **6\. Botones, menús y estructuras** {#6.-botones,-menús-y-estructuras}

Esta sección se dedica a establecer criterios para el estilo de los botones, menús y otras estructuras que pudieran considerarse. Las pautas de posicionamiento de estos elementos se indican en la [Sección](#9.reglas-de-posicionamiento) [9](#9.reglas-de-posicionamiento) *Reglas de posicionamiento*.

El diseño de los elementos pertinentes de esta sección se aclararán en los procesos de prototipado donde se estudiará la viabilidad e implementación gráfica de cada uno de ellos.

## **Botones**

Los botones permiten a los usuarios interactuar con la app de forma rápida y clara. Se usan colores distintos para cada tipo de acción: el azul guía las acciones más importantes, el verde confirma, el amarillo avisa y el rojo detiene o cancelar.

## **Estilos de los botones** {#estilos-de-los-botones}

Todos los botones tienen forma redondeada para dar una sensación moderna y amigable. Los colores cambian ligeramente al tocarlos para que el usuario sienta que su acción ha sido reconocida. Los botones deshabilitados se ven más claros para evitar confusión.

## **Formularios**

Se aplican las siguientes reglas de estilo para los formularios:

* El texto del interior del formulario al rellenarlo sera´ el texto estándar, tamaño TF01 de color C01.

  * El color de fondo de todos los formularios será C02.

  * Todos los formularios deberán tener un título o un texto que identifique el valor del campo. Se podrán usar las fuentes TF02, TF03 o TF04 según la situación.

  * Los formularios deberán presentar un borde. Los bordes sera´n de color C01 y debera´n presentar un grosor m´ınimo de 1px.

  * Todos los formularios que no estén rellenados deberán contener un texto informativo en su interior sobre que debe añadirse en el campo, de tamaño TF01 y color C13. La existencia de este texto es opcional, pero recomendable

**Menús**

Los menús facilitan la navegación entre las secciones principales de la aplicación (por ejemplo: “Inicio”, “Líneas”, “Planificar”, “Favoritos”, “Perfil”, “Ajustes”).

Deben ser claros, visibles y coherentes en todo el sistema (web y móvil).

* Color de fondo: C05 (azul claro)

  * Texto: C01 (negro) o C02 (blanco) según contraste

  * Iconos: ICXX correspondientes a cada función

  * Estado activo: subrayado o resaltado con color C06 (acento)

  * Espaciado entre ítems: mínimo de 12 px entre elementos

  * Tamaño de fuente: TF02 (1 rem, peso 600\)

**Estructuras**

Las estructuras se refieren a los contenedores, tarjetas y secciones de la interfaz.

Cada componente debe estar delimitado con sombras suaves o bordes finos (1px C03) para mantener la jerarquía visual.

* Contenedores principales: color de fondo C03

  * Tarjetas o bloques informativos: esquinas redondeadas (8px), sombra ligera (rgba(0,0,0,0.1))

  * Jerarquía:

    * Nivel 1: Pantalla principal (módulo)

    * Nivel 2: Secciones o pestañas dentro del módulo

    * Nivel 3: Elementos interactivos (botones, formularios, listas)

# **7\. Tipos de interfaces (Móvil)** {#7.-tipos-de-interfaces-(móvil)}

**Estructura general**

Cada pantalla móvil se compone de:

* Barra superior (header): muestra (TF5) y, si aplica, icono de navegación o búsqueda (IC03 o IC04).

  * Zona principal de contenido: donde se muestran listas, mapas o formularios.

  * Menú inferior (footer): navegación persistente con iconos IC01–IC09.

| Identificador | Nombre plantilla | Descripción  | Componentes principales |
| :---: | :---: | ----- | ----- |
| P01 | Inicio | Pantalla principal de la app. Muestra acceso rápido a planificación, líneas y avisos. | Header \+ tarjetas rápidas \+ footer |
| P02 | Planificación | Permite ingresar origen y destino, mostrando rutas y tiempo estimado. | Formulario \+ mapa \+ resultados |
| P03 | Favoritos | Lista de paradas o líneas guardadas por el usuario. | Lista \+ botones de eliminar o ver |
| P04 | Perfil | Datos del usuario, saldo y opciones de recarga. | Formulario \+ botones de acción |
| P05 | Avisos | Listado de incidencias o noticias. | Lista ordenada por fecha \+ filtro |

Tabla 7 : Plantillas (Móvil)

Todas las plantillas mantienen márgenes internos de 16 px, botones de acción flotante (FAB) con color C06 y textos alineados a la izquierda.

# **8.Tipos de interfaces (PC)** {#8.tipos-de-interfaces-(pc)}

**Estructura general**  
La versión de escritorio prioriza la gestión y administración del sistema (usuarios, bonos, avisos, etc.).

* Cabecera fija superior: con logotipo, buscador y menú de usuario.

  * Menú lateral izquierdo: navegación entre módulos (IC01–IC09).

  * Zona central: contenido dinámico (tablas, formularios o gráficos).

  * Pie de página: versión del sistema, fecha de actualización, aviso de derechos.

| Identificador | Nombre plantilla | Descripción  | Componentes principales |
| :---: | :---: | ----- | ----- |
| P06 | Dashboard | Muestra estadísticas, estado de líneas y recargas. | Tarjetas \+ gráficos \+ resumen diario |
| P07 | Gestión de usuarios | Permite editar, crear o eliminar perfiles. | Tabla \+ formulario modal |
| P08 | Administración de contenidos | Para gestionar avisos, noticias y bonos. | Tabla \+ botones de acción \+ confirmaciones |
| P09 | Configuración | Parámetros del sistema y ajustes generales. | Formulario \+ panel lateral |

Tabla 8: Plantillas (Escritorio)

Los márgenes exteriores deben ser de 24 px y las columnas se distribuyen con un mínimo de 60% contenido / 40% información complementaria.

# **9.Reglas de posicionamiento** {#9.reglas-de-posicionamiento}

Estas reglas aseguran uniformidad en todos los módulos:

1\.  Alineación:

* Texto y botones alineados a la izquierda.

  * Valores numéricos y tiempos, a la derecha.

2\. Espaciado:

* Margen entre bloques: 20 px

  * Espaciado entre texto y borde: 12 px

3\. Jerarquía visual:

* Títulos (TF05–TF06) siempre por encima del contenido.

  * Iconos antes del texto cuando indiquen acciones.

4\. Orden de lectura:

De arriba a abajo y de izquierda a derecha.

5\. Responsive:

* En pantallas \<768 px, el menú lateral se convierte en menú inferior.

  * Las tarjetas se apilan verticalmente.

# 

# **10.Elementos fijos** {#10.elementos-fijos}

Algunos elementos permanecen visibles o con comportamiento constante en toda la aplicación:

| Elemento | Descripción | Comportamiento |
| :---: | ----- | ----- |
| Barra superior | Muestra título del módulo actual y acceso a búsqueda o perfil | Fija al hacer scroll |
| Menú principal | Navegación principal del sistema | Persistente en móvil (footer) y lateral en PC |
| Botón flotante de acción (FAB) | Acción más frecuente del contexto (ej. “Añadir favorito” o “Nueva recarga”) | Color C06, sombra ligera, redondo |
| Mensajes de notificación | Aparecen en la parte inferior o superior según tipo de aviso | Desvanecen tras 3-5 s o con acción del usuario |
| Logotipo y versión | Presentes en la pantalla de inicio y en el pie de página web | Tamaño máximo 64 px alto |

Tabla 10: Tabla de elementos fijos  


[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAsCAYAAADM1FBZAAACQ0lEQVR4Xu2ZParCQBSFYyVWLsBCQfxBFEtRC0EEsXIJNoLuxMLCUrSxtLS0cCG6ARXUDSjCPI6Q8N69ZJKYSSbK++CAxHjuPUWukxlDfAEGvfCJ/IeICv8hooLSEPv9XkynU9HtdkWlUhGpVEokEomX8BnX8B3uwb2qUBJisViIbDYrDMPwJPxmuVxSO8/4CrHb7UQ+n2fNeVWxWBTb7Zbau+atEPf7XYzHY9aMX8Hz+XzSco54DnG73USj0WANqFKn03nV8IKnEHgYM5kMK6xaqOHlwXcd4vF4iGazyQoGpV6v96rpBtchRqMRKxS0UNMNrkJgctACYcnN1HIMgWlRKpWYeVjCH6QTjiFWqxUzDlvr9Zq29QfHELVajZmGLfQgQxridDqJWCzGTMMWejgej7Q9C2mI+XzODHUJvdghDTEYDJiZLsnGrTQEls3UTJf6/T5tz0IaolqtMjNdQi92SEMkk0lmpkvoxQ5piHg8zsx06e0Q6XSamelSoVCg7VlIQ0Thj85Uq9Wi7VlIQ2AiUDNdwri3QxpiMpkwM12azWa0PQtpiMPhEJllx/l8pu1ZSEOAKDwXvhaA4CuW4ngpwosJNQ5L5XKZtsRwDAE2mw0zD0tKXk9NhsMhKxC0ZCvX37gOEfaWTb1eV79lAy6Xi5K9VyflcjlxvV5peVs8hQDYYsRWIy2sSu12O9htTBNMrCA2lPHchbKh/BtMDmzL02a8CmMUxwTv4iuECQ5K3j1kwQGNX5SEMPno4y7dfEWIHzJEsaxWoja4AAAAAElFTkSuQmCC>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAyCAYAAAATIfj2AAAB1klEQVR4Xu2Z266CMBAA/f//1BjvNwQ12pMh2Zcm1W7ZWuxhEhJToHQQtrtl5ipj5jf8OpPQ2DETer1e7nq9usPh4NbrtVsul26xWPQbv2ljH8dwbC4GC3Vd53a7nZvP52673fYDpu3xeLjn89lv/KaNfRzDsZxDmzXJQrfbzW02m/7OpwyMcziXPujLiiSh8/nc3+m2bf1daugDqcvl4u9KQi203+/7d8Ea+mUbikroeDy60+nkN5tB31xjCNFC3L2cMgLXGPJPRQnxzuR4zEIglPpOfRQiAhEAvg2B4n6/+80f+ShExxbRTItEPy1vhWSuKMVqtVLPUW+Fcs3msUgWoiEoRL5FilIaxqDJ/YJCkneVRvLDWIJCkhmXRjL4WIJCqUmnNdrAFBSihiHtLw1jYCyxBIUozKhlSsMYGEss/0eoukeuuqBQXdiubmKtLvWB0skpJYRZcgraF9Ia8/IBqirwgDK4RHDIVoIDCxZDVmK0ZF0kEb61jMW6nGbe8YkWAoRySln0rxICqyVbH6slZrUQ8HxXs1gvyOcU5ooUMeY4zk2NZiGShQTEUj94aSfNGAYLCdV8khwbk9DYmYTGziQ0duoTaprGb/tpZqQgJSrSXPwB1QVa1VCSB3MAAAAASUVORK5CYII=>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAuCAYAAACI91EoAAACCklEQVR4Xu2Z267CIBBF/f//NF7rPcb6ICeLZF4mqGU6oOW4kp00tWVmU4GhnYUGmekTLfAzNRVcTD0ej3C9XsN+vw/r9TosFoswn8+jOObcbreL13BtaUaZut1uYbvdxuRXq1Xoui4mfzgcwvF4jOKYc/zGNVzLMfeWwmSq7/uw2WzCcrmMCZ9OpyxxD/fSBm15k22K3qfHLWa0aIO2aNOTLFMkwfjQyY2VjDkvBptibDB+dEJeom1ieDDIFL1Y0pCIGB5P7K2p8/kcB7ROoJSIRcwxvDTFzFRiDL0TMe/3u05nMC9N0Wses1yuiElsK09NsTiyluiAtURs6xr21JQMWh2slqQKsZA0RX1GOaMD1RY5WGrFpCkKz09MEFpUG+SSS9IU1TaPXgepLXIgl1ySpqRs0UFqS8qyXJKm2ANRsuggtUUOzIK5JE0xQKmcdZDaIgdyyeX/mOKRN/f3a3KioIe+ZUq37LGSpr5l8SUHt8W3yTIJ5HWXDlRL7gUtNLn1gE9uEtn6WHlpii31JyYMqvNi23ngJUhNY8Qq+uJFkHcGOgFvEcOy1dAMMgUsgiWN0bZloU0x2BTQiyWM8ZfzeEJClim4XC5utaHUdrTpSbYpYP1gyh37KYc2xsxyzzCZEsSc5aObdWEdwihTgv48ylOQz6Mcy5iZxOfRb+Vnair8TE2FJk39AVsrSvotw3duAAAAAElFTkSuQmCC>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAtCAYAAAA+7zKnAAACJ0lEQVR4Xu2ZS0sCURiG+8EtCtpFUdJlUUERLdoG0SKkRZQmZVcJuixaiBRYEITudNTyOp58BwbknPlmztzOUfCBF8LsOw9xbvPNFBtjpvgPxomJvC4iky/XTHb53mJ7d3W2dmGw+dMqm01WrOBnfIbf4Tv4bhSEln8ottnSucGmjyu+gr/Jfbb5cr4ILF8od9hyyr80n0TaYPlShy8vhW/5rtlnR6+/gkTYoKbZ7/PDueJLvtEy2Va2JgwcVXZv69YYskjLl40eWzwLP028gjEwlgxS8r3BVInzP84HuxLG9EJKPo457hWM6YWnfL7UFQqrCsZ2w1Ueq38lHf88p7I6ONjccJV//GoLBVXn5Zs+A1zlN67ULVIqcKAg5at/plBIV+DiBCl/X9Q/ZezAxQlS/uBJ/fZIhdo2SXkcFHwRXdnPNXg9C1J+PaN/sdqBixOk/NyJWERX4OIEKT+TFIvoim/5BQU3SNkkUs4nLSk/CgeUne3rOq9nQcpjhfNFdAXbthOkfKbQFIroSvajxetZkPLlWk8ooitG0+f1AIzCvA90MQNjfSXGwwgeCPiCqhLqYQS8/XSEoqoS6jHQ5vBZ/Q2TukkOIyWvuvWxOVikkbU+QK1lRtKb9ArGqEt2zaTlAVpxaMnxA0aVnZuY2n022IHiaEJhXcXaaB0GbWm0p3kJv8F2iHZ5EALL2+AFQdCXC3gxEYbQ8jZj+VpHJxN5XUzkdfEPR78XSJBAY/YAAAAASUVORK5CYII=>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAvCAYAAAC/vqlHAAACTUlEQVR4Xu2ay0vDQBDG+6d60IM3QXzg46KCInrw0JMg/g++ELVWqlYE8YE3RVRQ8dFaLTSpmq79hIDMIp3NbnZr2h98UNIkMx9NNpmZpkSLkaIbkk7bcNKJxfB9+UusXlbEzEFJjGSLomejILpWnn+Ez9iG77AP9rWJUcPbN57o2yqIjqVnJeGYbP1YGxgxfP5UFQMZdaNUg5miOHus0tMbRcvwZ1ATi6dlKXFd4ZxBrUbDGSGy4XI1EBO7r1KypjSdL/3EME0kw/flT9G7qX8JNxJiIJZJlA3jMo7zl6Wara/miGkKZcNx3LONhJimUDJ89vQhJWNLiG0CtmGsmkPbRSkRWxquv6yYgG04d+tLSdjWwZ1P01KGbXgsZ2+h+kvIQReW4VcvkIK7UtHTe/dmGc5ce1JgV0IuOrAMzx+/S4FdSfcRxTKMUo4GdqW5wzeanhIsw6M77h5HVMhFB5bh7rUXKbArIRcdWIY7V+TArmTFsI3KiCs0CXRgGW6Gl45Qk3slmh6bfD7PM4yVkQZ2JTwio8I2vHxRkQK70vpVhaanBMswug40sCuVPL22D8swaIb72FrxAFquPEQDAEU4TcKWrDcAwNFDVUrElqy3eEIWTuxXTroV0m+UDdtu047XFyqnbVrw5gdGZkmN1L9VEO+Gpw+RDAOMQTAOoUma0tR+E41aQrByx9GYxzrRdMO032DEiSqGJq4qPHoweo0TI4ZDMNSOOhDHMN0GRg2HtMxfHv4DbcNJp2046aR8X7/G/E+k0uk03ZZovgHlhO5v6KfUtgAAAABJRU5ErkJggg==>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAyCAYAAAAJHRh4AAADEElEQVR4Xu2aXW8SQRSG+dvceOG1vcPWaGj/gl/3ahNbbXuBsVrxwkIBZ87MsoulIUAi4zkHicmMZnf2YwTCk7wJWXbnvC+7MF/UzJZTsw9sG7uAm84uoC+LxcJMJhMTx30D0DVCdM1g0GPRazpG79E5dG7VlBZwOp2aKLpeBpFvjVRNA3rfKP3AqOj+Uviajklo8jl0Ll1D11ZF4YCz2dQodY13p2VAPTR6eM9LEq8R4gO3QW2VTYGAP02SXOGdeIfBHjvGfQXqCbZ1Zkajr9h2eY9u7oBxLPBRe+UYLSoJr7ntssgVMEkGaOSZY64sSXiOd3Jgl82Fd8A4BjTwwjFVtkC9xFraLu+NV8Dx+AeGO3bMVCWAU65ZhMwBZ7MZFvzsmKhaAFdmPp/bdjKTOaDW3/GxaToGqhaoQ66dl0wBqSMW8tIpHkpCfOInKA+ZAmr9jTtku3AogdrnEU8eUgPSeJGGVHbR0BoM+rnGrqkBaVAscbRiFwwtId+zF19SAyYJjVgOnYKhJdUhe/ElNSBAh2cAdsHQAn2A38WObS+V1IA0h6Npjl0wtJTeQy8VBKQfGJrL2QVDizyQF192AYW4WaNH9Ma2l0pqQKV6a/MjQ158SQ2YJBGvr9gFQ0vCEXoZ2vZSSQ247OjPnIKhJeVFNR391g/ViGjY5QGvXTSUpHpkhkP/7x+RKSBPl8RHp3AoCXFZ7XSJ0LrHS3t28arFk2yd7+4RmQPSsoGElmOgaknZCrNkQdyOscuAN46JqiTlMdcsgldAIo4lr1vaZsoWLU1SraJ4BySSpIef7lPHVFmiReXRqG+XzUWugAQtygKcOOaKSsIpfoDFF3xX5A5I3N3dYsgvy6W9v5j1EagjVJvbLJNCAQnqn7QW3FdJdeAYTxPgNbQsGEWi0K/lvygccAUHjTq/d3JPeB2HZwA4zfmzAbrHxyTeLSFOefgVDWlfMF8nnoXSAq5YbWEnSR+nN+4WNh3byC3sdWUXcNPZBdx0dgE3nVqj0aj0n0b/m1q73Tb1et2cn5/b720FvwBDPyJX1anZNQAAAABJRU5ErkJggg==>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAzCAYAAADsBOpPAAADDElEQVR4Xu2Z30/aUBTH/cv3sOftUVm2qW97movI3qcu083pxM3JMFOBAvdHaYtjMWAyzu73Jphye8EWaNWNb/JNSFO+5xNoe869XaAHpgXzwH3XHDhtzYHT1v8J3O/36erqiuo+o6pwqMocchp1bXzGsbrf1Ofg3Gk0FXC326WLFuAc+sC/0LLcoCV3jZ64r+hxa1Ubn3FsWWyocw71ufgOvjuJJgLu9hSorFGRndCifE2PvJeJvCjX6IiVdAaykigR8B/qUyk4p4/8iJ7L9QhIUr+QedrjX+m0XVHJ8S6VRMDMF/RO7EUKT+tN8Vlnx1Fs4EbAKS82I8Vm5Q2xRY02N8tGFAtY+JIKYjtSZNZ+K9+T67fM8kO6Ffiyc0nb4iASnpZ3RVHXHKWxwL1ej07Ez0ho2i6pmtfX1yaO1ljgpsvUszUfCUzbK7Kga9s0EhgP9mNejoRl5e/sVP/DpkYCn7u1iZrCrLykmgs6oikrMPo95gAzJGvXFYM5e1iBMaSgm5kBWfuT6oJgCcsKzAJBK2pYMQOyNm4+sIRlBa6ocRATlhmQtXPuG6rI4evYClxlNT0WmgFZ+6liqCiWsKzAuOEwy5oBWRsMYAnr3wCuqWXNfbkkwBKWFdiRjXtz04ElLCtwK/D0+swMyNqrokCeYgnLCoyHNZYuZkDW3ufH8RrHg2vNUNVr6AHEDMnKz6S6fr2miTUaGOPlN3Z34+Vx0vESctyGXoqbYWkbNzxq2zQWGMuUoihFAtN2kZ9MtkSCWh2PtsR+JDQtb/MDVdM3MW50KzDEfaH3DczwWRtbCdyXZvkhxQKGnIDROk9vIyWvfpB6277wDCs2MIRNjh1RjBSb1tiLcIPxGygDJQKGfv3u0A9xplcDZuGkXlUZZXmmM+MqMTCE5yNzuXpWlik3QXPJqaaAZTxr8ZFPg1GaCHgggFf0hnaddtihWgcW9ISFsXCwoY3POIZfc5cVdbu98BxrU4ijqYAHunllEDSpKi2vDCReGbC7f2VwF5oDp605cNqaA6etBwf8FwK1ZYDOvcAtAAAAAElFTkSuQmCC>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAoCAYAAACB4MgqAAACIklEQVR4XuWZzU7CQBSFfUwWunBpYgjgzwpIDAQW7E2ML2FiXImJGzesCM9gE7S2gFHElDp6SNrgvbSdqe0MjV9yEoN47rdoy3DdEQVlh75QFP6v+NKyxPv1tXA7HfFyciKeDw7EeG9vFfyM1/A7vAfvzYrU4vN+X9jlshiXSkrB38zv7midMsrii9FI2JUKE1KNXauJxXBI66WRFv/yPDG7vGQCfw06v3yfjktEStx/fRVOo8GGZhW33V7NUCFR3Ht8FM+Hh2xY1sEMzJIlVhyXh9NssiF5xe12VzNliBXP45pOCmbKECn++XPH01JdwewkNorjLrePjlihruBDK4mN4vP7e1amOx8PD1TrFxvFnXqdFekOHOJg4kvXZSWmApcomPj89pYVmApcomDi0/NzVmAqcY9GJo4jKC0wlUmvR/VCmPjL6SkrMBW4RMHEn/b3WYGpwCUKJj7e3WUFpqIkruMkKBu7WqV6IUx8Gz58gjhnZ1QvhInjTqYFpoJHcxRM/O3qihWYyvvNDdULYeKeZbECU1lOJlQvhImDbbjOlQ9ZoLDHWnyRwGGelumKfXxMlRgbxcFiMGCFupL6q1vA9OKCleaduBPhOrHiutcTWDplsp4A/myWya4wKZiBWbIkigOsx7Amo8OyitNqZb+CC8CTJo8FEe6j3Jae62A1jBUxFVANHnlYWadFWTwAy/nUi/1+n9Ypk1o8oHD/SjHNN7INGl1M+zcpAAAAAElFTkSuQmCC>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAqCAYAAAD1T9h6AAAC70lEQVR4Xu1Z227TQBTsb/LED9AP6OUBROhfIKj4AhB9oAWKxAMIAeXyRkqatLjZu11SRUkkspyzUQLa1fruTYIYaaTI2ZyZ2azt4/WGXnNs2AfWDbUFmE6nejgc6jjuasY6ut8/01F0boif8ZhSXTMGx9aFygFGo5EWom2MUvpMc97SUm6D2VsQ5qYhfsZjQrRgzKEZK2Xb/LYqSgcYj0cwq21NyFsws6WT5EYhCrENv30HgU9NrbIoEeAXGDiBmXwJJm47xopSiDsQ5FhfXX2B2sWXVuEASkUw848dI1VJ6RNTuygKBUiSc/jLHzjidZHzhxo1iiB3AKX6ILDviNZNzh+BFrXlvcgVYDBIYNkcOGJNkbEjo5kHmQHG4zEU/OSINE3GPuvJZGLbcZAZgPMIrhR3HYGmKcQ9o52F1AB4oyHkg1M8FAk5MSsgDakBhPgG3HIKh6KUO8ZDGrwBsF/BW75dNDSj6CK1d/IGwKaL0hdOwdCk9Nh48cEbII7x5G05BUOT8z3jxQdvAMa+mw7SLhiaUu4aLz54A2APj22wXTA0ldoELx3b3gLeAHgCYy9vFwxN9IBefPh3A/T73ZVZQoR0bXsLeAMw1luhk7hn21vAGyBJuHm+tQuGphB7Gr344A0wu5G9cgqGJqWvy93IZq3EhVMwNKPoR7lWAiFlZ6nngRC7oO8/gRGpAWbt9HuncCgS8rFaO43gvGe2PuziTRMfolA7C5kB8LGO0jeOQNPEDbNaHikRgwGDa/FTR6QpUnpgNPMgVwCEUpcQork9oTkZ24f24dKW9yJ3AEQc4y7zfUe0Ls4m6MyWTUWhAAilcDkdOuJViXtBcZxv2fyNwgEQ19c/QfCr2fqwjRQltgpYC2uWQakACLw+474NbrsIseMYyyI2abhtIkSU62rjQ+kAc2AQIU5N20HIkZlRNIdt8J8XHJvmGD7fEvLcjJUS3wuk36TyoHKAOfK8YsLvVu4V07LxP8CysfYBfgMmOYq1S9WkcQAAAABJRU5ErkJggg==>

[image10]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAACKUlEQVR4Xu2Zu6rCQBRF/UELsbAUFB/4qHyAItrYC4JfIYiVWthY2Qh+hK2KtirMZQe83HvOiZnEZMaACzaIjz2rcOLkmFAxJUGfiAtfcdN8xU0TivjhcFCz2Uz1+31Vq9VUNptV6XTaCR7jObyG9+C9YfCW+HK5VIVCQSWTSV/BZ1arFa3zRSDx/X6vSqUSE/KbcrmsdrsdrdfCl/jtdlOTyYQJvBt0Ph4PutxLtMWv16tqtVps0bDS6/WcNXTREseGyufzbLGwgzV0N6+n+P1+V+12my0SVQaDgbOmF57iUXynvYI1vXgpjh1PS03F62rjKo5dXqlUWKGp4EfrFa7i6/WalZnOZrOhWr+4ijcaDVZkOnBwQxQ/nU6sxFaOxyPVcxDFF4sFK7AVuEiI4qPRiBXYitulURTHEZQW2MpwOKR6DqJ4vV5nBbYCFwlRPJPJsAJbgYuEKJ5KpViBrfgSz+VyrMBWcLMhIYp/wo/PM51Oh+o5iOLYybTAVnBplhDFp9MpK7CV+XxO9RxEcdyF0AJbOZ/PVM9BFAef8D33fcgCsT3W4kYCh3laZirVapUq/cNVHGy3W1ZoKoFv3Z6Mx2NWGnXcToR/8RQ3PZ5oNpvhjCfA5XIJZVbolWKxqD3N0hIHKMSYjC4WVrrdrrY00BYHuNJEMSDCPops6PkX7Hic2qiA3+CSh5F1EAKJP8FwPuhgH38KvMNb4k9i91eKTb7ipomt+A8XmKcXzyvRaAAAAABJRU5ErkJggg==>

[image11]: <data:image/png;base64,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>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXCAYAAABxyNlsAAAD70lEQVR4Xu2dv65NQRSHF1oaDRU6CZ7CK1BLNKJCIxqJ1it4BQmNQqmQiEhIEIVGJxGFghAS/+7cm33Oud+smT2zz157z5wzX/IV9l6/WWsNzXXuRaTRaDSK59KO/wZ43YUbPryoMdxqvot/IRb+lC2Cy0/pxnJL/GXn8K5sGFywBKvngPhLleRBqZSX4i9Toq+lMrjAEI9KGkfEzw6xCjh0qh9deAQ+iX92qkXDYVM8v5scH3cue6VYJI/FHzTm572YOV/E7x3z0V6sLDhkzDngDDGLgsPFnBPOErMIOFTMEuBMMWflnPgDhSwJzhbydBeYAw4TMgZrxzQGa0POwivxB9GMwVoLY7BW88WiekI4hGYM1loag7Wak3JH/AE0Y6TWDSX1fM6seXtRPQFsrtlHTu0Qcs7n7JqTwcb06bI0iPXgOec/F38HOglsqqnB53316xI6n7/u4A6a5rChJtGex+rHIHS+9szBHTTNYUNKDov+LpYZg9D53TP398CEu1Bz2JCS1Y/QV4llxiB0fvfsF547uAs15Y34DSkJvQs9H4vQ+aHnDu5C3UdXZrAZfb8sXbD6PuX5WITODz13fBB/J2oGG1GNd6K/78utS+j87tlbPO/gTtQMNqIh3CJn8Cwltw6h889K+GId3ImawUY0B2YtzYFZagYb0RyYtTQHZqkZbERzYNbSHJilZrARzYFZS3NglprBRjQHZi3NgVlqBhvRHJgNneG+kmKNU/umZtaEzozBLDWDjeixZWkvzDq1r/cdrHNqhL5vLBX3gSSz1Aw20kyFuVCe74fUpsKcphlXxG9GU2HO0lSYo5eXpTawIU2FOUtTYY6aw4b0+LI0CnOWpnBS/Bw1hw01Uzgkfs5C1ycF5jTNeSh+U5rKKfGzY3pC0mGW3l+W2sLGmjXB2TUng401a4Kza07GTfGba9YAZ9a8saieCA6g+WBRHYc5qsEamoL7JjvmNCeHA4RMgZnUPGtTcx3MhJwFDhEyhYuyP/Ns/+sgrm41d2H/6yCcMeRscJCYJcHZYs4Kh4lZApwp5uxwoD7nhLP0WQQcqs+pfsCv45v4M/RZDNfEHy7FKWDPFK/uJguCA+ZoAXvkWCQcMtffsh5/xT8z12L5I/6w6/hVwp/Lndrxh/iZdVz3N9ccDlyTxVP6v2sT0s1dBRy8BquCw5dslXCJEq0aLlOS1fNE/KVKMOWnPKuAi5XgRsHl5nQj4ZJzuNFw2SndCrj0FG4VXN7SrYSXYOFWw8sY04b4lzKGjRV4OevYUOAlDbERgZeVYyMBXlqKjQx4eTEbA3D/GwkvctV7y9LGUHip7U/ryLSLbTQatfMfu+14jUxLzSgAAAAASUVORK5CYII=>

[image13]: <data:image/png;base64,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>

[image14]: <data:image/png;base64,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>

[image15]: <data:image/png;base64,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>

[image16]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAACqNJiGAAADyElEQVR4Xu2cy45NQRSGl2skSBCJhJhIxMDQgAQj3gBPwMzAhLmBgQGmeAQiERIvwMzEI4hE2hMwIC5drVf3rm9V7VN7n32pfXZ9yT/Ztdaqf/1p6fS5ECkUCtv8DaiQAEMrASbCsEIqBDgtNqiQzmhDYRuG5LQn8MypUOGJ2IA0JD5zerx5VhAbDn+6eMbz2bJfbDAMh2dOB72KmcJQGJzCmljdbLglNpBYKKxxuulVzAyGEQtOYe2i+pWGQSwKg7VOO7yKmcAQFgWnsCe1b2W4IDaA1BDY43TJq1hxuHxqcAp7m/ZPGi7edHn2Nu2fLFy67eKc0XbOZDgmduG2S3OG03GvYsXgsm2DUzhr2XlZw0WXXZazlp2XLVyyq0U5s6u52bBL7IJdLcmZTnu9iglxSuwyIXUJZ4d0bqt6ZJ6LNddUXcLZTfVSOubwur6LvagL9QHv6EI/5f+/pIVcF9vcl/qAd/SlawL+bB70JXNhz7j76KFLubw2eBU4bKovMp3fcM6n88sdmuqFBB7Wyf2iWGUeit25TubBxsOCgRmV8BrAjKLhlQB9mI2XER+WALdhJsFseBgsmhnMIppJ7IXKYPEMYAaqE9UiwuI5BsjdkzNwbyKzKbl5BeDOqp3VokWweQ4BctelduYQ1b5q0Qrg/mTjjksFp3CY6mi1aMIcErtbJ8EpHKo6Wy2aIO7D4dyp0+AUDlddqRZNiMtid+klOIWXqG5XiyZA7EOVvQWn8DLVo2pRxjwQ632Q4BReqnpXLcqQ12I9DxqcwstVn6pFGfFRrNdRglNoQuXe5M6J3WI9jhqcQjNZmAL0lpVHmnrqH4/OM7EesyFbYxWy9HhEMjUG6DGLPy9pairhZeGThrIwFYAes/BJQ1mYCkCPWfikoTX/OBu+ifU6OtkZqiErrx8kM0MLoNf3/vGw0MzUwhvVL42MaiYBeh3VL42MaiYBeh3VL42c949bc1X8uTf849Y4f/Q8Gn0Y4cy+54/CPenWCGfVaRk4665/PAw00XYpzmiiNnBG2zlLQQNNTfwS299Gv6UZ7HcaHBpINcGemKrwLKYU2JPa1yk08NY/NtwR2xNS7E30i2JrQ7q/WR/jjdieQQl9DC1G6vfUkr6mtM5Jsb0h1X2fjLWD/t8sP8QaCMGakL5uVTfjs9hZIYWCYY3bZzB4uZNyIHAWkntRoQtCL06E5HwpPHMaDF6sl/NZTH3AO2KK1Q5G2y/6DQHvTNHWF/GGggbqNAb0UKfBSfnpywF6ogb/qVNoJKfQCD3m7LVQqOEfm1qLXpTPSlgAAAAASUVORK5CYII=>

[image17]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACc0lEQVR4Xu2cS4pVMRRFjyCoTSkVse8EHIRtOzoLcTT2dCIq+OmLiNQAbIpDsKE39cpGrST6bnJzspN3FywoePue7JN6jfpRZjs7OzvV3Fn8vdIHF0+eOOcWX8xav9kJ8s7ii6j1k50IXHxrp4bLtnJKuGRrp4LLeTkFXMrboeEyvRwWLtLLIeESvR0OLtDboWB5FYeBxVUcBhZXcQhYWk15WFhNeVhYTXlYWE15WFhNeVhYTXlYWE15WFhNeVhYTXnuWVxaxbs2CCyu4jCwuIpDwfK9HQ4u0Nsh4RK9fGiDwkV6OTRcxtsp4FJeTgWXa+2UcMlWTg2X3dqT4I3Fi9f6wU6QrxZfxFq/2I6dWXwx//P+xZOT83fZEl4t/rw0fHzz6stzw3dL8PmVxE4WXhzdyXDb4sv6l9cOj23CLTvMfM8XLhniE8gLWmMpx8x5bcflusKCtX5ffGKHd3Xw8eLHRI6mYCaX60L4JQ3L9TQFM7lcF1istymYyeXcYSkFUzCTy7nCQt6+tePhs8HusJCXL2w9nBHsCst4WQrn1Myq5qXFZTys+aKbs4LdYBEva+Cs2nnF/LK4iIc5Ut9hbO2mcLiXKZhp6WZwsJcpmGnpD9sADvU0BTMtfWobwKGe5mCulZvAoZ4+szo4L+gKD+9hDZxVO281PLyXpXBOzawieHhPS+CM0jnF8PDePrJ18PmgKzxc2RTM5HLN4OHKpmAml2sGD1c2BTO5XDN4uLIpmMnlmsHDlU3BTC7XDB6u7HVLw5wrPFzdHOGnKrXfFhbBgupKwpLqSsKS6krCkurKcmPxs8WFVQ1/zB7+W/rOzmT8AVuPaqUi9MZNAAAAAElFTkSuQmCC>

[image18]: <data:image/png;base64,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>

[image19]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAADwElEQVR4XuXcsWpVQRDG8SOIVcDCwjKdnRA7O99CxEJiZ21hrU9g4VP4IHYi+AL2prCyDMT1JsjN/5uzO3vO7hzZs/Cz+O7dmTNDQkwkTldXV9P/IJ2/f7jx/lYk2AKX48U6W5BgC1yMF+tsQYJo6bzkYrxYawsSRONSKn1lvWgSRDOWUoX1okkQjQupxXrRJIiUzisupBZrRpOgxtpBuIyF7rNuSTrnR/c/8/UaEngZgxzwfTm8uxTr5vDujcd8n5cEHsYD0BfesRj3FmFdC+8YLnjHQ4ISo/Es3j2qccL3rsUeR73O+N6M6iVKkGM0dDm6/42vdfBi5fNWfTpLMMdoNDL3R6IEFqPBHrg+EiUgo/CeFP+KIwEZRXeF+yAJiAX3hvsgCYgFd+ac+yAJLEbhXeAeLBJY0vnE4qPjDuZIMIcNRsf550gwZ7r9E4yhcfYcCXLYaFBnnDtHghKj4VA4b4kEJem8ZtNRcFYPCTzYeBSc00OCEjYdzA/OWyJBidG0lw/JafI0+W683gXnLZEgh81aYz9LOg95ryX2K5Egh81aYR+PdJ6xTivslSMBpfOcDVpiv1qs19hd9iMJAh7qH/ZdIp17rNsLex/63zyEvLk3PsgaU8dP55yb3vpCBC5hLdYPJEF3HL6FqfNX5wwJuuPwrbBPEAl6e8TBWzF6RZCgKw7d0hT4HcsRCbri0C1N19/2Sc/OJOiKQ7c0XX/vLD07k6ArDt3SdP0DCOnZmQRdceiW2CuIBN1x8FbYJ4gE3XHwVtgniAQR3nH4tYweMbZqzgWsxfoRDn03fIhLLmEpo3ZXt3rzYfBgH3m5NfasxXodvGfPW/0Z5BjFm2AfL9ZphX1yJMhho8bcX1iMuy2dsF+OBCVGw+bY83/oPUeCEjYcDectkaAknQdsOgrO6iGBBxuPgnN6SFDCpqPhvCUS5KRzwYaj4cwlEuSw2ag4d44Ec9hkcK7fdz7shcEco8nQOP8cCSwsvhfcg0UCSueShfeCu7BIQCy6N9wHSUAsuDfcB0lALLg33AdJYGHRveAeLBLMYfHRcf45EuSwSYUnyW8j7+XUyNw4d44EJWxWYP73Icb7mmCfJb14v0QCDza18I6Fd5ZiXUrnDu9YeM9DAi82X/IQvLsU686ZMr95z/d6SVADD1H977wcYqE3rFvCGny9hgSR0vnJYWqxZjQJonEhtVgvmgTRuJBarBdNgmhcSKVfrBdNgmjpvDUW48JaW5BgC1yMF+tsQYItcDFerLMFCbbC5ZTw/lb+AGHhjDA0NpxDAAAAAElFTkSuQmCC>