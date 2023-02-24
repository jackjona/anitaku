import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>AniTaku</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <footer className={styles.footer}>
        Built by: Jack Jona - Powered by: &nbsp;waifu.pics, api.bi, waifu.im
      </footer>
    </>
  );
}
