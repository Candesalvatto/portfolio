// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "cande.salvatto12@gmail.com",
//         pass: "uujr cpcz pesq eoik",
//     },
//     from: "cande.salvatto12@gmail.com"
// });


// export const sendEmail= async (to, code) => {
//     try {
//         const mailOptions = {
//             from: "NucbaZappi - nucbazappi3317@gmail.com",
//             to,
//             subject: "Codigo de verificación para tu cuenta",
//             text: ` Llegó tu código para Nucba Zappi.
//             El código es: ${code}`
//         };

//         await transporter.sendMail(mailOptions);
//         console.log("Correo electrónico enviado");
//     } catch (error) {
//         console.error("Error al enviar el correo:",error);
//     }
// }