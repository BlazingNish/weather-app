// Layout for app
import Header from "../components/Header";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      {/* Using Head component from next/head to change title and add favicon */}
      <Head>
        <title>Weatherly</title>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
