import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/blog">Blog</Link>
          <Link style={{ marginLeft: "10px" }} href="/product">
            Product
          </Link>
          <button style={{ marginLeft: "10px" }} onClick={handleClick}>
            Place Order
          </button>
          <Link style={{ marginLeft: "10px" }} href="/users">
            Users
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>
      </main>
    </div>
  );
}
