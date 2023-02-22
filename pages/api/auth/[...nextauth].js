import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
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
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        // add the api logic here
        // if user is authenticated then return jwt with user detailes
        const user = {
          jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        };
        return user;
        // else return null
        // return null
      },
      // if we are not using custom sign in page
      // credentials: {
      //   username: { label: "Email", type: "email", placeholder: "email" },
      //   password: {
      //     label: "Password",
      //     type: "password",
      //     placeholder: "password",
      //   },
      // }, // remove credentials for custom sign in page
    }),
  ],
  // path for custom sign in page
  pages: {
    signIn: "/auth/signin",
  },
};
export default NextAuth(authOptions);

/*
 *   for signin next js provides UI for on path api/auth/signin
 *   for signout next js provides UI for on path api/auth/signout
 *
 */
