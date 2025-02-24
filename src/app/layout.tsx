import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Currículo Lucas Baldasso",
  description: "Este é o currículo do Lucas Baldasso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="EN-US">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
