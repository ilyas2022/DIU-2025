# SIT-Almería - Frontend Completo

Sistema Inteligente de Transporte Colectivo Urbano de viajeros de Almería

## Descripción

Prototipo frontend **COMPLETO** e **INTERACTIVO** de la aplicación web SIT-Almería, desarrollado siguiendo las especificaciones del proyecto oficial, la guía de estilo y los bocetos textuales proporcionados.

Este es un **mockup funcional** con información realista que simula todas las funcionalidades del sistema de transporte urbano de Almería.

## Estructura del proyecto

```
sit-almeria-frontend/
├── index.html          # Página principal con TODAS las páginas (SPA)
├── css/
│   └── styles.css      # Estilos completos basados en la Guía de Estilo oficial
├── js/
│   ├── data.js         # Datos realistas de líneas, bonos, avisos, etc.
│   ├── carousel.js     # Funcionalidad del carrusel automático
│   ├── navigation.js   # Sistema de navegación SPA
│   └── app.js          # Lógica principal de la aplicación
├── images/             # Carpeta para imágenes
└── README.md           # Este archivo
```

## Páginas implementadas

### ✅ TODAS LAS PÁGINAS DEL SISTEMA

#### 1. **Página de Inicio** (U-001)
- Cabecera con logo y título
- Barra de navegación completa (9 secciones + perfil)
- Carrusel automático con 3 slides
- Tarjetas de acceso rápido a funciones principales
- Footer informativo

#### 2. **Info ALSA** (U-090 / RF-1)
- Sección "Conócenos" con banner hero
- Historia de ALSA con layout de 2 columnas
- Servicios y Objetivos
- Información de contacto completa

#### 3. **Líneas y Paradas** (U-020, U-021, U-022 / RF-5)
- **Lista de líneas**: 8 líneas con información real
- **Buscador funcional** de líneas
- **Detalle de línea**: Información completa de horarios y frecuencias
- **Lista de paradas**: Paradas ordenadas con ETAs en tiempo real simulado
- Colores diferenciados por línea

#### 4. **Bonos y Tarifas** (U-040, U-041 / RF-6)
- 5 tipos de bonos diferentes
- Información completa: precio, número de viajes, condiciones, vigencia
- Bonos: Joven, Mensual, 10 Viajes, Senior +65, Familia Numerosa

#### 5. **Avisos y Noticias** (U-050 / RF-7)
- Lista de avisos e incidencias
- Diferenciación visual entre incidencias (rojo) y noticias (verde)
- Información de fecha, línea afectada y descripción
- Ordenados por fecha más reciente

#### 6. **Mapa de Líneas** (U-030 / RF-10)
- Vista de mapa placeholder
- Leyenda con colores de líneas
- Información de última actualización

#### 7. **Planificador de Viajes** (U-010, U-011 / RF-2)
- Formulario de origen y destino
- Búsqueda de rutas funcional
- Resultados con múltiples alternativas
- Información de duración, horarios y transbordos

#### 8. **Favoritos** (U-060, U-061, U-062 / RF-4)
- Lista de paradas y líneas favoritas
- Botón para eliminar favoritos
- Mensaje cuando no hay favoritos
- Acceso directo a explorar líneas

#### 9. **Perfil de Usuario** (U-080, U-081, U-082, U-083 / RF-9)
- Datos personales completos
- Información de tarjeta asociada
- Saldo disponible
- Bonos activos
- Botones: Editar perfil, Recargar tarjeta, Cerrar sesión

#### 10. **Recarga de Tarjeta** (U-070, U-071, U-072, U-073 / RF-8)
- Formulario de recarga
- Selección de importe (5€ - 100€)
- Métodos de pago: Tarjeta bancaria, Bizum, PayPal
- Validación de importes
- Simulación de pasarela de pago

#### 11. **Contacto / Mensajes** (U-100, U-101 / RF-11)
- Formulario de contacto
- Campo de asunto
- Área de texto para mensaje
- Envío con confirmación

## Datos realistas incluidos

### Líneas de autobús
- 8 líneas completas con nombres y destinos de Almería
- Horarios y frecuencias realistas
- Colores distintivos para cada línea

### Paradas
- Paradas reales de Almería: Universidad, Puerta de Purchena, El Zapillo, etc.
- ETAs (tiempo de llegada estimado) dinámicos

### Bonos
- 5 tipos de bonos con precios realistas
- Condiciones y vigencias específicas

### Avisos
- 4 avisos/noticias de ejemplo
- Mezcla de incidencias y noticias
- Fechas y descripciones realistas

### Usuario de ejemplo
- Nombre: María García López
- Email: maria.garcia@example.com
- Tarjeta: TC98765432
- Saldo: 15,75 €

## Características técnicas

### Diseño
- **Colores oficiales** según Guía de Estilo (C01-C10)
- **Tipografía oficial**: Inter, "Noto Sans", Roboto, "Segoe UI", Arial
- **Tamaños de fuente**: TF01-TF06 según especificación
- **100% responsive**: Desktop, tablet y móvil

### Funcionalidades interactivas

✅ **Carrusel automático** con rotación cada 5 segundos
✅ **Navegación SPA** (Single Page Application) sin recargas
✅ **Buscador de líneas** con filtrado en tiempo real
✅ **Planificador de rutas** con resultados múltiples
✅ **Gestión de favoritos** con añadir/eliminar
✅ **Simulación de recarga** con validación
✅ **Formulario de contacto** funcional
✅ **Visualización de paradas** con ETAs
✅ **Detalles de líneas** interactivos

### Navegación
- Sistema SPA sin recargas de página
- Transiciones suaves
- Scroll automático al cambiar de página
- Header y footer presentes en todas las páginas

## Cómo usar

### 1. Abrir el proyecto

**Opción A** - Doble clic:
```
Navega a la carpeta sit-almeria-frontend
Haz doble clic en index.html
```

**Opción B** - Desde navegador:
```
Abre tu navegador
Arrastra el archivo index.html a la ventana
```

### 2. Navegar por la aplicación

- Usa el **menú superior** para acceder a todas las secciones
- Haz clic en el **logo** para volver al inicio
- Usa las **tarjetas de acceso rápido** en la página de inicio
- **Haz clic en las líneas** para ver sus detalles
- **Busca líneas** usando el buscador
- **Planifica rutas** introduciendo origen y destino

### 3. Probar funcionalidades

**Búsqueda de líneas:**
1. Ve a "Líneas y Paradas"
2. Escribe en el buscador (ej: "Universidad")
3. Las líneas se filtran automáticamente

**Planificador de viajes:**
1. Ve a "Planificador de viajes"
2. Introduce origen (ej: "Puerta de Purchena")
3. Introduce destino (ej: "Universidad")
4. Haz clic en "Buscar Rutas"
5. Verás 3 alternativas con horarios y transbordos

**Recarga de tarjeta:**
1. Ve a "Recargas"
2. Introduce un importe (entre 5 y 100 €)
3. Selecciona método de pago
4. Haz clic en "Continuar al pago"
5. Verás una simulación de la pasarela

## Cumplimiento de requisitos

### Requisitos Funcionales implementados

- ✅ **RF-1**: Consultar información de ALSA
- ✅ **RF-2**: Planificador de viajes
- ✅ **RF-4**: Gestión de favoritos
- ✅ **RF-5**: Consulta de líneas y paradas
- ✅ **RF-6**: Información de bonos
- ✅ **RF-7**: Avisos y noticias
- ✅ **RF-8**: Recarga de tarjeta
- ✅ **RF-9**: Visualización y edición de perfil
- ✅ **RF-10**: Mapa de líneas
- ✅ **RF-11**: Contacto y mensajes
- ✅ **RF-12**: Inicio de sesión (simulado - usuario por defecto)

### Bocetos Textuales implementados

- ✅ U-001: Inicio (Cabecera)
- ✅ U-010: Planificador (formulario)
- ✅ U-011: Resultado de rutas
- ✅ U-020: Líneas (Lista)
- ✅ U-021: Línea (Detalle)
- ✅ U-022: Paradas (Lista)
- ✅ U-030: Mapa completo
- ✅ U-040: Bonos (Lista)
- ✅ U-050: Avisos y noticias (Lista)
- ✅ U-060: Lista de favoritos
- ✅ U-070: Recarga (Formulario)
- ✅ U-080: Perfil (vista)
- ✅ U-090: Info ALSA
- ✅ U-100: Contacto (Mensaje)

### Cumplimiento Guía de Estilo

- ✅ Colores oficiales (C01-C10)
- ✅ Tipografía oficial (F06)
- ✅ Tamaños de fuente (TF01-TF06)
- ✅ Estructura responsive
- ✅ Elementos fijos (cabecera, menú, footer)
- ✅ Reglas de posicionamiento
- ✅ Espaciado entre bloques (20px)
- ✅ Bordes y estilos según especificación

## Navegadores compatibles

- ✅ Google Chrome (recomendado)
- ✅ Microsoft Edge
- ✅ Mozilla Firefox
- ✅ Safari
- ✅ Opera

## Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox
- **JavaScript (Vanilla)**: Sin frameworks, código limpio
- **Templates HTML**: Reutilización de componentes
- **SPA**: Single Page Application sin librerías

## Características destacadas

### Rendimiento
- ⚡ Carga instantánea (sin dependencias externas)
- ⚡ Navegación sin recargas
- ⚡ Transiciones suaves

### Accesibilidad
- ♿ Navegación por teclado
- ♿ Contraste de colores adecuado
- ♿ Estructura semántica

### Responsive
- 📱 Móvil first
- 💻 Tablet optimizado
- 🖥️ Desktop completo

## Notas importantes

### Este es un prototipo frontend

- ✅ **Funcional e interactivo**
- ✅ **Datos realistas pero simulados**
- ✅ **No requiere backend ni base de datos**
- ✅ **Todas las operaciones son simuladas**
- ✅ **Pensado para demostración y testing de UI/UX**

### No incluye

- ❌ Backend real
- ❌ Base de datos
- ❌ Autenticación real
- ❌ Pasarela de pago real
- ❌ API de geolocalización
- ❌ Mapa interactivo real

## Próximas mejoras posibles

Si se quisiera convertir en una aplicación real:

1. **Backend**: Conectar con API REST
2. **Base de datos**: MySQL/PostgreSQL para datos reales
3. **Autenticación**: JWT o OAuth2
4. **Mapas**: Integración con Google Maps o Leaflet
5. **Tiempo real**: WebSockets para actualizaciones de ETAs
6. **Notificaciones Push**: Avisos en tiempo real
7. **PWA**: Progressive Web App para instalación
8. **Pasarela de pago**: Stripe, PayPal, Redsys

## Autores

- Paola García Cárdenas
- Alejandro Ortega Ramón
- Omar El Mascardi
- Pilar Puente Torres
- Ilyas El Hamdi

## Universidad

**Universidad de Almería**
Desarrollo de Interfaces de Usuario
Grado en Ingeniería Informática

## Versión

**Versión**: 2.0 (Completa e Interactiva)
**Fecha**: 29/11/2025

---

## Licencia

Proyecto académico - Universidad de Almería

## Contacto

Para más información sobre el proyecto SIT-Almería:
- **Email**: info@sit-almeria.es (simulado)
- **Teléfono**: 950 123 456 (simulado)
- **Redes**: @SITAlmeria (simulado)

---

**¡Disfruta explorando el prototipo! 🚌**
