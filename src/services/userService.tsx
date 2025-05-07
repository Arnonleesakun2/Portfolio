import axios from "axios";

type user = {
  username: string;
  password: string;
};
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const loginUser = async (data: user) => {
  return await axios.post(`${API_URL}/api/login`, data);
};

export const checkAuth = async () => {
  return await axios.get(`${API_URL}/api/check-auth`);
};

export const signOut = async () => {
  return await axios.post("/api/signout"); 
};