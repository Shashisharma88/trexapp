/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import "./globals.css";
import Layout from "@/component/Layout/Layout";

export const metadata = {
  title: "Trex 20",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
      </Head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
