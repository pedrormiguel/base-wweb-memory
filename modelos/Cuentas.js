'use strict';

const MENU_CONSULTA = [
    'Consulta de Saldo',
    '',
    '   📄 *1* Detalles de cuenta corriente',
    '',
    '   📄 *2* Detalles de cuenta de ahorros',
    '',
    '   📄 *3* Detalles de cuenta de basica ahorros nomina',
    '',
    '\n 🔙 *Pulsar [ 1 ] para ir atras o [ 2 ] para terminar...*'.toUpperCase()
]

const CUENTAS = {

    '1': {
        'titulo': 'CUENTA CORRIENTE PROMERICA',
        'desc': 'La Cuenta Corriente Promerica te permite realizar pagos a suplidores y relacionados mediante la emisión de cheques o transferencias.',
        'beneficios': [
            '🔥 Tarjeta de Débito para facilidad de retiros y pagos en establecimientos Comerciales.',
            '🔥 Acceso a todos los cajeros de la red ATH y UNARED (mayor alianza del Sistema Financiero con disponibilidad de más de 1,500 cajeros automáticos: Banco Promerica, BanReservas, BHD León, Banesco y Asociación Popular de Ahorros y Préstamos.',
            '🔥 Atractiva tasa de Interés.'],
        'requisitos': [
            '✔️ Cédula de identidad y electoral vigente.',
            '✔️ Evidencia de ingresos (Carta de trabajo o movimientos de cuentas bancarias).',
            '✔️ En caso de persona independiente, debe presentar documentos que comprueben a qué actividad se dedica y los ingresos que percibe por la misma.'
        ]
    },
    '2': {
        'titulo': 'CUENTAS DE AHORRO EN PESOS PROMERICA',
        'desc': 'La Cuenta de Ahorros Promerica te ofrece la cuenta de ahorro más competitiva del mercado, a través de la cual podrás asegurar tu futuro y el de los tuyos.',
        'beneficios': [
            '🔥 Tasas mayores con saldos mayores. Ver tarifario de productos y servicios vigente.',
            '🔥 Cálculo de interés sobre saldo promedio diario.',
            '🔥 Facilidad de retiro de fondos cuantas veces el cliente lo requiera.'],
        'requisitos': [
            '✔️ Disposición de saldo mediante retiros de efectivo.',
            '✔️ Capitalización mensual y pago de interés mensual.',
            '✔️ Facilidad de ahorro en diversas monedas extranjeras: Dólares o Euros.'
        ]
    },
    '3': {
        'titulo': 'CUENTA BÁSICA AHORROS NÓMINA',
        'desc': 'Una cuenta que te permitirá manejar tus ingresos de forma segura y ágil. Con ella, ratificamos nuestro compromiso con la inclusión financiera de todos, uniéndonos a la iniciativa de la Superintendencia de Bancos.',
        'beneficios': [
            '🔥 Asignación de Tarjeta de Débito',
            '🔥 Accesos a Promerica Online y Promerica Móvil RD',
            '🔥 Retiros y consultas gratuitos a través de cajeros UNARED.'],
        'requisitos': [
            '✔️ Fotocopia de Cédula de Identidad y Electoral, de ambos lados.',
            '✔️ Carta laboral',
            '✔️ Cargo único de RD$25.00 por Tarjeta de Débito.'
        ]
    }
}


function giveAnswer(index) {
    return `
    *${CUENTAS[index].titulo}*

    *DESCRIPCIÓN:*

\t${CUENTAS[index].desc}
    
    *BENEFICIOS:*

\t${CUENTAS[index].beneficios.map(beneficio => `${beneficio.padEnd(70)}`).join('\n\t')}
    
    *REQUISITOS:*

\t${CUENTAS[index].requisitos.map(requisito => `${requisito.padEnd(70)}`).join('\n\t')}

\n 🔙${' Pulsar [ 1 ] para ir atras o [ 2 ] para terminar...*'.toUpperCase()}`
} 

module.exports.CUENTAS = CUENTAS;
module.exports.giveAnswer = giveAnswer;
module.exports.MENU_CONSULTA = MENU_CONSULTA; 