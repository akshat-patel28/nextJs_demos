import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // create OAuthApp on github for client id and clientSecret
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      name: "Email",
      async authorize(credentials, req) {
        // add the api logic here
        // if user is authenticated then return jwt
        const user = {
          jwt: "udhe9rherhdkfjndiufbiubdfniduf9dhf",
          name: "xyz",
        };
        return user;
        // else return null
        // return null
      },
      credentials: {
        username: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
    }),
  ],
};
export default NextAuth(authOptions);

/*
 *   for signin next js provides UI for on path api/auth/signin
 *   for signout next js provides UI for on path api/auth/signout
 *
 */
