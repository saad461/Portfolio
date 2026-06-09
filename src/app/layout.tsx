import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saad Nadeem — Web Developer Pakistan",
  description: "Full stack web developer from Pakistan specializing in Next.js and AI integration. View live projects and get in touch.",
  openGraph: {
    title: "Saad Nadeem — Web Developer Pakistan",
    description: "Full stack web developer from Pakistan specializing in Next.js and AI integration.",
    url: "https://saadnadeem.vercel.app", // Adjust if needed
    siteName: "Saad Nadeem Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
