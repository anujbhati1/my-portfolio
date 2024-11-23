import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Raleway } from "next/font/google";

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
const railwayBold = localFont({
  src: "./fonts/ralewayBold.woff",
  variable: "--font-raleway-bold",
  weight: "100 900",
});

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio · Anuj Bhati",
  description: "This is portfolio website of Anuj Bhati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${railwayBold.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
