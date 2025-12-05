import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NIRD",
  description: "Numérique Inclusif Responsable et Durable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <iframe 
        src="https://azizbelhadjsayar.github.io/test-chat/"
        style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",border:"none",zIndex:999999}}
        title="Chat'Bruti Chatbot"
        id="chatbotIframe"
    ></iframe> */}
        {children}
        {/* <script src="https://github.com/azizbelhadjsayar/test-chat/blob/main/embed.js"></script> */}
      </body>
    </html>
  );
}
