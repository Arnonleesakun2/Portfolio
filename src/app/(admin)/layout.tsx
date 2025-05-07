import NavbarContainer from "@/components/navbars/NavbarContainer";
import Themechange from "@/components/themes/Themechange";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AdminDashboard",
  description: "Arnon leesakun portfolio AdminDashboard",
};

export default function Adminlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="maincontainer">
      <NavbarContainer/>
      {children}
      <Themechange />
    </div>
  );
}
