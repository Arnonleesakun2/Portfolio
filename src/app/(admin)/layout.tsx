import Themechange from "@/components/themes/Themechange";

export default function Adminlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Themechange />
    </div>
  );
}
