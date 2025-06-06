import "@/styles/globals.css";
import localFont from "next/font/local";
import { type Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Nice Admin",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const ibmPlexSans = localFont({
  variable: "--font-ibm-plex",
  fallback: ["system-ui", "arial"],
  src: [
    {
      path: "fonts/sans/IBMPlexSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/sans/IBMPlexSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "fonts/sans/IBMPlexSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
