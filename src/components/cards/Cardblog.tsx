import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

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
  image,
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
    <div className="card bg-base-100 shadow-xl overflow-hidden border theme-border hover:shadow-2xl transition-all duration-300">
      <figure className="relative h-[400px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center mb-2">
          <div className="badge badge-primary gap-1">
            <Tag size={14} />
            {category}
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <Calendar size={14} />
            {formatDate(createdAt)}
          </div>
        </div>
        <h2 className="card-title text-xl font-bold hover:text-primary transition-colors">
          {title.length > 50 ? `${title.substring(0, 50)}...` : title}
        </h2>
        <p className="text-gray-600 mt-2 line-clamp-3">{summary}</p>
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
  );
};

export default Cardblog;