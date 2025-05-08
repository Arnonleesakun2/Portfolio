import { createClient } from "@supabase/supabase-js";

const bucket_name = "blog-bucket";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
if (!url || !key) {
  throw new Error("Supabase URL and Key must be defined");
}
const supabase = createClient(url, key);

export async function uploadFile(image: File) {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket_name)
    .upload(newName, image,{
      cacheControl:'3600'
    });
  if (!data) throw new Error("Upload failed");
  return supabase.storage.from(bucket_name).getPublicUrl(newName).data.publicUrl;
}
