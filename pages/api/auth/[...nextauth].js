import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {


    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.

            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied

                const deneme = {name:req.body.name,id:req.body.id}

                return deneme
            }
        })
    ],

    callbacks: {

        session: async (session, token, user) => {
            return session;
        },
    }

}
export default NextAuth(authOptions)
