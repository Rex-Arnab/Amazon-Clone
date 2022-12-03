import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "516791639445-kt44svg5dsnctb27nj8qfinsfemlblsd.apps.googleusercontent.com",
            clientSecret: "tEza9NA35dcOX6o9bf48kryX",
        }),
    ],
});