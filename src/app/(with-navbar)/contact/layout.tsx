import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page RyeS Portfolio",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}