import Navbar from "@/components/navbars/Navbar";
import Themechange from "@/components/themes/Themechange";

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="maincontainer">
      <Navbar />
      {children}
      <Themechange />
    </div>
  );
}
