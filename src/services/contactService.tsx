import axios from "axios";

type Contact = {
  email: string;
  title: string;
  description: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const sendContact = async (data: Contact) => {
  return await axios.post(`${API_URL}/api/send-contact`, data);
};
