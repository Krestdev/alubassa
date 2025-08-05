import { mailProps } from "@/app/api/contact/route";

export function contactEmail({firstName, lastName, email, subject, phone, message}:mailProps){
    return `
    <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Nouveau message de contact</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #4CAF50; color: white; padding: 10px; text-align: center; }
        .content { padding: 20px; border: 1px solid #ddd; }
        .footer { margin-top: 20px; font-size: 12px; color: #777; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Nouveau message de contact</h2>
        </div>
        <div class="content">
            <p><strong>Nom :</strong>${`${firstName} ${lastName}`}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            <p><strong>Sujet :</strong> ${subject}</p>
            <p><strong>Message :</strong></p>
            <p>${message}</p>
        </div>
        <div class="footer">
            <p>Cet email a été envoyé depuis le formulaire de contact de www.alubassa.com</p>
            <p>Date d'envoi : ${new Date()}</p>
        </div>
    </div>
</body>
</html>
    `
}


export function htmlMailSender({firstName, lastName, email, message, subject}:mailProps) {
    return `
    <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Confirmation de votre message</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #4CAF50; color: white; padding: 10px; text-align: center; }
        .content { padding: 20px; border: 1px solid #ddd; }
        .footer { margin-top: 20px; font-size: 12px; color: #777; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Merci pour votre message !</h2>
        </div>
        <div class="content">
            <p>Bonjour <strong>${`${firstName} ${lastName}`}</strong>,</p>
            <p>Nous avons bien reçu votre demande et vous remercions de nous avoir contactés.</p>
            <p><strong>Récapitulatif de votre message :</strong></p>
            <ul>
                <li><strong>Sujet :</strong> ${subject}</li>
                <li><strong>Message :</strong> ${message}</li>
            </ul>
            <p>Nous traitons votre demande dans les plus brefs délais et vous répondrons à l'adresse <strong>${email}</strong>.</p>
            <p>Cordialement,<br>Alubassa</p>
        </div>
        <div class="footer">
            <p>Cet email est une confirmation automatique. Merci de ne pas y répondre.</p>
        </div>
    </div>
</body>
</html>`
}