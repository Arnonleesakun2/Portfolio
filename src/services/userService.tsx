import axios from "axios";

type user = {
  username: string;
  password: string;
};
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const loginUser = async (data: user) => {
  return await axios.post(`${API_URL}/api/login`, data);
};
