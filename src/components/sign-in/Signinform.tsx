"use client"
import { useToast } from "@/context/ToastContext";
import { loginUser } from "@/services/userService";
import { getAxiosErrorMessage } from "@/utils/handleAxiosError";
import { userSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "../form/Input";
import Link from "next/link";

type User = {
  username: string;
  password: string;
};

const Signinform = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(userSchema),
  });

  const hdlSubmit = async (data: User) => {
    try {
      await new Promise((resoLve) => setTimeout(resoLve, 1000));
      const res = await loginUser(data);
      if (res && res.status === 200) {
        showToast(res.data.message, "success");
        router.push("/admin/dashboard");
      }
    } catch (error) {
      showToast(getAxiosErrorMessage(error), "error");
    }
  };
  return (
 <div className="border border-black/20 rounded-4xl w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-4xl text-highlight font-semibold">
            Login
          </h2>

          <form onSubmit={handleSubmit(hdlSubmit)}>
            <div className="flex flex-col gap-3">
              <Input
                control={control}
                errors={errors}
                name="username"
                label="Username"
                type="text"
              />
              <Input
                control={control}
                errors={errors}
                name="password"
                label="Password"
                type="password"
              />
            </div>
            <div className="form-control mt-6 flex justify-between items-center">
              <button
                type="submit"
                className="btn btn-primary rounded-4xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              <div className="flex items-center">
                <p>Back to</p>
                <Link href="/">
                  <button type="button" className="btn btn-link">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}
export default Signinform