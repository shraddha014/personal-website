import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { neue } from "@/utils/fontConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Shraddha's personal Website",
  icons: "/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${neue.className}`}>
        <Header />
        <div className="parent">{children}</div>
        <div className="footer">
          Built with&nbsp;<span>React</span>&nbsp;by&nbsp;<span>Shraddha</span>
        </div>
      </body>
    </html>
  );
}
