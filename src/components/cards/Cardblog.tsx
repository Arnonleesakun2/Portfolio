import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import MotionItem from "../motions/MotionItem";

type CardBlogProps = {
  id: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  createdAt: string;
};

const Cardblog = ({
  id,
  title,
  summary,
  category,
  createdAt,
}: CardBlogProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <MotionItem>
      <div className="card sm:card-side rounded-4xl shadow-xl overflow-hidden border theme-border hover:shadow-2xl transition-all duration-300 h-full">
        <div className="card-body flex flex-col justify-between md:w-2/3">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="badge badge-primary gap-1">
                <Tag size={14} />
                {category}
              </div>
              <div className="text-xs flex items-center gap-1">
                <Calendar size={14} />
                {formatDate(createdAt)}
              </div>
            </div>
            <h2 className="card-title text-xl font-bold hover:text-primary transition-colors">
              {title.length > 50 ? `${title.substring(0, 50)}...` : title}
            </h2>
            <p className=" mt-2 line-clamp-3">{summary}</p>
          </div>
          <div className="card-actions justify-end mt-4">
            <Link
              href={`/blog/${id}`}
              className="btn btn-sm btn-primary rounded-full"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </MotionItem>
  );
};

export default Cardblog;
