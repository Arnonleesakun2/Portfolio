"use client";
import React from "react";
import { useEffect, useState } from "react";
import { checkAuth } from "@/services/userService";
import AdminNavbar from "./AdminNavbar";
import Navbar from "./Navbar";
type User = {
  username: string;
};

const NavbarContainer = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await checkAuth();
        if (res.status === 200) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };
    checkLogin();
  }, []);
  if (user) {
    return <AdminNavbar />;
  }
  return <Navbar />;
};
export default NavbarContainer;
