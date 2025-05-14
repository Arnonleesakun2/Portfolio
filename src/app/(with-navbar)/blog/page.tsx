import Listblog from "@/components/blogs/user/Listblog";
import Listcategory from "@/components/blogs/user/Listcategory";
import Searchblog from "@/components/blogs/user/Searchblog";
import MotionMain from "@/components/motions/MotionMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs Page RyeS Portfolio",
};

const Blogpage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) => {
  const params = await searchParams;
  const category = params.category || "";
  const search = params.search || "";
  return (
    <div className="flex flex-col lg:flex-row gap-8 py-10 ">
      <div className="lg:w-1/4">
        <MotionMain>
          <div className="space-y-4 sticky top-32">
            <Searchblog />
            <Listcategory selected={category} />
          </div>
        </MotionMain>
      </div>
      <div className="lg:w-3/4">
        <Listblog category={category} search={search} />
      </div>
    </div>
  );
};
export default Blogpage;
