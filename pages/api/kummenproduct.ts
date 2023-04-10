import { NextApiRequest, NextApiResponse } from "next";

require('dotenv').config();

const sgMail = require('@sendgrid/mail')

const { SG_API_KEY, EMAIL_FROM } = process.env;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { productName, id, name, link, description } = req.body;
    //tuka shte ima danni za cuknatiq produkt
    const msg = {
        to: 'hristohpavlov@gmail.com',
        from: EMAIL_FROM,
        subject: `Admin Panel - ProductId:${id}, ProductName: ${productName}`,
        html: `<p><strong>Product Name: </strong>${name}</p>
        <p><strong>Photo link: </strong>${link}</p>
        <p><strong>Product Description: </strong>${description}</p>`
    }
    await sgMail.send(msg)
    res.json({ success: true });
}