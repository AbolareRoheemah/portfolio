import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { AppProvider } from "./state/AppContext";
import Footer from "./components/Footer";
import CustomCursor from "@/app/components/CustomCursor"

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
  title: "Abolare Roheemah",
  description: "Abolare Roheemah's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[100vw] overflow-x-hidden min-h-screen flex flex-col`}
        >
          <CustomCursor />
          <div>
            <Header />
          </div>
          <div className="flex-grow pt-[12vh]">
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </body>
      </AppProvider>
    </html>
  );
}
