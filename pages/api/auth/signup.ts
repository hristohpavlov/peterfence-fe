import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../../lib/mongodb";
import User from "../../../model/user";
import { hash } from "bcryptjs";
import { IUser } from "../../../types";
import mongoose from "mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToDB().catch(err => res.json(err))

    if (req.method === "POST") {
        if (!req.body) return res.status(400).json({ error: "Data is missing" })
        const { email, password } = req.body
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(409).json({ error: "User already exists" })
        }
        else {
            if (password.length < 6)
                return res.status(409).json({ error: "Password needs to be longer than 6 characters" })

            const hashedPassword = await hash(password, 12);

            User.create({
                email,
                password: hashedPassword
            }, (error: unknown, data: IUser) => {
                if (error && error instanceof mongoose.Error.ValidationError) {
                    for (let field in error.errors) {
                        const msg = error.errors[field].message
                        return res.status(409).json({ error: msg })
                    }
                }

                const user = {
                    email: data.email,
                    _id: data._id
                }

                return res.status(201).json({
                    success: true,
                    user
                })
            })

        }
    } else {
        res.status(405).json({ error: "Method not allowed" })
    }
}

export default handler