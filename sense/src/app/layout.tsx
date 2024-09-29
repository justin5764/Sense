import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from './components/NavBar';
import { AppProvider } from "@/context/AppContext";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
        <AppProvider>
          <Navbar />
          {children}
          </AppProvider>
        </UserProvider>
        <h1>Hello</h1>
      </body>
    </html>
  );
}

