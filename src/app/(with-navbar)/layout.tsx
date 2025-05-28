import NavbarContainer from "@/components/navbars/NavbarContainer";

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarContainer/>
      {children}
    </div>
  );
}
