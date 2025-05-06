import { AxiosError } from "axios";

export function getAxiosErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    return error.response?.data?.error || "Something went wrong!";
  }
  return "Unexpected error occurred.";
}
