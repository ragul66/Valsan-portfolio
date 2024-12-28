import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Valsan-Portfolio",
  description: "Designed by Ragul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add favicon link */}
        <link
          rel="icon"
          href="/Black and White Minimalist Professional Initial Logo/1.png"
          type="image/png"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
