import { NextApiRequest, NextApiResponse } from "next";

require('dotenv').config();

const sgMail = require('@sendgrid/mail')

const { SG_API_KEY, EMAIL_FROM } = process.env;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.body;
    const msg = {
        to: 'hristohrpavlov@gmail.com',
        from: EMAIL_FROM,
        subject: `New Inquiry from pesho za email`,
        html: `<p><strong>Name: </strong>Email change</p>
        <p><strong>Nov email: </strong>${email}</p>`
    }
    await sgMail.send(msg)
    res.json({ success: true });
}