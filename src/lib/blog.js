import { blogApi } from "@/config/secrets";
export const getBlogs = async () => {
  try {
    const res = await fetch(
      blogApi || "https://mamtn011.github.io/our_garden/blog.json"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Error in fetching blogs data");
  }
};
