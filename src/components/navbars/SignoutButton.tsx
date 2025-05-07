import { useToast } from "@/context/ToastContext";
import { signOut } from "@/services/userService";
import { useRouter } from "next/navigation";

const SignoutButton = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const hdlsignOut = async () => {
    const res = await signOut();
    if (res.status === 200) {
      showToast("SignOut successful!", "success");
      router.push("/");
    } else {
      console.error("Sign out failed");
    }
  };
  return (
    <button
      onClick={hdlsignOut}
      className="btn btn-neutral font-semibold rounded-4xl cursor-pointer"
    >
      Signout
    </button>
  );
};
export default SignoutButton;
