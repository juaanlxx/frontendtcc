import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biblioteca Next",
  description: "A Melhor Biblioteca do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
        position="top-right"
        toastOptions={{
          style:{
            backgroundColor: "#f1f1f1", 
            color: "#131313",
            borderColor: "rgba(0, 0, 0, 0.5)"
          }
        }}
        />
        {children}
      </body>
    </html>
  );
}
