import Listblog from "@/components/blogs/user/Listblog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs Page RyeS Portfolio",
};

const Blogpage = () => {
  return (
    <div>
      <Listblog />
    </div>
  );
};
export default Blogpage;
