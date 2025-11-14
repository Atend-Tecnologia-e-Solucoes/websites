import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Block - Soluções Inovadoras",
  description: "Adquira nossas soluções e transforme sua empresa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
