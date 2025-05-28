import Link from "next/link";
import React from "react";
import { GalleryHorizontalEnd } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-[16px] left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[70%] my-2 z-50">
      <div className="navbar border border-black/20 rounded-4xl px-4 shadow-xl backdrop-blur-[10px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost cursor-pointer hover:bg-base-100 p-2 text-black md:hidden rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="rounded-4xl font-semibold btn-ghost hidden lg:block"
          >
            <div className="flex gap-2 items-center font-semibold text-black">
              <GalleryHorizontalEnd />
              Portfolio
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/blog"
                className="rounded-4xl font-semibold btn-ghost text-black"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="rounded-4xl font-semibold btn-ghost text-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/sign-in">
            <button className="btn btn-neutral font-semibold rounded-4xl">
              Admin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
