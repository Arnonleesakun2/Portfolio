import { getBlogs } from "@/services/blogService";
import Cardblog from "@/components/cards/Cardblog";

type Blog = {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  image: string;
  createdAt: string;
};

const Listblog = async () => {
  const blogs = await getBlogs();

  if (blogs.length === 0) {
    return (
      <div className="text-center py-20 border theme-border rounded-xl">
        <h3 className="text-xl font-medium">No blogs found</h3>
        <p className="text-gray-500 mt-2">
          Create your first blog post to get started
        </p>
      </div>
    );
  }

  return (
    <div className="py-10 space-y-10 md:w-[70%] mx-auto">
      {blogs.map((blog: Blog) => (
        <Cardblog key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default Listblog;
