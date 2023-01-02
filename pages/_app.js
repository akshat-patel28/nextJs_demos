import "../styles/globals.css";
import { SessionProvider, useSession, signIn } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

// check user is authenticated
function Auth({ children }) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return children;
}

export default MyApp;
