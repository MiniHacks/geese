import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    scope: "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/userinfo.profile",
                },
            },
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },
        async session({ session, token, user }) {
            session.user._id = user.id;
            return session;
        },
    },
});
