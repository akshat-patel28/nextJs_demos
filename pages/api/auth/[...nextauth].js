import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // create OAuthApp on github for client id and clientSecret
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);

/*
 *   for signin next js provides UI for on path api/auth/signin
 *   for signout next js provides UI for on path api/auth/signout
 *
 */
