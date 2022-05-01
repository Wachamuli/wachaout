import Head from "next/head";
import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="app">
      <Head>
        <title>WachaOut!</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* <Navbar /> */}
      <main id="main">{children}</main>
      <Footer />

    </div>
  );
}

export default Layout;