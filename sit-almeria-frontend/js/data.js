// Datos falsos realistas para el prototipo SIT-Almería

const sitData = {
    // Líneas de autobús de Almería
    lineas: [
        {
            id: 1,
            nombre: "Línea 1",
            destino: "Universidad - El Zapillo",
            horario: "06:00 - 23:00",
            frecuencia: "15 min",
            color: "#FF6B6B"
        },
        {
            id: 2,
            nombre: "Línea 2",
            destino: "Nueva Andalucía - Pescadería",
            horario: "06:30 - 22:30",
            frecuencia: "20 min",
            color: "#4ECDC4"
        },
        {
            id: 3,
            nombre: "Línea 3",
            destino: "Los Molinos - Hospital Torrecárdenas",
            horario: "07:00 - 22:00",
            frecuencia: "30 min",
            color: "#45B7D1"
        },
        {
            id: 4,
            nombre: "Línea 4",
            destino: "Retamar - Centro",
            horario: "06:00 - 23:30",
            frecuencia: "12 min",
            color: "#FFA07A"
        },
        {
            id: 5,
            nombre: "Línea 5",
            destino: "El Alquián - Puerta de Purchena",
            horario: "06:30 - 22:00",
            frecuencia: "25 min",
            color: "#98D8C8"
        },
        {
            id: 6,
            nombre: "Línea 6",
            destino: "Cabo de Gata - Almería",
            horario: "07:00 - 21:00",
            frecuencia: "45 min",
            color: "#F7DC6F"
        },
        {
            id: 7,
            nombre: "Línea 7",
            destino: "Aguadulce - Hospital La Inmaculada",
            horario: "06:45 - 22:30",
            frecuencia: "20 min",
            color: "#BB8FCE"
        },
        {
            id: 11,
            nombre: "Línea 11",
            destino: "Ciudad Jardín - Estación Intermodal",
            horario: "06:00 - 23:00",
            frecuencia: "18 min",
            color: "#85C1E2"
        }
    ],

    // Paradas por línea
    paradas: {
        1: [
            { id: 101, nombre: "Universidad (Campus)", eta: 3 },
            { id: 102, nombre: "Rambla Belén", eta: 8 },
            { id: 103, nombre: "Puerta de Purchena", eta: 12 },
            { id: 104, nombre: "Plaza Circular", eta: 15 },
            { id: 105, nombre: "El Zapillo - Playa", eta: 20 }
        ],
        2: [
            { id: 201, nombre: "Nueva Andalucía", eta: 5 },
            { id: 202, nombre: "Avenida del Mediterráneo", eta: 10 },
            { id: 203, nombre: "Centro Comercial", eta: 15 },
            { id: 204, nombre: "Pescadería", eta: 22 }
        ],
        3: [
            { id: 301, nombre: "Los Molinos", eta: 7 },
            { id: 302, nombre: "Parque del Andarax", eta: 12 },
            { id: 303, nombre: "Rambla Obispo Orberá", eta: 18 },
            { id: 304, nombre: "Hospital Torrecárdenas", eta: 25 }
        ]
    },

    // Bonos disponibles
    bonos: [
        {
            id: "B001",
            nombre: "Bono Joven",
            precio: 20.00,
            viajes: 30,
            condiciones: "Válido para menores de 26 años",
            vigencia: "30 días desde primera validación",
            fechaInicio: "01/01/2025",
            fechaFin: "31/12/2025"
        },
        {
            id: "B002",
            nombre: "Bono Mensual",
            precio: 35.50,
            viajes: "Ilimitado",
            condiciones: "Válido durante 30 días naturales",
            vigencia: "30 días naturales",
            fechaInicio: "01/01/2025",
            fechaFin: "31/12/2025"
        },
        {
            id: "B003",
            nombre: "Bono 10 Viajes",
            precio: 8.50,
            viajes: 10,
            condiciones: "Sin límite de tiempo de uso",
            vigencia: "Sin caducidad",
            fechaInicio: "01/01/2025",
            fechaFin: "31/12/2025"
        },
        {
            id: "B004",
            nombre: "Bono Senior +65",
            precio: 15.00,
            viajes: 30,
            condiciones: "Válido para mayores de 65 años con DNI",
            vigencia: "30 días desde primera validación",
            fechaInicio: "01/01/2025",
            fechaFin: "31/12/2025"
        },
        {
            id: "B005",
            nombre: "Bono Familia Numerosa",
            precio: 25.00,
            viajes: 40,
            condiciones: "Requiere acreditación de familia numerosa",
            vigencia: "60 días desde primera validación",
            fechaInicio: "01/01/2025",
            fechaFin: "31/12/2025"
        }
    ],

    // Avisos y noticias
    avisos: [
        {
            id: "AV001",
            titulo: "Desvío temporal Línea 4",
            descripcion: "Por obras en Avenida del Mediterráneo, la Línea 4 tendrá un desvío temporal desde la parada de Retamar hasta el próximo lunes 15 de diciembre.",
            linea: "Línea 4",
            fecha: "27/11/2025 10:30",
            tipo: "incidencia"
        },
        {
            id: "AV002",
            titulo: "Nuevas frecuencias de verano",
            descripcion: "A partir del 1 de junio, todas las líneas aumentarán su frecuencia para adaptarse a la demanda estival. Consulta los nuevos horarios en nuestra web.",
            linea: "Todas las líneas",
            fecha: "25/11/2025 09:00",
            tipo: "noticia"
        },
        {
            id: "AV003",
            titulo: "Servicio especial Feria de Almería",
            descripcion: "Durante la Feria de Almería (del 15 al 26 de agosto) se habilitarán servicios especiales nocturnos en las líneas 1, 2 y 11.",
            linea: "Líneas 1, 2 y 11",
            fecha: "24/11/2025 12:15",
            tipo: "noticia"
        },
        {
            id: "AV004",
            titulo: "Retraso Línea 6 por accidente",
            descripcion: "La Línea 6 experimenta retrasos de aproximadamente 15 minutos debido a un accidente en la rotonda de Cabo de Gata. Se está trabajando para restablecer el servicio normal.",
            linea: "Línea 6",
            fecha: "29/11/2025 16:45",
            tipo: "incidencia"
        }
    ],

    // Usuario de ejemplo (para perfil)
    usuario: {
        id: "USR123456",
        nombre: "María García López",
        email: "maria.garcia@example.com",
        telefono: "650123456",
        saldo: 15.75,
        tarjetaId: "TC98765432",
        bonosActivos: ["Bono Mensual"],
        fechaRegistro: "15/03/2024 10:30:00",
        ultimaModificacion: "20/11/2025 14:25:00"
    },

    // Favoritos del usuario
    favoritos: [
        { id: "fav1", tipo: "PARADA", tipoElemento: "parada", idElemento: 1, nombreParada: "Universidad (Campus)", nombre: "Universidad (Campus) (Línea 1)" },
        { id: "fav2", tipo: "PARADA", tipoElemento: "parada", idElemento: 1, nombreParada: "Puerta de Purchena", nombre: "Puerta de Purchena (Línea 1)" },
        { id: "fav3", tipo: "LÍNEA", tipoElemento: "linea", idElemento: 1, nombre: "Línea 1 - Universidad - El Zapillo" }
    ],

    // Historial de recargas
    recargas: [
        {
            id: "REC001",
            importe: 35.50,
            metodo: "Tarjeta",
            fecha: "15/11/2025 10:30:00",
            estado: "Completada"
        },
        {
            id: "REC002",
            importe: 20.00,
            metodo: "Bizum",
            fecha: "01/11/2025 18:45:00",
            estado: "Completada"
        }
    ]
};

// Hacer datos disponibles globalmente
window.sitData = sitData;
