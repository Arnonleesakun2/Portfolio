import { getBlogs } from "@/services/blogService";
import Deleteblog from "./Deleteblog";
import ViewBlogButton from "./ViewBlogButton";

type Blog = {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  image: string;
  createdAt: string;
};

const Tableblog = async () => {
  const blogs = await getBlogs();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

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
    <div className="overflow-x-auto border theme-border rounded-4xl p-4">
      <table className="min-w-full  text-sm">
        <thead className="">
          <tr>
            <th className="p-4 text-left font-semibold ">Title</th>
            <th className="p-4 text-left font-semibold ">Category</th>
            <th className="p-4 text-left font-semibold ">Created At</th>
            <th className="p-4 text-left font-semibold t">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {blogs.map((blog: Blog) => (
            <tr key={blog.id} className="">
              <td className="p-4 font-medium">{blog.title}</td>
              <td className="p-4">{blog.category}</td>
              <td className="p-4">{formatDate(blog.createdAt)}</td>
              <td className="p-4 space-x-2">
                <ViewBlogButton blog={blog} />
                <Deleteblog id={blog.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tableblog;
