import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinica Dental de Malasaña",
  description: "A demo of a dental clinic's front desk appointment booking system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
