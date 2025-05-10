import Signinform from "@/components/sign-in/Signinform";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "login-Portfolio",
  description: "Login Page Arnon leesakun portfolio",
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Signinform/>
    </div>
  );
};

export default LoginPage;
