import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Smash2play",
  description: "Get the best equipment for your game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="h-screen w-full">{children}</body>
    </html>
  );
}