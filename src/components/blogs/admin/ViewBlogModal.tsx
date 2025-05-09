"use client";
import { useRef, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

type Blog = {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  image: string;
  createdAt: string;
};

type ViewBlogModalProps = {
  blog: Blog;
  isOpen: boolean;
  onClose: () => void;
};

const ViewBlogModal = ({ blog, isOpen, onClose }: ViewBlogModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleClose = () => {
    onClose();
  };
 

  return (
    <dialog
      ref={modalRef}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box w-11/12 max-w-4xl border theme-border rounded-xl">
        <div className="bg-base-100 pb-4 border-b theme-border flex justify-between items-center">
          <h2 className="text-2xl font-bold text-highlight">Blog Details</h2>
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost"
          >
            <X size={20} />
          </button>
        </div>
        <div className="py-4">
          <div className="space-y-6">
            {blog.image && (
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold">{blog.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="badge badge-primary">{blog.category}</span>
                <span className="text-sm text-gray-500">
                  {formatDate(blog.createdAt)}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Summary</h3>
              <p className="">{blog.summary}</p>
            </div>
            <div>
              <h3 className="p-4 text-lg font-semibold mb-2 rounded-lg">Content</h3>
              <div className="p-4 rounded-lg">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ViewBlogModal;
