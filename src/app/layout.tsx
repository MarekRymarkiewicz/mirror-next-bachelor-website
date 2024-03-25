import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOŚP - Wielka Orkiestra Świątecznej Pomocy",
  description:
    "Przykładowa strona-wizytówka dla organizacji charytatywnej WOŚP przygotowanej na potrzeby pracy inżynierskiej",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
