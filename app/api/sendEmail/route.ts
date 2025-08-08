import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phoneNumber, message } =
      await request.json();

    // Validazione di base
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // true per la porta 465, false per le altre
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Sito STED Srl" <${process.env.SMTP_USER}>`,
      to: "info@sted-srl.it", // L'indirizzo email del destinatario
      replyTo: email,
      subject: `Nuovo messaggio dal form di contatto da ${firstName} ${lastName}`,
      html: `
        <h1>Nuovo messaggio dal sito web</h1>
        <p><strong>Nome:</strong> ${firstName}</p>
        <p><strong>Cognome:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phoneNumber || "Non fornito"}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email inviata con successo!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Impossibile inviare l'email." },
      { status: 500 }
    );
  }
}
