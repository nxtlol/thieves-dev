import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  variable: "--font-general-sans",
  src: "./fonts/GeneralSans-Regular.otf",
});

export const metadata: Metadata = {
  title: "thieves.fun / home",
  description:
    "We are currently working hard to bring you an exciting website. Stay tuned for updates!",
  openGraph: {
    siteName: "thieves.fun",
    locale: "en_US",
    title: "thieves.fun / home",
    description:
      "We are currently working hard to bring you an exciting website. Stay tuned for updates!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
