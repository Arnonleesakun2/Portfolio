import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login-Portfolio",
  description: "Login Page Arnon leesakun portfolio",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
