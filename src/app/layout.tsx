import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Arnon leesakun portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body suppressHydrationWarning={true}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}





