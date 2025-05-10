import NavbarContainer from "@/components/navbars/NavbarContainer";
import Themechange from "@/components/themes/Themechange";



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
