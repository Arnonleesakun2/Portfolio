import Stat from "@/components/dashboards/Stat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Dashboard",
  description: "Admin Dashboard for RyeSPortfolio",
};

const Dashboardpage = () => {
  return (
    <div>
      <Stat/>
    </div>
  )
}
export default Dashboardpage