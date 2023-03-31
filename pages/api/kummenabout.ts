import { NextApiRequest, NextApiResponse } from "next";

require('dotenv').config();

const sgMail = require('@sendgrid/mail')

const { SG_API_KEY, EMAIL_FROM } = process.env;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { message1, message2, message3, message4, message5, message6, message7, message8, message9 } = req.body;
    //tuka shte ima danni za cuknatiq produkt
    const msg = {
        to: 'hristohrpavlov@gmail.com',
        from: EMAIL_FROM,
        subject: `New Inquiry from pesho za about`,
        html: `<p><strong>Name: </strong>About page</p>
        <p><strong>Message1: </strong>${message1}</p>
        <p><strong>Message2: </strong>${message2}</p>
        <p><strong>Message3: </strong>${message3}</p>
        <p><strong>Message4: </strong>${message4}</p>
        <p><strong>Message5: </strong>${message5}</p>
        <p><strong>Message6: </strong>${message6}</p>
        <p><strong>Message7: </strong>${message7}</p>
        <p><strong>Message8: </strong>${message8}</p>
        <p><strong>Message9: </strong>${message9}</p>`
    }
    await sgMail.send(msg)
    res.json({ success: true });
}