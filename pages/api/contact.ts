import { NextApiRequest, NextApiResponse } from "next";

require('dotenv').config();

const sgMail = require('@sendgrid/mail')

const { SG_API_KEY, EMAIL_FROM } = process.env;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { productName, id, name, email, subject, message } = req.body;
    //tuka shte ima danni za cuknatiq produkt
    const msg = {
        to: 'peterfence@yahoo.com',
        from: EMAIL_FROM,
        subject: `New Order - ProductId:${id}, ProductName: ${productName}`,
        html: `<p><strong>Name: </strong>${name}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Subject: </strong>${subject}</p>
        <p><strong>Message: </strong>${message}</p>`
    }
    await sgMail.send(msg)
    res.json({ success: true });
}