import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  //Información del email
  await transport.sendMail({
    from: ' "Aloha Café - Registro" <info@alohacafe.ec> ',
    to: email,
    subject: "Aloha Café - Registro de cuenta",
    text: "¡Bienvenido Alohanatico!",
    html: `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <title></title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
    
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass {
          width: 100%;
        }
    
        .ExternalClass * {
          line-height: 100%;
        }
    
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
      </style>
      <style type="text/css">
        @media only screen and (max-width:480px) {
          @-ms-viewport {
            width: 320px;
          }
          @viewport {
            width: 320px;
          }
        }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      </style>
      <!--<![endif]-->
      <style type="text/css">
        @media only screen and (max-width:595px) {
          .container {
            width: 100% !important;
          }
          .button {
            display: block !important;
            width: auto !important;
          }
        }
        .container_redes_sociales{
            display: flex;
            justify-content: center !important;
            align-items: center !important;
            justify-items: center;
            margin-bottom: 2%;
        }
        .container_redes_sociales a{
            margin: 0 1%;
        }
      </style>
    </head>
    
    <body style="font-family: 'Inter', sans-serif; background: #E5E5E5;">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
        <tbody>
          <tr>
            <td valign="top" align="center">
              <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td style="padding:48px 0 30px 0; text-align: center; font-size: 14px;">
                    <img style="width: 20%;" 
                    src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682133052/Logo-Aloha-Vector-2_xxz8gj.png" 
                    alt="Logo Aloha">
                    </td>
                  </tr>
                  <tr>
                    <td class="main-content" style="padding: 48px 30px 40px; color: #000000;" bgcolor="#ffffff">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="padding: 0 0 24px 0; font-size: 18px; line-height: 150%; font-weight: bold; color: #000000; letter-spacing: 0.01em; text-align:center">
                              Bienvenido, ${nombre}!
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 10px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Gracias por ser parte de esta <span style="color: #E13028; font-weight: 700;">comunidad exclusiva</span> de <span style="color: #E13028; font-weight: 700;">Alohanáticos</span> 🤩! Tenemos promociones, descuentos y productos, solo para esta comunidad.
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Confirma tu cuenta para darte los beneficios:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 24px 0;">
                              <a class="button" href="https://alohacafe.ec/confirmar-cuenta/${token}" title="Reset Password" style="width: 100%; background: #E13028; text-decoration: none; display: inline-block; padding: 10px 0; color: #fff; font-size: 14px; line-height: 21px; text-align: center; font-weight: bold; border-radius: 7px; box-shadow: 0px 5px 6px -5px #e13128;">Confirmar Cuenta</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Si necesitas algo de ayuda, puedes empezar por aquí
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 8px;">
                              <a style="display: flex; justify-content: space-between; align-items: center; padding: 28px 24px; border-radius: 4px; background-color: #FFF9F9; text-decoration: none;" href="https://alohacafe.ec/perfil/mis-puntos">
                                <span style="width: 90%; font-size: 14px; line-height: 150%; font-weight: bold; color: #29426E; letter-spacing: 0.01em;">Mis AlohaPuntos</span>
                                <span style="width: 10%; float: right;">
                                  <strong>→</strong>
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 8px;">
                              <a style="display: flex; justify-content: space-between; align-items: center; padding: 28px 24px; border-radius: 4px; background-color: #FFF9F9; text-decoration: none;" href="https://alohacafe.ec/perfil/mis-pedidos">
                                <span style="width: 90%; font-size: 14px; line-height: 150%; font-weight: bold; color: #29426E; letter-spacing: 0.01em;">Mis pedidos</span>
                                <span style="width: 10%; float: right;">
                                  <strong>→</strong>
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 8px;">
                              <a style="display: flex; justify-content: space-between; align-items: center; padding: 28px 24px; border-radius: 4px; background-color: #FFF9F9; text-decoration: none;" href="https://alohacafe.ec/perfil">
                                <span style="width: 90%; font-size: 14px; line-height: 150%; font-weight: bold; color: #29426E; letter-spacing: 0.01em;">Mis datos</span>
                                <span style="width: 10%; float: right;">
                                  <strong>→</strong>
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 8px;">
                              <a style="display: flex; justify-content: space-between; align-items: center; padding: 28px 24px; border-radius: 4px; background-color: #FFF9F9; text-decoration: none;" href="https://alohacafe.ec/trabaja-con-nosotros">
                                <span style="width: 90%; font-size: 14px; line-height: 150%; font-weight: bold; color: #29426E; letter-spacing: 0.01em;">Trabaja Con Nosotros</span>
                                <span style="width: 10%; float: right;">
                                  <strong>→</strong>
                                </span>
                              </a>
                            </td>
                          <tr>
    
                            <tr>
                                <td>
                                <div class="container_redes_sociales">
                                <a href="https://www.instagram.com/alohacafeec/" alt="Icono de Instagram">
                                  <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134233/mdi_instagram_tyrryn.png">
                                  </img>        
                                </a>

                                <a href="https://www.facebook.com/AlohaCafeEc" alt="Icono de Facebook">
                                  <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134229/fa_facebook-official_kifgeo.png">
                                  </img> 
                                </a>

                                <a href="https://www.tiktok.com/@alohacafeec" alt="Icono de Tiktok">
                                  <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134227/ic_baseline-tiktok_o8olnu.png">
                                  </img>
                                </a>
                              </div>
                                </td>
                            </tr>
    
                          <tr>
                            <td style="padding: 0 0 16px;">
                              <span style="display: block; width: 117px; border-bottom: 1px solid #8B949F;"></span>
                            </td>
                          </tr>
                          <tr>
                            <td style="font-size: 14px; line-height: 170%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Estas recibiendo este correo porque eres un miembro valioso de la comunidad de Alohanáticos. <br><strong>[Aloha Café]</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 0 48px; font-size: 0px;">
    
                      <div class="outlook-group-fix" style="padding: 0 0 20px 0; vertical-align: top; display: inline-block; text-align: center; width:100%;">
                        <span style="padding: 0; font-size: 11px; line-height: 15px; font-weight: normal; color: #8B949F;">Aloha Café<br/>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html> 
        `
  })
};

export const emailPedidoEnviado = async (datos) => {
  const { email, nombre, idPedido, productos, total } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const listaProductos = productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('');

  //Información del email
  await transport.sendMail({
    from: ' "Aloha Café - Pedidos En Curso" <ventas@alohacafe.ec> ',
    to: email,
    subject: `Aloha Café - Tu pedido está en curso`,
    html: `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <title></title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
    
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass {
          width: 100%;
        }
    
        .ExternalClass * {
          line-height: 100%;
        }
    
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
          @-ms-viewport {
            width: 320px;
          }
          @viewport {
            width: 320px;
          }
        }
      </style>
    
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      </style>
      <style type="text/css">
        @media only screen and (max-width:595px) {
          .container {
            width: 100% !important;
          }
          .button {
            display: block !important;
            width: auto !important;
          }
        }
        .container_redes_sociales{
            display: flex;
            justify-content: center !important;
            align-items: center !important;
            justify-items: center;
            margin-bottom: 2%;
        }
        .container_redes_sociales a{
            margin: 0 1%;
        }
        p.total_bajar{
          margin-top: 2rem;
      }
      </style>
    </head>
    
    <body style="font-family: 'Inter', sans-serif; background: #E5E5E5;">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
        <tbody>
          <tr>
            <td valign="top" align="center">
              <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td style="padding:48px 0 30px 0; text-align: center; font-size: 14px;">
                    <img style="width: 20%;" 
                    src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682133052/Logo-Aloha-Vector-2_xxz8gj.png" 
                    alt="Logo Aloha">
                    </td>
                  </tr>
                  <tr>
                    <td class="main-content" style="padding: 48px 30px 40px; color: #000000;" bgcolor="#ffffff">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="padding: 0 0 24px 0; font-size: 18px; line-height: 150%; font-weight: bold; color: #000000; letter-spacing: 0.01em; text-align:center">
                                ${nombre} hemos recibido tu pedido!
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 10px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Gracias por pedir en Aloha Café, <i>los mejores bolones de Guayaquil</i>, este es el identificador del pedido <span style="color: #E13028; font-weight: 700;">#${idPedido.slice(-4)}</span> del pedido, te mantendremos informado por este medio sobre tu pedido. 
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Ver como va mi pedido:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 24px 0;">
                              <a class="button" href="https://alohacafe.ec/pedido?clientTransactionId=${idPedido}"  title="Reset Password" style="width: 100%; background: #E13028; text-decoration: none; display: inline-block; padding: 10px 0; color: #fff; font-size: 14px; line-height: 21px; text-align: center; font-weight: bold; border-radius: 7px; box-shadow: 0px 5px 6px -5px #e13128;">Ver Pedido</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Información adicional:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 8px;">
                              <div style="display: flex; justify-content: space-between; align-items: center; padding: 28px 24px; border-radius: 4px; background-color: #FFF9F9; text-decoration: none;">
                                <span style="width: 90%; font-size: 14px; line-height: 150%; font-weight: bold; color: #29426E; letter-spacing: 0.01em;">
                                    Descripción del pedido:
                                    <div>
                                        ${listaProductos}
                                    </div>
                                    <p class="total_bajar">Total: $${ total }</p>
                                </span>
                              </div>
                            </td>
                          </tr>
    
                            <tr>
                                <td>
                                <div class="container_redes_sociales">
                                <a href="https://www.instagram.com/alohacafeec/" alt="Icono de Instagram">
                                  <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134233/mdi_instagram_tyrryn.png">
                                  </img>        
                                </a>

                                <a href="https://www.facebook.com/AlohaCafeEc" alt="Icono de Facebook">
                                  <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134229/fa_facebook-official_kifgeo.png">
                                  </img> 
                                </a>

                                <a href="https://www.tiktok.com/@alohacafeec" alt="Icono de Tiktok">
                                  <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134227/ic_baseline-tiktok_o8olnu.png">
                                  </img>
                                </a>
                              </div>
                                </td>
                            </tr>
    
                          <tr>
                            <td style="padding: 0 0 16px;">
                              <span style="display: block; width: 117px; border-bottom: 1px solid #8B949F;"></span>
                            </td>
                          </tr>
                          <tr>
                            <td style="font-size: 14px; line-height: 170%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Estas recibiendo este correo porque eres un miembro valioso de la comunidad de Alohanáticos. <br><strong>[Aloha Café]</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 0 48px; font-size: 0px;">
    
                      <div class="outlook-group-fix" style="padding: 0 0 20px 0; vertical-align: top; display: inline-block; text-align: center; width:100%;">
                        <span style="padding: 0; font-size: 11px; line-height: 15px; font-weight: normal; color: #8B949F;">Aloha Café<br/>
                        </div>
                      </div>
    
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>    
        `
  })
}

export const emailPreparandoPedido = async (datos) => {
  const { email, nombre, idPedido, productos, total } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const listaProductos = productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('');

  //Información del email
  await transport.sendMail({
    from: ' "Aloha Café - Preparando Pedido" <ventas@alohacafe.ec> ',
    to: email,
    subject: "Aloha Café - Tu pedido se esta preparando",
    html: `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <title></title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
    
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass {
          width: 100%;
        }
    
        .ExternalClass * {
          line-height: 100%;
        }
    
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
          @-ms-viewport {
            width: 320px;
          }
          @viewport {
            width: 320px;
          }
        }
      </style>
    
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      </style>
      <style type="text/css">
        @media only screen and (max-width:595px) {
          .container {
            width: 100% !important;
          }
          .button {
            display: block !important;
            width: auto !important;
          }
        }
    
        .container_redes_sociales{
            display: flex;
            justify-content: center !important;
            align-items: center !important;
            justify-items: center;
            margin-bottom: 2%;
        }
        .container_redes_sociales a{
            margin: 0 1%;
        } 
        p.total_bajar{
          margin-top: 2rem;
      }

      </style>
    </head>
    
    <body style="font-family: 'Inter', sans-serif; background: #E5E5E5;">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
        <tbody>
          <tr>
            <td valign="top" align="center">
              <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td style="padding:48px 0 30px 0; text-align: center; font-size: 14px;">
                      <img style="width: 20%;" 
                        src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682133052/Logo-Aloha-Vector-2_xxz8gj.png" 
                        alt="Logo Aloha">
                    </td>
                  </tr>
                  <tr>
                    <td class="main-content" style="padding: 48px 30px 40px; color: #000000;" bgcolor="#ffffff">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="padding: 0 0 24px 0; font-size: 18px; line-height: 150%; font-weight: bold; color: #000000; letter-spacing: 0.01em; text-align:center">
                                ${nombre} tu pedido se esta preparando!
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 10px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Gracias por pedir en Aloha Café, <i>los mejores bolones de Guayaquil</i>, este es el identificador del pedido <span style="color: #E13028; font-weight: 700;">#${idPedido.slice(-4)}</span> ya se encuentra preparandose, te mantendremos informado por este medio sobre tu pedido. 
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Ver como va mi pedido:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 24px 0;">
                              <a class="button" href="https://alohacafe.ec/pedido?clientTransactionId=${idPedido}" title="Reset Password" style="width: 100%; background: #E13028; text-decoration: none; display: inline-block; padding: 10px 0; color: #fff; font-size: 14px; line-height: 21px; text-align: center; font-weight: bold; border-radius: 7px; box-shadow: 0px 5px 6px -5px #e13128;">Ver Pedido</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Información adicional:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 8px;">
                              <div style="display: flex; justify-content: space-between; align-items: center; padding: 28px 24px; border-radius: 4px; background-color: #FFF9F9; text-decoration: none;">
                                <span style="width: 90%; font-size: 14px; line-height: 150%; font-weight: bold; color: #29426E; letter-spacing: 0.01em;">
                                    Descripción del pedido:
                                    <div>
                                    ${listaProductos}
                                </div>
                                <p class="total_bajar">Total: $${ total }</p>
                                </span>
                              </div>
                            </td>
                          </tr>
    
                            <tr>
                                <td>
                                  <div class="container_redes_sociales">
                                    <a href="https://www.instagram.com/alohacafeec/" alt="Icono de Instagram">
                                      <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134233/mdi_instagram_tyrryn.png">
                                      </img>        
                                    </a>
    
                                    <a href="https://www.facebook.com/AlohaCafeEc" alt="Icono de Facebook">
                                      <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134229/fa_facebook-official_kifgeo.png">
                                      </img> 
                                    </a>
    
                                    <a href="https://www.tiktok.com/@alohacafeec" alt="Icono de Tiktok">
                                      <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134227/ic_baseline-tiktok_o8olnu.png">
                                      </img>
                                    </a>
                                  </div>
                                </td>
                            </tr>
    
                          <tr>
                            <td style="padding: 0 0 16px;">
                              <span style="display: block; width: 117px; border-bottom: 1px solid #8B949F;"></span>
                            </td>
                          </tr>
                          <tr>
                            <td style="font-size: 14px; line-height: 170%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Estas recibiendo este correo porque eres un miembro valioso de la comunidad de Alohanáticos. <br><strong>[Aloha Café]</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 0 48px; font-size: 0px;">
    
                      <div class="outlook-group-fix" style="padding: 0 0 20px 0; vertical-align: top; display: inline-block; text-align: center; width:100%;">
                        <span style="padding: 0; font-size: 11px; line-height: 15px; font-weight: normal; color: #8B949F;">Aloha Café<br/>
                        </div>
                      </div>
    
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>
 
        `
  })
}

export const emailPedidoListo = async (datos) => {
  const { email, nombre, idPedido, productos, total, puntos } = datos
  
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const listaProductos = productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('');

  //Información del email
  await transport.sendMail({
    from: ' "Aloha Café - Pedido listo" <ventas@alohacafe.ec> ',
    to: email,
    subject: "Aloha Café - Tu pedido esta listo",
    html: `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <title></title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
    
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass {
          width: 100%;
        }
    
        .ExternalClass * {
          line-height: 100%;
        }
    
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
          @-ms-viewport {
            width: 320px;
          }
          @viewport {
            width: 320px;
          }
        }
      </style>
    
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      </style>
      <style type="text/css">
        @media only screen and (max-width:595px) {
          .container {
            width: 100% !important;
          }
          .button {
            display: block !important;
            width: auto !important;
          }
        }
    
        .container_redes_sociales{
            display: flex;
            justify-content: center !important;
            align-items: center !important;
            justify-items: center;
            margin-bottom: 2%;
        }
        .container_redes_sociales a{
            margin: 0 1%;
        }
    
        p.total_bajar{
            margin-top: 2rem;
        }
      </style>
    </head>
    
    <body style="font-family: 'Inter', sans-serif; background: #E5E5E5;">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
        <tbody>
          <tr>
            <td valign="top" align="center">
              <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td style="padding:48px 0 30px 0; text-align: center; font-size: 14px;">
                        <img style="width: 20%;" 
                        src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682133052/Logo-Aloha-Vector-2_xxz8gj.png" 
                        alt="Logo Aloha">
                    </td>
                  </tr>
                  <tr>
                    <td class="main-content" style="padding: 48px 30px 40px; color: #000000;" bgcolor="#ffffff">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="padding: 0 0 24px 0; font-size: 18px; line-height: 150%; font-weight: bold; color: #000000; letter-spacing: 0.01em; text-align:center">
                                ${nombre} tu pedido esta listo 😋!
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 10px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Gracias por pedir en Aloha Café, <i>los mejores bolones de Guayaquil</i>, este es el identificador del pedido <span style="color: #E13028; font-weight: 700;">#${idPedido.slice(-4)}</span> esta listo para que los disfrutes, te recordamos que con esta compra acumulaste ${puntos} puntos.
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Si tuviste algún problema con el pedido o con la plataforma, coméntanos, queremos mejorar por ti 😊:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 24px 0;">
                              <a class="button" href="https://api.whatsapp.com/send?phone=593979596226&text=Hola%20necesito%20ayuda" title="Necesito Ayuda" style="width: 100%; background: #E13028; text-decoration: none; display: inline-block; padding: 10px 0; color: #fff; font-size: 14px; line-height: 21px; text-align: center; font-weight: bold; border-radius: 7px; box-shadow: 0px 5px 6px -5px #e13128;">Tuve Problemas</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Información sobre tu pedido:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 8px;">
                              <div style="display: flex; justify-content: space-between; align-items: center; padding: 28px 24px; border-radius: 4px; background-color: #FFF9F9; text-decoration: none;">
                                <span style="width: 90%; font-size: 14px; line-height: 150%; font-weight: bold; color: #29426E; letter-spacing: 0.01em;">
                                    Descripción del pedido:
                                    <div>
                                        ${listaProductos}
                                    </div>
                                    <p class="total_bajar">Total: $${ total }</p>
                                </span>
                              </div>
                            </td>
                          </tr>
    
                            <tr>
                                <td>
                                    <div class="container_redes_sociales">
                                        <a href="https://www.instagram.com/alohacafeec/" alt="Icono de Instagram">
                                          <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134233/mdi_instagram_tyrryn.png">
                                          </img>        
                                        </a>
    
                                        <a href="https://www.facebook.com/AlohaCafeEc" alt="Icono de Facebook">
                                          <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134229/fa_facebook-official_kifgeo.png">
                                          </img> 
                                        </a>
    
                                        <a href="https://www.tiktok.com/@alohacafeec" alt="Icono de Tiktok">
                                          <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134227/ic_baseline-tiktok_o8olnu.png">
                                          </img>
                                        </a>
                                      </div>
                                </td>
                            </tr>
    
                          <tr>
                            <td style="padding: 0 0 16px;">
                              <span style="display: block; width: 117px; border-bottom: 1px solid #8B949F;"></span>
                            </td>
                          </tr>
                          <tr>
                            <td style="font-size: 14px; line-height: 170%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Estas recibiendo este correo porque eres un miembro valioso de la comunidad de Alohanáticos. <br><strong>[Aloha Café]</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 0 48px; font-size: 0px;">
    
                      <div class="outlook-group-fix" style="padding: 0 0 20px 0; vertical-align: top; display: inline-block; text-align: center; width:100%;">
                        <span style="padding: 0; font-size: 11px; line-height: 15px; font-weight: normal; color: #8B949F;">Aloha Café<br/>
                        </div>
                      </div>
    
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>
    
 
        `
  })
}

export const emailLlegueLocal = async (datos) => {
  const { email, nombre, idPedido, productos, total } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const listaProductos = productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('');

  //Información del email
  await transport.sendMail({
    from: ' "Aloha Café - Ya se esta recogiendo tu pedido" <ventas@alohacafe.ec> ',
    to: email,
    subject: "Aloha Café - El repartidor ya esta recogiendo tu pedido",
    html: `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <title></title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
    
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass {
          width: 100%;
        }
    
        .ExternalClass * {
          line-height: 100%;
        }
    
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
          @-ms-viewport {
            width: 320px;
          }
          @viewport {
            width: 320px;
          }
        }
      </style>
    
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      </style>
      <style type="text/css">
        @media only screen and (max-width:595px) {
          .container {
            width: 100% !important;
          }
          .button {
            display: block !important;
            width: auto !important;
          }
        }
    
        .container_redes_sociales{
            display: flex;
            justify-content: center !important;
            align-items: center !important;
            justify-items: center;
            margin-bottom: 2%;
        }
        .container_redes_sociales a{
            margin: 0 1%;
        } 
        p.total_bajar{
          margin-top: 2rem;
      }

      </style>
    </head>
    
    <body style="font-family: 'Inter', sans-serif; background: #E5E5E5;">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
        <tbody>
          <tr>
            <td valign="top" align="center">
              <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td style="padding:48px 0 30px 0; text-align: center; font-size: 14px;">
                      <img style="width: 20%;" 
                        src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682133052/Logo-Aloha-Vector-2_xxz8gj.png" 
                        alt="Logo Aloha">
                    </td>
                  </tr>
                  <tr>
                    <td class="main-content" style="padding: 48px 30px 40px; color: #000000;" bgcolor="#ffffff">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="padding: 0 0 24px 0; font-size: 18px; line-height: 150%; font-weight: bold; color: #000000; letter-spacing: 0.01em; text-align:center">
                                ${nombre} tu pedido ya fue recogido por el repartidor!
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 10px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Gracias por pedir en Aloha Café, <i>los mejores bolones de Guayaquil</i>, este es el identificador del pedido <span style="color: #E13028; font-weight: 700;">#${idPedido.slice(-4)}</span> ya se encuentra en camino, te mantendremos informado por este medio sobre tu pedido.
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Ver como va mi pedido:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 24px 0;">
                              <a class="button" href="https://alohacafe.ec/pedido?clientTransactionId=${idPedido}" title="Reset Password" style="width: 100%; background: #E13028; text-decoration: none; display: inline-block; padding: 10px 0; color: #fff; font-size: 14px; line-height: 21px; text-align: center; font-weight: bold; border-radius: 7px; box-shadow: 0px 5px 6px -5px #e13128;">Ver Pedido</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Información adicional:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 8px;">
                              <div style="display: flex; justify-content: space-between; align-items: center; padding: 28px 24px; border-radius: 4px; background-color: #FFF9F9; text-decoration: none;">
                                <span style="width: 90%; font-size: 14px; line-height: 150%; font-weight: bold; color: #29426E; letter-spacing: 0.01em;">
                                    Descripción del pedido:
                                    <div>
                                    ${listaProductos}
                                </div>
                                <p class="total_bajar">Total: $${ total }</p>
                                </span>
                              </div>
                            </td>
                          </tr>
    
                            <tr>
                                <td>
                                  <div class="container_redes_sociales">
                                    <a href="https://www.instagram.com/alohacafeec/" alt="Icono de Instagram">
                                      <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134233/mdi_instagram_tyrryn.png">
                                      </img>        
                                    </a>
    
                                    <a href="https://www.facebook.com/AlohaCafeEc" alt="Icono de Facebook">
                                      <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134229/fa_facebook-official_kifgeo.png">
                                      </img> 
                                    </a>
    
                                    <a href="https://www.tiktok.com/@alohacafeec" alt="Icono de Tiktok">
                                      <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134227/ic_baseline-tiktok_o8olnu.png">
                                      </img>
                                    </a>
                                  </div>
                                </td>
                            </tr>
    
                          <tr>
                            <td style="padding: 0 0 16px;">
                              <span style="display: block; width: 117px; border-bottom: 1px solid #8B949F;"></span>
                            </td>
                          </tr>
                          <tr>
                            <td style="font-size: 14px; line-height: 170%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Estas recibiendo este correo porque eres un miembro valioso de la comunidad de Alohanáticos. <br><strong>[Aloha Café]</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 0 48px; font-size: 0px;">
    
                      <div class="outlook-group-fix" style="padding: 0 0 20px 0; vertical-align: top; display: inline-block; text-align: center; width:100%;">
                        <span style="padding: 0; font-size: 11px; line-height: 15px; font-weight: normal; color: #8B949F;">Aloha Café<br/>
                        </div>
                      </div>
    
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>
 
        `
  })
}

export const emailLlegueDomicilio = async (datos) => {
  const { email, nombre, idPedido, productos, total, puntos } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const listaProductos = productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('');

  //Información del email
  await transport.sendMail({
    from: ' "Aloha Café - Tu pedido ha llegado!" <ventas@alohacafe.ec> ',
    to: email,
    subject: "Aloha Café - Tu pedido ha llegado!",
    html: `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <title></title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
    
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass {
          width: 100%;
        }
    
        .ExternalClass * {
          line-height: 100%;
        }
    
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
          @-ms-viewport {
            width: 320px;
          }
          @viewport {
            width: 320px;
          }
        }
      </style>
    
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      </style>
      <style type="text/css">
        @media only screen and (max-width:595px) {
          .container {
            width: 100% !important;
          }
          .button {
            display: block !important;
            width: auto !important;
          }
        }
    
        .container_redes_sociales{
            display: flex;
            justify-content: center !important;
            align-items: center !important;
            justify-items: center;
            margin-bottom: 2%;
        }
        .container_redes_sociales a{
            margin: 0 1%;
        }
    
        p.total_bajar{
            margin-top: 2rem;
        }
      </style>
    </head>
    
    <body style="font-family: 'Inter', sans-serif; background: #E5E5E5;">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
        <tbody>
          <tr>
            <td valign="top" align="center">
              <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td style="padding:48px 0 30px 0; text-align: center; font-size: 14px;">
                        <img style="width: 20%;" 
                        src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682133052/Logo-Aloha-Vector-2_xxz8gj.png" 
                        alt="Logo Aloha">
                    </td>
                  </tr>
                  <tr>
                    <td class="main-content" style="padding: 48px 30px 40px; color: #000000;" bgcolor="#ffffff">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="padding: 0 0 24px 0; font-size: 18px; line-height: 150%; font-weight: bold; color: #000000; letter-spacing: 0.01em; text-align:center">
                                ${nombre} tu pedido ha llegado 😋!
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 10px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Gracias por pedir en Aloha Café, <i>los mejores bolones de Guayaquil</i>, este es el identificador del pedido <span style="color: #E13028; font-weight: 700;">#${idPedido.slice(-4)}</span> esta listo para que los disfrutes, te recordamos que con esta compra acumulaste <span style="color: #E13028; font-weight: 700;">${puntos} puntos.</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Si tuviste algún problema con el pedido o con la plataforma, coméntanos, queremos mejorar por ti 😊:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 24px 0;">
                              <a class="button" href="https://api.whatsapp.com/send?phone=593979596226&text=Hola%20necesito%20ayuda" title="Necesito Ayuda" style="width: 100%; background: #E13028; text-decoration: none; display: inline-block; padding: 10px 0; color: #fff; font-size: 14px; line-height: 21px; text-align: center; font-weight: bold; border-radius: 7px; box-shadow: 0px 5px 6px -5px #e13128;">Tuve Problemas</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Información sobre tu pedido:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 8px;">
                              <div style="display: flex; justify-content: space-between; align-items: center; padding: 28px 24px; border-radius: 4px; background-color: #FFF9F9; text-decoration: none;">
                                <span style="width: 90%; font-size: 14px; line-height: 150%; font-weight: bold; color: #29426E; letter-spacing: 0.01em;">
                                    Descripción del pedido:
                                    <div>
                                        ${listaProductos}
                                    </div>
                                    <p class="total_bajar">Total: $${ total }</p>
                                </span>
                              </div>
                            </td>
                          </tr>
    
                            <tr>
                                <td>
                                    <div class="container_redes_sociales">
                                        <a href="https://www.instagram.com/alohacafeec/" alt="Icono de Instagram">
                                          <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134233/mdi_instagram_tyrryn.png">
                                          </img>        
                                        </a>
    
                                        <a href="https://www.facebook.com/AlohaCafeEc" alt="Icono de Facebook">
                                          <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134229/fa_facebook-official_kifgeo.png">
                                          </img> 
                                        </a>
    
                                        <a href="https://www.tiktok.com/@alohacafeec" alt="Icono de Tiktok">
                                          <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134227/ic_baseline-tiktok_o8olnu.png">
                                          </img>
                                        </a>
                                      </div>
                                </td>
                            </tr>
    
                          <tr>
                            <td style="padding: 0 0 16px;">
                              <span style="display: block; width: 117px; border-bottom: 1px solid #8B949F;"></span>
                            </td>
                          </tr>
                          <tr>
                            <td style="font-size: 14px; line-height: 170%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Estas recibiendo este correo porque eres un miembro valioso de la comunidad de Alohanáticos. <br><strong>[Aloha Café]</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 0 48px; font-size: 0px;">
    
                      <div class="outlook-group-fix" style="padding: 0 0 20px 0; vertical-align: top; display: inline-block; text-align: center; width:100%;">
                        <span style="padding: 0; font-size: 11px; line-height: 15px; font-weight: normal; color: #8B949F;">Aloha Café<br/>
                        </div>
                      </div>
    
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>
 
        `
  })
}

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  //Información del email
  await transport.sendMail({
    from: ' "Aloha Café - Recupera tu cuenta" <info@alohacafe.ec> ',
    to: email,
    subject: "Aloha Café - Reestablece la contraseña",
    html: `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <title></title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
    
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass {
          width: 100%;
        }
    
        .ExternalClass * {
          line-height: 100%;
        }
    
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
          @-ms-viewport {
            width: 320px;
          }
          @viewport {
            width: 320px;
          }
        }
      </style>
    
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      </style>
      <style type="text/css">

        @media only screen and (max-width:595px) {
          .container {
            width: 100% !important;
          }
          .button {
            display: block !important;
            width: auto !important;
          }
        }

        .container_redes_sociales{
            display: flex;
            justify-content: center !important;
            align-items: center !important;
            justify-items: center;
            margin-bottom: 2%;
        }
        .container_redes_sociales a{
            margin: 0 1%;
        }
      </style>
    </head>
    
    <body style="font-family: 'Inter', sans-serif; background: #E5E5E5;">
      <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
        <tbody>
          <tr>
            <td valign="top" align="center">
              <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td style="padding:48px 0 30px 0; text-align: center; font-size: 14px;">
                    <img style="width: 20%;" 
                    src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682133052/Logo-Aloha-Vector-2_xxz8gj.png" 
                    alt="Logo Aloha">
                              
                    </td>
                  </tr>
                  <tr>
                    <td class="main-content" style="padding: 48px 30px 40px; color: #000000;" bgcolor="#ffffff">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td style="padding: 0 0 24px 0; font-size: 18px; line-height: 150%; font-weight: bold; color: #000000; letter-spacing: 0.01em; text-align:center">
                                ${nombre} has solicitado cambio de contraseña!
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 10px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Tranquilo/a, simplemente debes presionar el botón de <i>recuperrar cuenta</i> y te redireccionará a nuestro sitio web donde te aparacerá un cuadro para cambiar tu contraseña.
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Recupera tu cuenta con un solo click:
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 24px 0;">
                              <a class="button" href="https://alohacafe.ec/nuevo-password/${token}" title="Reset Password" style="width: 100%; background: #E13028; text-decoration: none; display: inline-block; padding: 10px 0; color: #fff; font-size: 14px; line-height: 21px; text-align: center; font-weight: bold; border-radius: 7px; box-shadow: 0px 5px 6px -5px #e13128;">Recuperar Cuenta</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 0 0 16px 0; font-size: 14px; line-height: 150%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                              Si tu no has solicitado el cambio de password, no te preocupes, simplemente ignora este correo, nadie puede cambiar tu contraseña si no le da al boton de recuperar cuenta que solo te llega a tu correo:
                            </td>
                          </tr>
                          
                            <tr>
                                <td>
                                    <div class="container_redes_sociales">
                                      <a href="https://www.instagram.com/alohacafeec/" alt="Icono de Instagram">
                                        <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134233/mdi_instagram_tyrryn.png">
                                        </img>        
                                      </a>

                                      <a href="https://www.facebook.com/AlohaCafeEc" alt="Icono de Facebook">
                                        <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134229/fa_facebook-official_kifgeo.png">
                                        </img> 
                                      </a>

                                      <a href="https://www.tiktok.com/@alohacafeec" alt="Icono de Tiktok">
                                        <img src="https://res.cloudinary.com/dqtirelyc/image/upload/v1682134227/ic_baseline-tiktok_o8olnu.png">
                                        </img>
                                      </a>
                                    </div>
                                </td>
                            </tr>
    
                          <tr>
                            <td style="padding: 0 0 16px;">
                              <span style="display: block; width: 117px; border-bottom: 1px solid #8B949F;"></span>
                            </td>
                          </tr>
                          <tr>
                            <td style="font-size: 14px; line-height: 170%; font-weight: 400; color: #000000; letter-spacing: 0.01em;">
                                Estas recibiendo este correo porque eres un miembro valioso de la comunidad de Alohanáticos. <br><strong>[Aloha Café]</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 0 48px; font-size: 0px;">
    
                      <div class="outlook-group-fix" style="padding: 0 0 20px 0; vertical-align: top; display: inline-block; text-align: center; width:100%;">
                        <span style="padding: 0; font-size: 11px; line-height: 15px; font-weight: normal; color: #8B949F;">Aloha Café<br/>
                        </div>
                      </div>
    
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html> 
        `
  })
}

export const emailAvisarPedidoAloha = async (datos) => {
  const { nombre, idPedido, productos, total, entrega } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const listaProductos = productos
    .map((producto) => `<li>${producto.nombre} - $${producto.precio}</li>`)
    .join('');

  await transport.sendMail({
    from: ' "Aloha Café - Tienes un nuevo Pedido" <ventas@alohacafe.ec> ',
    to: 'alohacafepayphone@gmail.com',
    subject: `Aloha Café - Nuevo pedido`,
    html: `
      <html>
        <body>
          <h1>Nuevo pedido en Aloha Café</h1>
          <p>Nombre del cliente: ${nombre}</p>
          <p>Número de pedido: #${idPedido.slice(-4)}</p>
          <p>Entrega: ${entrega}</p>
          <p>Productos:</p>
          <ul>
            ${listaProductos}
          </ul>
          <p>Total: $${total}</p>
          <p>Ver el pedido: <a href="https://alohacafe.ec/pedido?clientTransactionId=${idPedido}">Ver Pedido</a></p>
        </body>
      </html>
    `,
  });
};
