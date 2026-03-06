import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-900 text-gray-50">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
