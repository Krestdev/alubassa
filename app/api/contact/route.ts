import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactEmail, htmlMailSender } from "@/lib/email-template";

const SMTP_SERVER_USERNAME = process.env.NEXT_PUBLIC_EMAIL;
const SMTP_SERVER_PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;
const SITE_MAIL_RECIEVER = "contact@alubassa.com";

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export interface mailProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    subject:string;
}

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName, subject, message, phone }: mailProps =
      await request.json();

      if (!SMTP_SERVER_USERNAME || !SMTP_SERVER_PASSWORD) {
  return NextResponse.json({
    error : "Les informations d'authentification du serveur SMTP ne sont pas définies.",
  }
  , { status: 500 });
}
    if (!email || !firstName || !subject || !message || !phone) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: SMTP_SERVER_USERNAME,
      to: SMTP_SERVER_USERNAME,
      subject,
      text: `Nouveau message sur Alubassa de : ${firstName} ${lastName} - ${email} - ${phone}. Sujet: ${subject}. Message: ${message}.`,
      html: contactEmail({ email, firstName, lastName, phone, subject, message }),
    };

    const confirmationMailOptions = {
      from: SMTP_SERVER_USERNAME,
      to: email,
      subject: "No-reply: Votre message vers Alubassa a bien été enregistré",
      html: htmlMailSender({email, firstName, lastName, phone, subject, message})
    };

    const submittedMail = await transporter.sendMail(mailOptions);
    const confirmation = await transporter.sendMail(confirmationMailOptions);

    console.log("Message envoyé avec succès:", submittedMail.messageId);
    console.log("Message envoyé avec succès:", confirmation.messageId);

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur interne lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}