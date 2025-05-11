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

export const getBlogs = async (category?: string, search?: string) => {
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (search) params.append("search", search);

  const res = await fetch(`${API_URL}/api/blogs?${params}`, {
    cache: "no-store",
  });

  return res.json();
};

export async function getBlogById(id: string) {
  const res = await fetch(`${API_URL}/api/blogs/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export const deleteBlog = async (id: string) => {
  const res = await axios.delete(`${API_URL}/api/blogs/${id}`);
  return res;
};
