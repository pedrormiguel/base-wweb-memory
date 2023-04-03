'use strict';

const MENU = 
[
    '',
    ' 🙌 Hola bienvenido a tu Banco ProAmerica *Chat*',
    '',
    'Grupo Promerica es un conjunto de instituciones financieras enlazadas a través del holding PROMERICA FINANCIAL CORP (PFC)',
    '',
    '',
    '*🌎 0. Centro de Interacción con el Cliente (CIC)*', 
    '',
    '*📄 1. Consultar tipos de cuentas*',
    '',
    '*❌ 2. Cerrar sesión*',
    '',
]

const REDES = 
[
    '📄 Aquí puedes encontrar todas vias de comunicacion con nosotros: ',
    , '',
    '🌎 WEB       https://www.promerica.com.do/',
    '🌎 FACEBOOK  https://www.facebook.com/promericard',
    '🌎 TWITTER   https://www.twitter.com/promericard',
    '🌎 INSTAGRAM https://www.instagram.com/bancopromericard',
    '🌎 LINKEDIN  https://www.linkedin.com/company/bancopromericard',
    '🌎 WHATSAPP  https://api.whatsapp.com/send?phone=+1829-257-3400&text=Hola',
    , '',
    '🔙 *Pulsar [ 1 ] para ir atras o [ 2 ] para terminar...*'.toUpperCase(),
]

function validarRespuesta(texto) {

    let output = false;

    switch (texto) {

        case '1' :
        case '0' :
        case '-1':     
            break;
    
        default:
            output = true;
            break;
    }

    return output;
}

module.exports.MENU = MENU;
module.exports.REDES = REDES;
module.exports.validarRespuesta = validarRespuesta;