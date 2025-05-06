import Themechange from "@/components/themes/Themechange";

export default function Authlayout({
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
