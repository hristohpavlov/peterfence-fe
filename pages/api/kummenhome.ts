import { NextApiRequest, NextApiResponse } from "next";

require('dotenv').config();

const sgMail = require('@sendgrid/mail')

const { SG_API_KEY, EMAIL_FROM } = process.env;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { picture1, picture2, text1, text2, heading1, heading2 } = req.body;
    const msg = {
        to: 'hristohrpavlov@gmail.com',
        from: EMAIL_FROM,
        subject: `New Inquiry from pesho za home`,
        html: `<p><strong>Name: </strong>Email change</p>
        <p><strong>Pic1: </strong>${picture1}</p>
        <p><strong>Pic2: </strong>${picture2}</p>
        <p><strong>Text1: </strong>${text1}</p>
        <p><strong>Text2: </strong>${text2}</p>
        <p><strong>Heading1: </strong>${heading1}</p>
        <p><strong>Heading2: </strong>${heading2}</p>`
    }
    await sgMail.send(msg)
    res.json({ success: true });
}