"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Searchblog = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }
      router.push(`/blog?${params.toString()}`);
    }, 400);
    return () => clearTimeout(delayDebounce);
  }, [search, searchParams, router]);
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search blog..."
        className="input input-bordered w-full rounded-4xl"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Searchblog;
