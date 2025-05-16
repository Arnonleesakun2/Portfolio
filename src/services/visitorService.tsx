const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export const getVisitors = async () => {
  const res = await fetch(`${API_URL}/api/track-visitor`, {
    cache: "no-store",
  });

  return res.json();
};
