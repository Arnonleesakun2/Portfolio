import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";
import ReduxProvider from "@/context/ReduxProvider";
import Scroll from "@/components/motions/Scroll";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "RyeS Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <ToastProvider>
            <main>
              <Scroll /> {children}
            </main>
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
