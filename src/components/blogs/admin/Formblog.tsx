"use client";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import { Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import Blogcategory from "@/components/form/Blogcategory";
import Uploadfile from "@/components/form/Uploadfile";
import { blogSchema } from "@/utils/schemas";
import { z } from "zod";
import { storeBlog } from "@/services/blogService";
import { useToast } from "@/context/ToastContext";
import { getAxiosErrorMessage } from "@/utils/handleAxiosError";
import { useRouter } from "next/navigation";

type BlogFormData = z.infer<typeof blogSchema>;

const Formblog = () => {
  const router = useRouter();
  const [uploadKey, setUploadKey] = useState(0);
  const { showToast } = useToast();
  const modalRef = useRef<HTMLDialogElement>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormData>({
    defaultValues: {
      title: "",
      summary: "",
      content: "",
      category: "",
      image: undefined,
    },
    resolver: zodResolver(blogSchema),
  });
  const closeModal = () => {
    modalRef.current?.close();
    reset();
    setUploadKey((prev) => prev + 1);
  };
  const openModal = () => {
    modalRef.current?.showModal();
  };
  const onSubmit = async (data: BlogFormData) => {
    try {
      await new Promise((resoLve) => setTimeout(resoLve, 1000));
      const res = await storeBlog(data);
      if (res && res.status === 201) {
        showToast(res.data.message, "success");
        closeModal();
        router.refresh();
      }
    } catch (error) {
      showToast(getAxiosErrorMessage(error), "error");
    }
  };
  return (
    <div className="">
      <button
        className="btn btn-neutral font-semibold rounded-4xl"
        onClick={openModal}
      >
        <Plus size={18} /> Create New
      </button>
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box w-11/12 max-w-5xl border theme-border rounded-xl">
          <div className="bg-base-100 pb-4 border-b theme-border flex justify-between items-center">
            <h2 className="text-2xl font-bold text-highlight">
              Create New Blog
            </h2>
            <form method="dialog">
              <button
                onClick={closeModal}
                className="btn btn-sm btn-circle btn-ghost"
              >
                <X size={20} />
              </button>
            </form>
          </div>
          <div className="py-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                control={control}
                errors={errors}
                name="title"
                label="Enter blog title"
                type="text"
              />
              <Input
                control={control}
                errors={errors}
                name="summary"
                label="Enter blog summary"
                type="text"
              />
              <Uploadfile
                name="image"
                control={control}
                errors={errors}
                key={uploadKey}
              />
              <Textarea
                control={control}
                errors={errors}
                name="content"
                label="Write your blog content here..."
                type="text"
              />
              <Blogcategory control={control} errors={errors} name="category" />
              <div className="modal-action">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-outline rounded-4xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-neutral rounded-4xl"
                >
                  {isSubmitting ? <>Publishing...</> : "Publish Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
    </div>
  );
};
export default Formblog;
