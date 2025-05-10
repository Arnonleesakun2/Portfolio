import { contact } from "@/utils/contact";
import { Link2 } from "lucide-react";
import Link from "next/link";

const Contactme = () => {
  return (
    <div className="bg-base-100 p-8 rounded-xl shadow-lg border theme-border">
      <h2 className="text-3xl font-semibold mb-6 text-highlight">Contact</h2>
      <div className="space-y-4">
        {contact.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="p-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-white">
              {item.icon}
            </div>
            <div>
              {item.link ? (
                <div className="flex items-center gap-1 hover:translate-x-1 duration-300">
                  <Link
                    target="_blank"
                    href={item.link}
                    className="hover:text-pink-400 transition-colors"
                  >
                    {item.data}
                  </Link>
                  <Link2 className="text-pink-400" size={16} />
                </div>
              ) : (
                <span className="">{item.data}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contactme;
