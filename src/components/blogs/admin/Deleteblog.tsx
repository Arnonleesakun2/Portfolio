"use client";
import { deleteBlog } from "@/services/blogService";
import { RotateCw, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";
import { useState } from "react";
import { getAxiosErrorMessage } from "@/utils/handleAxiosError";

type DeleteblogProps = {
  id: string;
};

const Deleteblog = ({ id }: DeleteblogProps) => {
  const router = useRouter();
  const { showToast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const hdlDelete = async () => {
    try {
      setIsDeleting(true);
      await new Promise((resoLve) => setTimeout(resoLve, 1000));
      const res = await deleteBlog(id);
      if (res && res.status === 200) {
        showToast(res.data.message, "success");
        router.refresh();
      }
    } catch (error) {
      showToast(getAxiosErrorMessage(error), "error");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <button disabled={isDeleting} onClick={hdlDelete}>
      {isDeleting ? (
        <RotateCw className="inline animate-spin w-5 h-5 text-red-500 hover:text-red-700 cursor-pointer" />
      ) : (
        <Trash2 className="inline w-5 h-5 text-red-500 hover:text-red-700 cursor-pointer" />
      )}
    </button>
  );
};
export default Deleteblog;
