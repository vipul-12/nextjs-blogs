// import "@/styles/globals.css";
import NavBar from "@/components/navBar";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Head>
        <link rel="icon" href="/batman.svg" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}
