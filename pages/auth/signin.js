import { getCsrfToken, signIn } from "next-auth/react";

export default function SignIn({ csrfToken }) {
  return (
    <>
      <form method="POST" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Username
          <input name="username" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign in</button>
        <button onClick={() => signIn("github")}>Sign in with Github</button>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </form>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
