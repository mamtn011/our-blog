const url = process.env.DB_URL || "http://localhost:5000/blogs";
export const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Error in fetching blogs data");
  }
};
