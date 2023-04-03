const { giveAnswer, MENU_CONSULTA } = require('./modelos/Cuentas')
const { MENU, REDES, validarRespuesta, } = require('./modelos/Menu')

const QRPortalWeb = require('@bot-whatsapp/portal')
const WebWhatsappProvider = require('@bot-whatsapp/provider/web-whatsapp')
const MockAdapter = require('@bot-whatsapp/database/mock')

const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')


/**
 * Aqui declaramos los flujos hijos, los flujos se declaran de atras para adelante, es decir que si tienes un flujo de este tipo:
 *
        1.  Consulta de Saldo
                Consultar saldo de cuenta corriente
                Consultar saldo de cuenta de ahorros
                Consultar saldo de tarjeta de crédito
        2.  Transferencias
                Transferencias Nacionales
                Realizar transferencia a cuenta propia
                Realizar transferencia a cuenta de terceros dentro del banco
                Realizar transferencia a cuenta de terceros fuera del banco
        3.  Transferencias Internacionales
                Realizar transferencia a cuenta propia
                Realizar transferencia a cuenta de terceros
        4.  Pago de Servicios
                Pago de Luz
                Pago de Agua
                Pago de Teléfono
                Pago de TV por Cable
        5.  Configuraciones de Cuenta
                Cambio de Contraseña
                Cambio de Correo Electrónico
                Cambio de Teléfono

 * Primero declaras los submenus 1.1 y 2.1, luego el 1 y 2 y al final el principal.
 */

const flowCerrarSession = addKeyword(['2', 'Cerrar', 'gracias', 'grac'])
    .addAnswer(['📄 Gracias por confiar en nosotros.'])

const flowCIC = addKeyword(['0', 'CIC', 'Centro'])
    .addAnswer(
        REDES,
        {capture:true}, 
        (ctx, {fallBack} )=> { 
            if (ctx.body === "b" )
                return flowBancoProamericaMain;
        },
        [flowCerrarSession]
    )

const flowCuentaCorriente = addKeyword(['1', 'Consulta de Saldo', 'Saldo'])
    .addAnswer(
        giveAnswer(1),
        null,
        null,
        [flowCerrarSession]
    )

const flowCuentaAhorros = addKeyword(['2', 'ahorros', 'Saldo'])
    .addAnswer(
        giveAnswer(2),
        null,
        null,
        [flowCerrarSession]
    )

const flowCuentaTarjetaCredito = addKeyword(['3', 'nomina', 'ahorros nomina'])
    .addAnswer(
        giveAnswer(3),
        null,
        null,
       [flowCerrarSession]
    )


const flowConsultaSaldo = addKeyword(['1', 'Consulta de Saldo', 'Saldo'])
    .addAnswer(
        MENU_CONSULTA,
        null,
        (ctx, {fallBack})=>{

            if (ctx.body === "b" )
                return fallBack();
        },
        [flowCuentaCorriente, flowCuentaAhorros, flowCuentaTarjetaCredito, flowCerrarSession]
    )


const flowBancoProamericaMain = addKeyword(['hola', 'Hola, asistente'])
    .addAnswer(
        MENU,
        { capture: true },
        (ctx, { fallBack }) => {

            if (validarRespuesta(ctx.body))
                return fallBack()
        },
        [flowConsultaSaldo, flowCIC, flowCerrarSession]
    )


const main = async () => {

    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowBancoProamericaMain])
    const adapterProvider = createProvider(WebWhatsappProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()


