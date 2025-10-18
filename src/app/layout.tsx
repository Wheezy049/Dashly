import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashly",
  description: "A modern dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen w-screen`}
      >
        <div className="min-h-screen w-full">
          <Sidebar />
          <main className="ml-20 md:ml-64 w-full">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
