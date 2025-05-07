"use client";
import React from "react";
import { contact } from "@/utils/contact";
import Link from "next/link";
import { Link2, Send } from "lucide-react";
import { useToast } from "@/context/ToastContext";
import { useForm } from "react-hook-form";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import { contactSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContact } from "@/services/contactService";
import { getAxiosErrorMessage } from "@/utils/handleAxiosError";

type Contact = {
  email: string;
  title: string;
  description: string;
};
const Contactpage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<Contact>({
    defaultValues: {
      email: "",
      title: "",
      description: "",
    },
    resolver: zodResolver(contactSchema),
  });
  const { showToast } = useToast();
  const hdlSubmit = async (data: Contact) => {
    try {
      await new Promise((resoLve) => setTimeout(resoLve, 1000));
      const res = await sendContact(data);
      if (res && res.status === 200) {
        showToast(res.data.message, "success");
        reset();
      }
    } catch (error) {
      showToast(getAxiosErrorMessage(error), "error");
    }
  };
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-12">
        <div className="bg-base-100 p-8 rounded-xl shadow-lg border theme-border">
          <h2 className="text-3xl font-semibold mb-6 text-highlight">
            Contact
          </h2>
          <div className="space-y-4">
            {contact.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="p-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-white">
                  {item.icon}
                </div>
                <div>
                  {item.link ? (
                    <div className="flex items-center gap-1 hover:translate-x-1 duration-300">
                      <Link
                        target="_blank"
                        href={item.link}
                        className="hover:text-pink-400 transition-colors"
                      >
                        {item.data}
                      </Link>
                      <Link2 className="text-pink-400" size={16} />
                    </div>
                  ) : (
                    <span className="">{item.data}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-base-100 p-8 rounded-xl shadow-lg border theme-border">
          <h2 className="text-3xl font-semibold mb-6 text-highlight">
            Send me a message
          </h2>
          <form onSubmit={handleSubmit(hdlSubmit)} className="space-y-4">
            <Input
              control={control}
              errors={errors}
              name="email"
              label="Email"
              type="email"
            />
            <Input
              control={control}
              errors={errors}
              name="title"
              label="Title"
              type="text"
            />
            <Textarea
              control={control}
              errors={errors}
              name="description"
              label="Description"
              type="text"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full rounded-lg mt-4"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={18} /> Send
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contactpage;
