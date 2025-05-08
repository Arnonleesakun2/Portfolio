import axios from "axios";

type Blogs = {
  title: string;
  summary: string;
  content: string;
  category: string;
  image: File;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export const storeBlog = async (data: Blogs) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("summary", data.summary);
  formData.append("content", data.content);
  formData.append("category", data.category);
  formData.append("image", data.image);

  return await axios.post(`${API_URL}/api/blogs`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
