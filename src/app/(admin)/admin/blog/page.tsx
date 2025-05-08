import Formblog from "@/components/blogs/admin/Formblog";

const BlogAdminPage = () => {
  // Mock data for blogs
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      summary: "Learn the basics of Next.js and how to create your first app",
      category: "Web Development",
      createdAt: "2023-10-15",
    },
    {
      id: 2,
      title: "Mastering TypeScript",
      summary: "Advanced TypeScript techniques for better code quality",
      category: "Programming",
      createdAt: "2023-09-22",
    },
  ];

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-highlight">Manage Blogs</h1>
        <Formblog/>
      </div>

      <div className="bg-base-100 rounded-xl shadow-lg border theme-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="bg-base-200">ID</th>
                <th className="bg-base-200">Title</th>
                <th className="bg-base-200">Summary</th>
                <th className="bg-base-200">Category</th>
                <th className="bg-base-200">Created At</th>
                <th className="bg-base-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-base-200">
                    <td>{blog.id}</td>
                    <td className="font-medium">{blog.title}</td>
                    <td className="max-w-xs truncate">{blog.summary}</td>
                    <td>
                      <span className="badge badge-outline">
                        {blog.category}
                      </span>
                    </td>
                    <td>{blog.createdAt}</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="btn btn-sm btn-outline">Edit</button>
                        <button className="btn btn-sm btn-error btn-outline">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    No blogs found. Create your first blog!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogAdminPage;
