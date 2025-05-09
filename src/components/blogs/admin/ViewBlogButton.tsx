"use client";
import { useState } from "react";
import { Eye } from "lucide-react";
import ViewBlogModal from "./ViewBlogModal";

type Blog = {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  image: string;
  createdAt: string;
};

type ViewBlogButtonProps = {
  blog: Blog;
};

const ViewBlogButton = ({ blog }: ViewBlogButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="inline-block cursor-pointer"
        title="View blog details"
      >
        <Eye className="inline w-5 h-5 text-blue-500 hover:text-blue-700" />
      </button>
      
      {isModalOpen && (
        <ViewBlogModal 
          blog={blog} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default ViewBlogButton;