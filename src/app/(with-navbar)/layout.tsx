import Footer from "@/components/footers/Footer";
import NavbarContainer from "@/components/navbars/NavbarContainer";
import Themechange from "@/components/themes/Themechange";

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="maincontainer">
      <NavbarContainer/>
      {children}
      <Themechange />
      <Footer/>
    </div>
  );
}
