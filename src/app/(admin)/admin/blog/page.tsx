import Formblog from "@/components/blogs/admin/Formblog";
import Tableblog from "@/components/blogs/admin/Tableblog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Manage Blogs",
  description: "Admin panel for managing blog RyeSPortfolio",
};

const BlogAdminPage = async () => {
  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-bold text-highlight">Manage Blogs</h1>
        <Formblog />
      </div>
      <div className="my-8">
        <Tableblog />
      </div>
    </div>
  );
};

export default BlogAdminPage;
