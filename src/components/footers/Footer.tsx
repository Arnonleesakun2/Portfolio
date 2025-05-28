import Link from "next/link";
import { Github, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#6D80C7]">
      <footer className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10 maincontainer">
        <div className="text-gray-200">
          <h2 className="font-bold text-lg">Arnon Leesakun</h2>
          <p>Fullstack Developer, Font-end Developer, Back-end Developer</p>
          <div className="flex gap-3 mt-3">
            <Link href="https://github.com/Arnonleesakun2" target="_blank">
              <button className="btn btn-circle btn-outline text-sm">
                <Github />
              </button>
            </Link>
            <Link
              href="https://www.facebook.com/asklasli.guigui"
              target="_blank"
            >
              <button className="btn btn-circle btn-outline text-sm">
                <Facebook />
              </button>
            </Link>
          </div>
        </div>

        <div className="text-gray-200">
          <h2 className="font-bold text-lg ">Links</h2>
          <div className="flex flex-col ">
            <Link href="/" className="hover:underline">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:underline">
              Blogs
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        <div className="text-gray-200">
          <h2 className="font-bold text-lg">Contact</h2>
          <p>📧 Email: Arnonleesakun2@gmail.com</p>
          <p>📱 Phone: 0994351549</p>
          <p>🏠 95/5, Nakhonsawan 60240</p>
        </div>

        <div className="col-span-full text-center border-gray-200 pt-6 border-t w-full">
          <p className="text-gray-200">
            Made with <span className="text-red-500">❤️</span> by Arnon Leesakun
            © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
