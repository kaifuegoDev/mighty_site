import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "MIGHTY PLATFORM",
  description: "Advanced Esports Tournament Management System",
  icons: {
    icon: "/appicon.png",
    apple: "/appicon.png",
  },
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
        {children}
        <Script id="zsiqscript" strategy="afterInteractive" src="https://salesiq.zohopublic.in/widget?wc=siq4f628cd25eba9c8477d7f9c174e6a8627373b90fa209da819f2b2787705bcb29" defer />
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
      </body>
    </html>
  );
}
