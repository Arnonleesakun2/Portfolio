"use client";
import { useToast } from "@/context/ToastContext";
import { sendContact } from "@/services/contactService";
import { getAxiosErrorMessage } from "@/utils/handleAxiosError";
import { contactSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

type Contact = {
  email: string;
  title: string;
  description: string;
};

const Contactform = () => {
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
  );
};
export default Contactform;
