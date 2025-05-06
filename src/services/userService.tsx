import axios from "axios";
type user = {
  username: string;
  password: string;
};
export const loginUser = async (data: user) => {
  return await axios.post("http://localhost:3000/api/login", data);
};
