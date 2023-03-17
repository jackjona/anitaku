import { ThemeProvider } from "next-themes";
import Head from "next/head";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AniTaku</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1c1b22" />
        <meta
          name="description"
          content="A simple anime image & gif generator using the waifu.pics, api.bi and waifu.im APIs."
        />
        <meta name="msapplication-TileColor" content="#1c1b22" />
        <meta name="theme-color" content="#1c1b22" />
        <meta property="og:title" content="AniTaku" />
        <meta
          property="og:description"
          content="A simple anime image & gif generator using the waifu.pics, api.bi and waifu.im APIs."
        />
        <meta property="og:site_name" content="AniTaku" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
