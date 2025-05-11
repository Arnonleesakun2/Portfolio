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

type ListblogProps = {
  category: string;
  search: string;
};

const Listblog = async ({ category, search }: ListblogProps) => {
  const blogs = await getBlogs(category, search);
  if (blogs.length === 0) {
    return (
      <div className="text-center border theme-border rounded-4xl">
        <h3 className="text-xl font-medium">No blogs found</h3>
        <p className="text-gray-500 mt-2">
          Create your first blog post to get started
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-10">
      {blogs.map((blog: Blog) => (
        <Cardblog key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default Listblog;
