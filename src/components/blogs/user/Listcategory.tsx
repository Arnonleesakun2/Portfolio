"use client";
import { categories } from "@/utils/category";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ListcategoryProps = {
  selected: string;
};

const Listcategory = ({ selected }: ListcategoryProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === selected) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`btn btn-sm rounded-full ${
            category === selected ? "btn-primary" : "btn-ghost"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Listcategory;
