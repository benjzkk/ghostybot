(function () {
    "use strict";

    var STORAGE_KEY = "ghosty:lang";

    var TRANSLATIONS = {
        en: {
            "page.title.home": "Ghosty — Documentation",
            "page.title.privacy": "Privacy Policy | Ghosty",
            "page.title.terms": "Terms of Service | Ghosty",
            "page.title.welcome": "Welcome System | Ghosty",
            "page.title.variables": "Message Variables | Ghosty",
            "page.title.notfound": "404 | Ghosty",

            "common.back": "← Back",
            "common.home": "Home",
            "common.theme_aria": "Toggle theme",
            "common.lang_aria": "Change language",
            "common.footer_copy": "© 2026 Ghosty.",
            "common.footer_disclaimer": "Ghosty is not affiliated with, endorsed by, or sponsored by Discord Inc.",
            "common.copy_btn": "Copy",
            "common.copied_btn": "Copied",
            "common.reset_btn": "Reset",
            "common.search_placeholder": "Search variables...",
            "common.toc_title": "On this page",

            "home.subtitle": "A multifunctional Discord bot with notifications, useful commands and automations to improve your community.",
            "home.docs": "Documentation",
            "home.legal": "Legal Information",
            "home.links": "Links",
            "home.community": "Community",
            "home.welcome": "Welcome System",
            "home.privacy": "Privacy Policy",
            "home.terms": "Terms of Service",
            "home.support": "Support Server",
            "home.invite": "Invite Ghosty",

            "privacy.title": "Privacy Policy",
            "privacy.updated_label": "Last Updated:",
            "privacy.updated_value": "August 1, 2026",
            "privacy.intro": "This Privacy Policy explains how Ghosty (\"the Bot\", \"we\", \"us\", or \"our\") collects, uses, stores, and protects information required to provide its features on Discord.",
            "privacy.h2.1": "1. Information We Collect",
            "privacy.p.1.1": "Ghosty only collects information necessary for its proper operation.",
            "privacy.p.1.2": "This information may include:",
            "privacy.li.1.1": "Discord User IDs.",
            "privacy.li.1.2": "Discord Server IDs.",
            "privacy.li.1.3": "Discord Channel IDs.",
            "privacy.li.1.4": "Discord Role IDs.",
            "privacy.li.1.5": "Server configurations and settings.",
            "privacy.li.1.6": "Bot preferences configured by administrators.",
            "privacy.li.1.7": "Information required for notification systems.",
            "privacy.li.1.8": "Technical logs used for debugging and improving the service.",
            "privacy.h2.2": "2. Information We Do Not Collect",
            "privacy.p.2.1": "Ghosty does not intentionally collect:",
            "privacy.li.2.1": "Passwords.",
            "privacy.li.2.2": "Email addresses.",
            "privacy.li.2.3": "Payment information.",
            "privacy.li.2.4": "Sensitive personal information.",
            "privacy.li.2.5": "Private messages unless explicitly required by a feature.",
            "privacy.h2.3": "3. How We Use Information",
            "privacy.p.3.1": "Collected information is used exclusively to:",
            "privacy.li.3.1": "Provide Ghosty's features.",
            "privacy.li.3.2": "Save server configurations.",
            "privacy.li.3.3": "Manage notification systems.",
            "privacy.li.3.4": "Fix errors and improve performance.",
            "privacy.li.3.5": "Prevent abuse of the service.",
            "privacy.h2.4": "4. Data Sharing",
            "privacy.p.4.1": "Ghosty does not sell, rent, or share collected information with third parties.",
            "privacy.p.4.2": "Information may only be disclosed when required by law or requested by a competent authority.",
            "privacy.h2.5": "5. Data Retention",
            "privacy.p.5.1": "Information is stored only for as long as necessary to provide the service or until deletion is requested.",
            "privacy.h2.6": "6. Data Deletion",
            "privacy.p.6.1": "Server administrators may request deletion of their server's data by contacting the Ghosty support server.",
            "privacy.p.6.2": "Data will be removed within a reasonable period unless retention is required by law.",
            "privacy.h2.7": "7. Security",
            "privacy.p.7.1": "Reasonable security measures are used to protect stored information from unauthorized access, loss, or modification.",
            "privacy.p.7.2": "However, no system can guarantee complete security.",
            "privacy.h2.8": "8. Third-Party Services",
            "privacy.p.8.1": "Ghosty may integrate with external services to provide certain features, such as notification systems or other integrations.",
            "privacy.p.8.2": "The use of these services may also be subject to their own privacy policies.",
            "privacy.h2.9": "9. Changes to This Policy",
            "privacy.p.9.1": "This Privacy Policy may be updated at any time due to new features, legal requirements, or improvements to the service.",
            "privacy.p.9.2": "The \"Last Updated\" date will indicate the current version.",
            "privacy.h2.10": "10. Contact",
            "privacy.p.10.1": "If you have questions about this Privacy Policy or wish to request data deletion, you can contact the developer through the official Ghosty support server.",

            "terms.title": "Terms of Service",
            "terms.updated_label": "Last Updated:",
            "terms.updated_value": "August 1, 2026",
            "terms.intro": "These Terms of Service (\"Terms\") govern your use of Ghosty (\"the Bot\"). By inviting, using, or interacting with Ghosty, you agree to follow these Terms.",
            "terms.h2.1": "1. Acceptance of Terms",
            "terms.p.1.1": "By using Ghosty, you agree to these Terms of Service and the Privacy Policy. If you do not agree with any part of these Terms, you must stop using the Bot.",
            "terms.h2.2": "2. Use of the Bot",
            "terms.p.2.1": "Ghosty provides tools, automations, notifications, and other configurable features for Discord servers.",
            "terms.p.2.2": "When using Ghosty, you agree to:",
            "terms.li.2.1": "Follow Discord's Terms of Service and Community Guidelines.",
            "terms.li.2.2": "Follow applicable laws and regulations.",
            "terms.li.2.3": "Use the Bot responsibly.",
            "terms.h2.3": "3. Prohibited Uses",
            "terms.p.3.1": "You may not:",
            "terms.li.3.1": "Attempt to compromise the security of the Bot.",
            "terms.li.3.2": "Exploit bugs or vulnerabilities.",
            "terms.li.3.3": "Use Ghosty for spam or malicious activities.",
            "terms.li.3.4": "Interfere with the operation of the service.",
            "terms.li.3.5": "Attempt to access unauthorized information.",
            "terms.li.3.6": "Use the Bot for illegal activities.",
            "terms.p.3.2": "Violation of these rules may result in restriction or removal of access to Ghosty.",
            "terms.h2.4": "4. Service Availability",
            "terms.p.4.1": "Ghosty is provided \"as is\" and \"as available\".",
            "terms.p.4.2": "We do not guarantee that:",
            "terms.li.4.1": "The service will always be available.",
            "terms.li.4.2": "The Bot will operate without errors.",
            "terms.li.4.3": "All features will remain available permanently.",
            "terms.p.4.3": "Maintenance, updates, or temporary interruptions may occur without prior notice.",
            "terms.h2.5": "5. Changes to the Service",
            "terms.p.5.1": "Ghosty may add, modify, or remove features at any time to improve the service or adapt to technical and legal changes.",
            "terms.h2.6": "6. Suspension and Termination",
            "terms.p.6.1": "The developer may suspend or restrict access to Ghosty for users or servers that violate these Terms or negatively affect the service.",
            "terms.p.6.2": "Server administrators may stop using Ghosty at any time by removing the Bot from their server.",
            "terms.h2.7": "7. Limitation of Liability",
            "terms.p.7.1": "To the maximum extent permitted by law, the developer is not responsible for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use Ghosty.",
            "terms.p.7.2": "Users use the Bot at their own risk.",
            "terms.h2.8": "8. Intellectual Property",
            "terms.p.8.1": "Ghosty's name, logo, source code (when applicable), documentation, and related content belong to their respective owner unless stated otherwise.",
            "terms.p.8.2": "Unauthorized reproduction or distribution of protected content is prohibited.",
            "terms.h2.9": "9. Privacy",
            "terms.p.9.1_html": "Data processing is governed by the <a href=\"../privacy/\">Privacy Policy</a>, which is part of these Terms.",
            "terms.h2.10": "10. Changes to These Terms",
            "terms.p.10.1": "These Terms may be updated at any time to reflect legal, technical, or service changes.",
            "terms.p.10.2": "The \"Last Updated\" date will indicate the current version.",
            "terms.h2.11": "11. Contact",
            "terms.p.11.1": "If you have questions about these Terms of Service, you can contact the developer through the official Ghosty support server.",

            "welcome.title": "Welcome System",
            "welcome.intro": "Ghosty can greet new members with fully customizable welcome messages. This section covers everything you need to configure and personalize the welcome system.",
            "welcome.pages": "Pages",
            "welcome.variables_link": "Message Variables",
            "welcome.commands": "Commands",
            "welcome.cmd_view": "Shows the current configuration of the welcome system.",
            "welcome.cmd_message": "Sets the welcome message that new members will receive.",
            "welcome.cmd_channel": "Sets the channel where welcome messages will be sent.",
            "welcome.cmd_enable": "Enables the welcome system for new members.",
            "welcome.cmd_disable": "Disables the welcome system for new members.",

            "variables.title": "Message Variables",
            "variables.h2.how": "How to use variables",
            "variables.p.how.1": "Variables allow you to personalize welcome messages with information about the member and the server.",
            "variables.p.how.2_html": "Configure your message using <span class=\"discord-command\">/config welcome message</span> and include the variables you want to use.",
            "variables.h2.available": "Available Variables",
            "variables.var.user": "Mention of the new member.",
            "variables.var.username": "The member's Discord username.",
            "variables.var.displayName": "The member's display name.",
            "variables.var.userId": "The member's Discord user ID.",
            "variables.var.server": "The server's name.",
            "variables.var.serverId": "The server's ID.",
            "variables.var.memberCount": "The current number of server members.",
            "variables.var.memberNumber": "The member's assigned join number, if supported.",
            "variables.var.owner": "Mention of the server owner.",
            "variables.var.date": "The current date.",
            "variables.var.time": "The current time.",
            "variables.var.timestamp": "A Discord timestamp for displaying a date and time.",
            "variables.ex.user": "e.g.\nWelcome @NewMember to the server!",
            "variables.ex.username": "e.g.\nWelcome newmember!",
            "variables.ex.displayName": "e.g.\nWelcome New Member!",
            "variables.ex.userId": "e.g.\nUser ID: 123456789012345678",
            "variables.ex.server": "e.g.\nWelcome to My Awesome Server!",
            "variables.ex.serverId": "e.g.\nServer ID: 987654321098765432",
            "variables.ex.memberCount": "e.g.\nWe now have 1,247 members!",
            "variables.ex.memberNumber": "e.g.\nYou are member #1,247!",
            "variables.ex.owner": "e.g.\nContact @ServerOwner for help.",
            "variables.ex.date": "e.g.\nJoined on January 1, 2026",
            "variables.ex.time": "e.g.\nJoined at 12:00 PM",
            "variables.ex.timestamp": "e.g.\nJoined <t:1735689600:F>",
            "variables.empty": "No variables match your search.",
            "variables.notice.title": "Note",
            "variables.notice.text": "Variables must be written exactly as shown. Only variables implemented by Ghosty will be replaced with their corresponding values.",
            "variables.h2.preview": "Preview",
            "variables.label.preview": "Write your welcome message below:",
            "variables.hint_html": "The preview updates automatically as you type. Type <code>{</code> to see the list of available variables.",
            "variables.discord_timestamp": "Today at 12:00 PM",
            "variables.typing_placeholder": "SoyAjneb is listening...",

            "notfound.title": "Page Not Found",
            "notfound.meta": "The page you're looking for doesn't exist.",
            "notfound.code_title": "This ghost has vanished",
            "notfound.desc": "The page you tried to open may have been moved, renamed, or never existed in the first place.",
            "notfound.go_home": "Go Home",
            "notfound.privacy": "Privacy Policy",
            "notfound.terms": "Terms of Service"
        },

        es: {
            "page.title.home": "Ghosty — Documentación",
            "page.title.privacy": "Política de Privacidad | Ghosty",
            "page.title.terms": "Términos de Servicio | Ghosty",
            "page.title.welcome": "Sistema de bienvenida | Ghosty",
            "page.title.variables": "Variables de mensajes | Ghosty",
            "page.title.notfound": "404 | Ghosty",

            "common.back": "← Atrás",
            "common.home": "Inicio",
            "common.theme_aria": "Cambiar tema",
            "common.lang_aria": "Cambiar idioma",
            "common.footer_copy": "© 2026 Ghosty.",
            "common.footer_disclaimer": "Ghosty no está afiliado, respaldado ni patrocinado por Discord Inc.",
            "common.copy_btn": "Copiar",
            "common.copied_btn": "Copiado",
            "common.reset_btn": "Restablecer",
            "common.search_placeholder": "Buscar variables...",
            "common.toc_title": "En esta página",

            "home.subtitle": "Un bot de Discord multifuncional con notificaciones, comandos útiles y automatizaciones para mejorar tu comunidad.",
            "home.docs": "Documentación",
            "home.legal": "Información legal",
            "home.links": "Enlaces",
            "home.community": "Comunidad",
            "home.welcome": "Sistema de bienvenida",
            "home.privacy": "Política de privacidad",
            "home.terms": "Términos de servicio",
            "home.support": "Servidor de soporte",
            "home.invite": "Invitar a Ghosty",

            "privacy.title": "Política de Privacidad",
            "privacy.updated_label": "Última actualización:",
            "privacy.updated_value": "1 de agosto de 2026",
            "privacy.intro": "Esta Política de Privacidad explica cómo Ghosty (\"el Bot\", \"nosotros\" o \"nuestro\") recopila, usa, almacena y protege la información necesaria para ofrecer sus funciones en Discord.",
            "privacy.h2.1": "1. Información que recopilamos",
            "privacy.p.1.1": "Ghosty solo recopila la información necesaria para su correcto funcionamiento.",
            "privacy.p.1.2": "Esta información puede incluir:",
            "privacy.li.1.1": "IDs de usuario de Discord.",
            "privacy.li.1.2": "IDs de servidor de Discord.",
            "privacy.li.1.3": "IDs de canal de Discord.",
            "privacy.li.1.4": "IDs de rol de Discord.",
            "privacy.li.1.5": "Configuraciones y ajustes del servidor.",
            "privacy.li.1.6": "Preferencias del bot configuradas por los administradores.",
            "privacy.li.1.7": "Información necesaria para los sistemas de notificación.",
            "privacy.li.1.8": "Registros técnicos usados para depurar y mejorar el servicio.",
            "privacy.h2.2": "2. Información que no recopilamos",
            "privacy.p.2.1": "Ghosty no recopila intencionalmente:",
            "privacy.li.2.1": "Contraseñas.",
            "privacy.li.2.2": "Direcciones de correo electrónico.",
            "privacy.li.2.3": "Información de pago.",
            "privacy.li.2.4": "Información personal sensible.",
            "privacy.li.2.5": "Mensajes privados salvo que una función los requiera explícitamente.",
            "privacy.h2.3": "3. Cómo usamos la información",
            "privacy.p.3.1": "La información recopilada se usa exclusivamente para:",
            "privacy.li.3.1": "Proporcionar las funciones de Ghosty.",
            "privacy.li.3.2": "Guardar las configuraciones del servidor.",
            "privacy.li.3.3": "Gestionar los sistemas de notificación.",
            "privacy.li.3.4": "Corregir errores y mejorar el rendimiento.",
            "privacy.li.3.5": "Prevenir el abuso del servicio.",
            "privacy.h2.4": "4. Compartición de datos",
            "privacy.p.4.1": "Ghosty no vende, alquila ni comparte la información recopilada con terceros.",
            "privacy.p.4.2": "La información solo podrá revelarse cuando lo exija la ley o lo solicite una autoridad competente.",
            "privacy.h2.5": "5. Conservación de datos",
            "privacy.p.5.1": "La información se almacena solo durante el tiempo necesario para prestar el servicio o hasta que se solicite su eliminación.",
            "privacy.h2.6": "6. Eliminación de datos",
            "privacy.p.6.1": "Los administradores del servidor pueden solicitar la eliminación de los datos de su servidor contactando con el servidor de soporte de Ghosty.",
            "privacy.p.6.2": "Los datos se eliminarán en un plazo razonable salvo que la ley exija su conservación.",
            "privacy.h2.7": "7. Seguridad",
            "privacy.p.7.1": "Se utilizan medidas de seguridad razonables para proteger la información almacenada contra accesos no autorizados, pérdida o modificación.",
            "privacy.p.7.2": "Sin embargo, ningún sistema puede garantizar una seguridad completa.",
            "privacy.h2.8": "8. Servicios de terceros",
            "privacy.p.8.1": "Ghosty puede integrarse con servicios externos para ofrecer ciertas funciones, como sistemas de notificación u otras integraciones.",
            "privacy.p.8.2": "El uso de estos servicios también puede estar sujeto a sus propias políticas de privacidad.",
            "privacy.h2.9": "9. Cambios en esta Política",
            "privacy.p.9.1": "Esta Política de Privacidad puede actualizarse en cualquier momento debido a nuevas funciones, requisitos legales o mejoras del servicio.",
            "privacy.p.9.2": "La fecha de \"Última actualización\" indicará la versión actual.",
            "privacy.h2.10": "10. Contacto",
            "privacy.p.10.1": "Si tienes preguntas sobre esta Política de Privacidad o deseas solicitar la eliminación de datos, puedes contactar con el desarrollador a través del servidor oficial de soporte de Ghosty.",

            "terms.title": "Términos de Servicio",
            "terms.updated_label": "Última actualización:",
            "terms.updated_value": "1 de agosto de 2026",
            "terms.intro": "Estos Términos de Servicio (\"Términos\") rigen el uso de Ghosty (\"el Bot\"). Al invitar, usar o interactuar con Ghosty, aceptas cumplir estos Términos.",
            "terms.h2.1": "1. Aceptación de los Términos",
            "terms.p.1.1": "Al usar Ghosty, aceptas estos Términos de Servicio y la Política de Privacidad. Si no estás de acuerdo con alguna parte de estos Términos, debes dejar de usar el Bot.",
            "terms.h2.2": "2. Uso del Bot",
            "terms.p.2.1": "Ghosty proporciona herramientas, automatizaciones, notificaciones y otras funciones configurables para servidores de Discord.",
            "terms.p.2.2": "Al usar Ghosty, aceptas:",
            "terms.li.2.1": "Cumplir los Términos de Servicio y las Normas de la Comunidad de Discord.",
            "terms.li.2.2": "Cumplir las leyes y normativas aplicables.",
            "terms.li.2.3": "Usar el Bot de forma responsable.",
            "terms.h2.3": "3. Usos prohibidos",
            "terms.p.3.1": "No puedes:",
            "terms.li.3.1": "Intentar comprometer la seguridad del Bot.",
            "terms.li.3.2": "Explotar errores o vulnerabilidades.",
            "terms.li.3.3": "Usar Ghosty para spam o actividades maliciosas.",
            "terms.li.3.4": "Interferir en el funcionamiento del servicio.",
            "terms.li.3.5": "Intentar acceder a información no autorizada.",
            "terms.li.3.6": "Usar el Bot para actividades ilegales.",
            "terms.p.3.2": "El incumplimiento de estas reglas puede provocar la restricción o eliminación del acceso a Ghosty.",
            "terms.h2.4": "4. Disponibilidad del servicio",
            "terms.p.4.1": "Ghosty se proporciona \"tal cual\" y \"según disponibilidad\".",
            "terms.p.4.2": "No garantizamos que:",
            "terms.li.4.1": "El servicio esté siempre disponible.",
            "terms.li.4.2": "El Bot funcione sin errores.",
            "terms.li.4.3": "Todas las funciones permanezcan disponibles de forma permanente.",
            "terms.p.4.3": "Pueden producirse tareas de mantenimiento, actualizaciones o interrupciones temporales sin previo aviso.",
            "terms.h2.5": "5. Cambios en el servicio",
            "terms.p.5.1": "Ghosty puede añadir, modificar o eliminar funciones en cualquier momento para mejorar el servicio o adaptarse a cambios técnicos y legales.",
            "terms.h2.6": "6. Suspensión y terminación",
            "terms.p.6.1": "El desarrollador puede suspender o restringir el acceso a Ghosty a usuarios o servidores que incumplan estos Términos o afecten negativamente al servicio.",
            "terms.p.6.2": "Los administradores del servidor pueden dejar de usar Ghosty en cualquier momento retirando el Bot de su servidor.",
            "terms.h2.7": "7. Limitación de responsabilidad",
            "terms.p.7.1": "En la medida máxima permitida por la ley, el desarrollador no es responsable de ningún daño directo, indirecto, incidental o consecuente derivado del uso o la imposibilidad de uso de Ghosty.",
            "terms.p.7.2": "Los usuarios usan el Bot bajo su propio riesgo.",
            "terms.h2.8": "8. Propiedad intelectual",
            "terms.p.8.1": "El nombre, el logotipo, el código fuente (cuando corresponda), la documentación y el contenido relacionado de Ghosty pertenecen a su respectivo propietario salvo que se indique lo contrario.",
            "terms.p.8.2": "Queda prohibida la reproducción o distribución no autorizada del contenido protegido.",
            "terms.h2.9": "9. Privacidad",
            "terms.p.9.1_html": "El tratamiento de datos se rige por la <a href=\"../privacy/\">Política de Privacidad</a>, que forma parte de estos Términos.",
            "terms.h2.10": "10. Cambios en estos Términos",
            "terms.p.10.1": "Estos Términos pueden actualizarse en cualquier momento para reflejar cambios legales, técnicos o del servicio.",
            "terms.p.10.2": "La fecha de \"Última actualización\" indicará la versión actual.",
            "terms.h2.11": "11. Contacto",
            "terms.p.11.1": "Si tienes preguntas sobre estos Términos de Servicio, puedes contactar con el desarrollador a través del servidor oficial de soporte de Ghosty.",

            "welcome.title": "Sistema de bienvenida",
            "welcome.intro": "Ghosty puede recibir a los nuevos miembros con mensajes de bienvenida totalmente personalizables. Esta sección cubre todo lo necesario para configurar y personalizar el sistema de bienvenida.",
            "welcome.pages": "Páginas",
            "welcome.variables_link": "Variables de mensajes",
            "welcome.commands": "Comandos",
            "welcome.cmd_view": "Muestra la configuración actual del sistema de bienvenida.",
            "welcome.cmd_message": "Configura el mensaje de bienvenida que recibirán los nuevos miembros.",
            "welcome.cmd_channel": "Configura el canal donde se enviarán los mensajes de bienvenida.",
            "welcome.cmd_enable": "Activa el sistema de bienvenida para nuevos miembros.",
            "welcome.cmd_disable": "Desactiva el sistema de bienvenida para nuevos miembros.",

            "variables.title": "Variables de mensajes",
            "variables.h2.how": "Cómo usar las variables",
            "variables.p.how.1": "Las variables te permiten personalizar los mensajes de bienvenida con información sobre el miembro y el servidor.",
            "variables.p.how.2_html": "Configura tu mensaje usando <span class=\"discord-command\">/config welcome message</span> e incluye las variables que quieras usar.",
            "variables.h2.available": "Variables disponibles",
            "variables.var.user": "Mención del nuevo miembro.",
            "variables.var.username": "El nombre de usuario de Discord del miembro.",
            "variables.var.displayName": "El nombre para mostrar del miembro.",
            "variables.var.userId": "El ID de usuario de Discord del miembro.",
            "variables.var.server": "El nombre del servidor.",
            "variables.var.serverId": "El ID del servidor.",
            "variables.var.memberCount": "El número actual de miembros del servidor.",
            "variables.var.memberNumber": "El número de ingreso asignado al miembro, si está soportado.",
            "variables.var.owner": "Mención del propietario del servidor.",
            "variables.var.date": "La fecha actual.",
            "variables.var.time": "La hora actual.",
            "variables.var.timestamp": "Una marca de tiempo de Discord para mostrar fecha y hora.",
            "variables.ex.user": "ej.\n¡Bienvenido @NewMember al servidor!",
            "variables.ex.username": "ej.\n¡Bienvenido newmember!",
            "variables.ex.displayName": "ej.\n¡Bienvenido New Member!",
            "variables.ex.userId": "ej.\nID de usuario: 123456789012345678",
            "variables.ex.server": "ej.\n¡Bienvenido a My Awesome Server!",
            "variables.ex.serverId": "ej.\nID del servidor: 987654321098765432",
            "variables.ex.memberCount": "ej.\n¡Ya somos 1,247 miembros!",
            "variables.ex.memberNumber": "ej.\n¡Eres el miembro #1,247!",
            "variables.ex.owner": "ej.\nContacta con @ServerOwner si necesitas ayuda.",
            "variables.ex.date": "ej.\nSe unió el 1 de enero de 2026",
            "variables.ex.time": "ej.\nSe unió a las 12:00 PM",
            "variables.ex.timestamp": "ej.\nSe unió <t:1735689600:F>",
            "variables.empty": "Ninguna variable coincide con tu búsqueda.",
            "variables.notice.title": "Nota",
            "variables.notice.text": "Las variables deben escribirse exactamente como se muestra. Solo las variables implementadas por Ghosty serán reemplazadas por sus valores correspondientes.",
            "variables.h2.preview": "Vista previa",
            "variables.label.preview": "Escribe tu mensaje de bienvenida a continuación:",
            "variables.hint_html": "La vista previa se actualiza automáticamente mientras escribes. Escribe <code>{</code> para ver la lista de variables disponibles.",
            "variables.discord_timestamp": "Hoy a las 12:00 PM",
            "variables.typing_placeholder": "SoyAjneb está escuchando...",

            "notfound.title": "Página no encontrada",
            "notfound.meta": "La página que buscas no existe.",
            "notfound.code_title": "Este fantasma se ha desvanecido",
            "notfound.desc": "La página que intentaste abrir puede haber sido movida, renombrada o quizá nunca existió.",
            "notfound.go_home": "Ir al inicio",
            "notfound.privacy": "Política de privacidad",
            "notfound.terms": "Términos de servicio"
        }
    };

    var currentLang = "en";

    function getStored() {
        try {
            var v = localStorage.getItem(STORAGE_KEY);
            if (v === "en" || v === "es") return v;
        } catch (e) {}
        return null;
    }

    function detectLang() {
        var stored = getStored();
        if (stored) return stored;
        var nav = (navigator.language || "en").toLowerCase();
        if (nav.indexOf("es") === 0) return "es";
        return "en";
    }

    function t(key) {
        var dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
    }

    function applyAll() {
        var dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

        document.documentElement.setAttribute("lang", currentLang);
        document.documentElement.setAttribute("data-lang", currentLang);

        var titleKey = document.documentElement.getAttribute("data-i18n-title");
        if (titleKey && dict[titleKey] != null) {
            document.title = dict[titleKey];
        }

        var textNodes = document.querySelectorAll("[data-i18n]");
        for (var i = 0; i < textNodes.length; i++) {
            var el = textNodes[i];
            var key = el.getAttribute("data-i18n");
            if (dict[key] != null) el.textContent = dict[key];
        }

        var htmlNodes = document.querySelectorAll("[data-i18n-html]");
        for (var j = 0; j < htmlNodes.length; j++) {
            var el2 = htmlNodes[j];
            var key2 = el2.getAttribute("data-i18n-html");
            if (dict[key2] != null) el2.innerHTML = dict[key2];
        }

        var phNodes = document.querySelectorAll("[data-i18n-placeholder]");
        for (var k = 0; k < phNodes.length; k++) {
            var el3 = phNodes[k];
            var key3 = el3.getAttribute("data-i18n-placeholder");
            if (dict[key3] != null) el3.setAttribute("placeholder", dict[key3]);
        }

        var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
        for (var l = 0; l < ariaNodes.length; l++) {
            var el4 = ariaNodes[l];
            var key4 = el4.getAttribute("data-i18n-aria");
            if (dict[key4] != null) el4.setAttribute("aria-label", dict[key4]);
        }

        var langBtns = document.querySelectorAll(".lang-toggle");
        for (var m = 0; m < langBtns.length; m++) {
            langBtns[m].textContent = currentLang === "es" ? "ES" : "EN";
        }
    }

    function setLang(lang) {
        if (lang !== "en" && lang !== "es") lang = "en";
        currentLang = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
        applyAll();
        try {
            window.dispatchEvent(new CustomEvent("ghosty:langchange", { detail: { lang: lang } }));
        } catch (e) {}
    }

    function init() {
        currentLang = detectLang();
        applyAll();

        var btns = document.querySelectorAll(".lang-toggle");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                setLang(currentLang === "es" ? "en" : "es");
            });
        }
    }

    window.GhostyI18n = {
        getLang: function () { return currentLang; },
        setLang: setLang,
        t: t
    };

    init();
})();