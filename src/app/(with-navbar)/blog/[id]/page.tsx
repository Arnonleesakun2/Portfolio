import { getBlogById } from "@/services/blogService";
import Image from "next/image";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import MotionMain from "@/components/motions/MotionMain";

type Params = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Params) => {
  const { id } = await params;
  const res = await getBlogById(id);
  const blog = res.result;
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist.",
    };
  }
  return {
    title: blog.title,
    description: blog.summary,
  };
};

const BlogDetailPage = async ({ params }: Params) => {
  const { id } = await params;
  const res = await getBlogById(id);
  const blog = res.result;
  if (!blog) {
    notFound();
  }
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <MotionMain>
        <Link
          href="/blog"
          className="flex items-center gap-2 hover:underline mb-6"
        >
          <ArrowLeft size={16} />
          Back to all blogs
        </Link>
      </MotionMain>
      <div className="mb-8">
        <MotionMain>
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        </MotionMain>
        <div className="flex items-center gap-4">
          <MotionMain>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
          </MotionMain>
          <MotionMain>
            <div className="badge badge-primary gap-1 rounded-4xl">
              <Tag size={14} />
              {blog.category}
            </div>
          </MotionMain>
        </div>
      </div>
      {blog.image && (
        <MotionMain>
          <div className="relative w-full h-[500px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              quality={100}
              className="object-cover"
              priority
            />
          </div>
        </MotionMain>
      )}
      <MotionMain>
        <div className="bg-base-200 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p>{blog.summary}</p>
        </div>
        <div className="prose max-w-none">{blog.content}</div>
      </MotionMain>
    </div>
  );
};
export default BlogDetailPage;
