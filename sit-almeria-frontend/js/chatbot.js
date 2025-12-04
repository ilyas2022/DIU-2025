// Chatbot Interactivo SIT-Almería
// Sistema de asistencia virtual para resolver dudas de usuarios

// Estado del chatbot
let chatbotAbierto = false;

// Abrir/cerrar chatbot
function toggleChatbot() {
    const chatWindow = document.getElementById('chatbot-window');
    const chatIcon = document.getElementById('chat-icon');
    const closeIcon = document.getElementById('close-icon');

    chatbotAbierto = !chatbotAbierto;

    if (chatbotAbierto) {
        chatWindow.classList.add('active');
        chatIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        chatWindow.classList.remove('active');
        chatIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Enviar mensaje desde el input
function enviarMensajeChatbot() {
    const input = document.getElementById('chatbot-input');
    const mensaje = input.value.trim();

    if (mensaje === '') return;

    // Añadir mensaje del usuario
    agregarMensaje(mensaje, 'user');

    // Limpiar input
    input.value = '';

    // Mostrar indicador de escritura
    mostrarIndicadorEscritura();

    // Simular respuesta del bot después de un delay
    setTimeout(() => {
        const respuesta = generarRespuesta(mensaje);
        quitarIndicadorEscritura();
        agregarMensaje(respuesta, 'bot');
    }, 1000 + Math.random() * 1000); // Delay aleatorio entre 1-2 segundos
}

// Enviar mensaje rápido (desde botones)
function enviarMensajeRapido(mensaje) {
    agregarMensaje(mensaje, 'user');

    // Mostrar indicador de escritura
    mostrarIndicadorEscritura();

    // Simular respuesta del bot
    setTimeout(() => {
        const respuesta = generarRespuesta(mensaje);
        quitarIndicadorEscritura();
        agregarMensaje(respuesta, 'bot');
    }, 1000 + Math.random() * 1000);
}

// Añadir mensaje al chat
function agregarMensaje(texto, tipo) {
    const messagesContainer = document.getElementById('chatbot-messages');

    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${tipo}-message`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = texto;

    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);

    // Scroll hacia abajo
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Mostrar indicador de escritura
function mostrarIndicadorEscritura() {
    const messagesContainer = document.getElementById('chatbot-messages');

    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot-message';
    typingDiv.id = 'typing-indicator';

    typingDiv.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;

    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Quitar indicador de escritura
function quitarIndicadorEscritura() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Generar respuesta según el mensaje
function generarRespuesta(mensaje) {
    const mensajeLower = mensaje.toLowerCase();

    // Base de conocimiento del chatbot

    // Líneas y horarios
    if (mensajeLower.includes('línea') || mensajeLower.includes('linea') ||
        mensajeLower.includes('autobús') || mensajeLower.includes('autobus') ||
        mensajeLower.includes('horario')) {
        return `📍 <strong>Líneas disponibles:</strong><br><br>
        Actualmente contamos con 5 líneas principales:<br>
        • <strong>Línea 1</strong> - Centro → Plaza Nueva<br>
        • <strong>Línea 2</strong> - Centro → Universidad<br>
        • <strong>Línea 3</strong> - Centro → Hospital<br>
        • <strong>Línea 4</strong> - Centro → Estación Intermodal<br>
        • <strong>Línea 5</strong> - Centro → Playa<br><br>
        Puedes ver los horarios detallados en la sección <strong>"Líneas y Paradas"</strong> del menú.`;
    }

    // Bonos y tarifas
    if (mensajeLower.includes('bono') || mensajeLower.includes('tarifa') ||
        mensajeLower.includes('precio') || mensajeLower.includes('cuánto cuesta') ||
        mensajeLower.includes('cuanto cuesta')) {
        return `💳 <strong>Bonos disponibles:</strong><br><br>
        • <strong>Bono Joven</strong> (10 viajes) - 6,00 €<br>
        • <strong>Bono 30 Días</strong> (ilimitado) - 27,00 €<br>
        • <strong>Bono Ordinario</strong> (10 viajes) - 6,50 €<br>
        • <strong>Bono Familia</strong> (20 viajes) - 10,00 €<br><br>
        Visita la sección <strong>"Bonos"</strong> para más información sobre condiciones y vigencia.`;
    }

    // Recarga de tarjeta
    if (mensajeLower.includes('recarg') || mensajeLower.includes('saldo') ||
        mensajeLower.includes('añadir dinero') || mensajeLower.includes('anadir dinero')) {
        return `💰 <strong>Recargar tu tarjeta:</strong><br><br>
        1. Ve a la sección <strong>"Mi Perfil"</strong><br>
        2. Selecciona <strong>"Recarga"</strong><br>
        3. Introduce el importe (mínimo 5€, máximo 100€)<br>
        4. Elige tu método de pago (tarjeta bancaria, Bizum o PayPal)<br>
        5. Confirma la operación en la pasarela segura<br><br>
        Si aún no has vinculado tu tarjeta de transporte, el sistema te pedirá que lo hagas primero.`;
    }

    // Planificación de rutas
    if (mensajeLower.includes('ruta') || mensajeLower.includes('viaje') ||
        mensajeLower.includes('planific') || mensajeLower.includes('cómo llegar') ||
        mensajeLower.includes('como llegar')) {
        return `🗺️ <strong>Planificar tu viaje:</strong><br><br>
        1. Ve al <strong>"Planificador de Viajes"</strong> en el menú principal<br>
        2. Introduce tu <strong>punto de origen</strong><br>
        3. Introduce tu <strong>destino</strong><br>
        4. Pulsa <strong>"Buscar ruta"</strong><br><br>
        El sistema te mostrará las mejores opciones ordenadas por duración, con información sobre transbordos y horarios.`;
    }

    // Avisos e incidencias
    if (mensajeLower.includes('aviso') || mensajeLower.includes('incidencia') ||
        mensajeLower.includes('retraso') || mensajeLower.includes('problema')) {
        return `⚠️ <strong>Avisos e incidencias:</strong><br><br>
        Para consultar los avisos activos del servicio, visita la sección <strong>"Avisos"</strong> en el menú principal.<br><br>
        Ahí encontrarás información actualizada sobre:<br>
        • Cambios en horarios<br>
        • Desvíos temporales<br>
        • Interrupciones del servicio<br>
        • Obras en las vías<br><br>
        Los avisos están ordenados por fecha, mostrando primero los más recientes.`;
    }

    // Favoritos
    if (mensajeLower.includes('favorito') || mensajeLower.includes('guardar')) {
        return `⭐ <strong>Gestión de favoritos:</strong><br><br>
        Puedes guardar tus líneas y paradas favoritas para acceder rápidamente a ellas:<br><br>
        • En el detalle de una línea, pulsa <strong>"Guardar como favorito"</strong><br>
        • En una parada, pulsa el icono de estrella<br>
        • Consulta todos tus favoritos en <strong>"Mis Favoritos"</strong><br><br>
        Para eliminar un favorito, ve a "Mis Favoritos" y pulsa "Eliminar" en el elemento que desees quitar.`;
    }

    // Cuenta y perfil
    if (mensajeLower.includes('cuenta') || mensajeLower.includes('perfil') ||
        mensajeLower.includes('datos') || mensajeLower.includes('contraseña')) {
        return `👤 <strong>Tu cuenta y perfil:</strong><br><br>
        En la sección <strong>"Mi Perfil"</strong> puedes:<br>
        • Ver y editar tus datos personales<br>
        • Consultar el saldo de tu tarjeta<br>
        • Ver tu tarjeta de transporte asociada<br>
        • Recargar saldo<br>
        • Cerrar sesión<br><br>
        Para editar tu perfil, pulsa el botón <strong>"Editar perfil"</strong> y modifica los datos que necesites.`;
    }

    // Contacto
    if (mensajeLower.includes('contacto') || mensajeLower.includes('ayuda') ||
        mensajeLower.includes('soporte') || mensajeLower.includes('hablar')) {
        return `📧 <strong>Contacto y soporte:</strong><br><br>
        Si necesitas más ayuda personalizada, puedes contactarnos a través de:<br><br>
        • <strong>Formulario de contacto:</strong> Ve a "Mensajes" en el menú<br>
        • <strong>Teléfono:</strong> 950 12 34 56<br>
        • <strong>Email:</strong> info@sit-almeria.es<br>
        • <strong>Horario:</strong> Lunes a Viernes, 8:00 - 20:00h<br><br>
        Responderemos tu consulta lo antes posible.`;
    }

    // Tarjeta de transporte
    if (mensajeLower.includes('tarjeta') && !mensajeLower.includes('recarg') &&
        !mensajeLower.includes('bono')) {
        return `🎫 <strong>Tarjeta de transporte:</strong><br><br>
        Para vincular tu tarjeta física al sistema:<br><br>
        1. Ve a <strong>"Mi Perfil"</strong> → <strong>"Recarga"</strong><br>
        2. Si no tienes tarjeta vinculada, verás un formulario<br>
        3. Introduce el número de 10 dígitos (formato: TC12345678)<br>
        4. Confirma la vinculación<br><br>
        Una vez vinculada, podrás recargar saldo online y consultar tu saldo actual.`;
    }

    // Horarios generales
    if (mensajeLower.includes('hora') && !mensajeLower.includes('línea')) {
        return `🕐 <strong>Horarios del servicio:</strong><br><br>
        El servicio de transporte opera:<br>
        • <strong>Lunes a Viernes:</strong> 6:00 - 23:00h<br>
        • <strong>Sábados:</strong> 7:00 - 23:00h<br>
        • <strong>Domingos y festivos:</strong> 8:00 - 22:00h<br><br>
        La frecuencia varía según la línea. Consulta los horarios específicos de cada línea en <strong>"Líneas y Paradas"</strong>.`;
    }

    // Saludo
    if (mensajeLower.includes('hola') || mensajeLower.includes('buenos días') ||
        mensajeLower.includes('buenas tardes') || mensajeLower.includes('buenas noches')) {
        return `¡Hola! 👋 Soy tu asistente virtual de SIT-Almería.<br><br>
        Estoy aquí para ayudarte con cualquier duda sobre el transporte público.<br><br>
        ¿En qué puedo ayudarte hoy?`;
    }

    // Agradecimiento
    if (mensajeLower.includes('gracia') || mensajeLower.includes('gracias')) {
        return `¡De nada! 😊<br><br>
        Si tienes más preguntas, no dudes en escribirme.<br><br>
        ¡Que tengas un buen viaje!`;
    }

    // Mapa
    if (mensajeLower.includes('mapa') || mensajeLower.includes('ubicación') ||
        mensajeLower.includes('ubicacion') || mensajeLower.includes('dónde') ||
        mensajeLower.includes('donde')) {
        return `🗺️ <strong>Mapa de líneas:</strong><br><br>
        Puedes ver el mapa interactivo con todas las líneas en la sección <strong>"Mapa"</strong> del menú principal.<br><br>
        El mapa muestra:<br>
        • Trazado de todas las líneas<br>
        • Paradas principales<br>
        • Puntos de interés<br><br>
        Puedes hacer zoom y desplazarte para explorar el recorrido de cada línea.`;
    }

    // Respuesta por defecto
    return `Disculpa, no estoy seguro de cómo ayudarte con eso. 🤔<br><br>
    Puedo ayudarte con:<br>
    • Información sobre líneas y horarios<br>
    • Bonos y tarifas<br>
    • Recarga de tarjetas<br>
    • Planificación de rutas<br>
    • Avisos e incidencias<br>
    • Gestión de favoritos<br>
    • Información de tu cuenta<br><br>
    ¿Sobre qué tema necesitas ayuda?`;
}

// Hacer funciones globales
window.toggleChatbot = toggleChatbot;
window.enviarMensajeChatbot = enviarMensajeChatbot;
window.enviarMensajeRapido = enviarMensajeRapido;
