import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import { neue } from "@/utils/fontConfig";

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
      <body className={`${neue.className}`}>
        <div className="main">
          <Header />
          <div className="mainContainer">{children}</div>
          <div className="footer">
            Built with&nbsp;<span>React</span>&nbsp;by&nbsp;<span>Shraddha</span>
          </div>
        </div>
      </body>
    </html>
  );
}
