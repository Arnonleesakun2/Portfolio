import NavbarContainer from "@/components/navbars/NavbarContainer";



export default function Adminlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="maincontainer">
      <NavbarContainer/>
      {children}
    </div>
  );
}
