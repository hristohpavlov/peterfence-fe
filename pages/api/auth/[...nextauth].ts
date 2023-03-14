import { compare } from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "../../../lib/mongodb";
import User from "../../../model/user";
import { IUser } from "../../../types";

const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectToDB().catch(err => { throw new Error(err) })
                const user = await User.findOne({
                    email: credentials?.email
                }).select("+password")

                if (!user) {
                    throw new Error("Invalid credentials")
                }

                const isPasswordCorrect = await compare(credentials!.password, user.password)

                if (!isPasswordCorrect) {
                    throw new Error("Invalid credentials")
                }
                return user
            }
        })
    ],
    pages: {
        signIn: "/admin"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            const user = token.user as IUser
            session.user = user
            return session
        }
    }
}

export default NextAuth(options)