"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { getBlogs } from "@/lib/blog";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // fetching data from API
  useEffect(() => {
    if (getBlogs) {
      (async () => {
        try {
          const res = await getBlogs();
          setData(res);
        } catch (err) {
          setError(err);
        }
      })();
    }
  }, [getBlogs]);

  // Value object for provider
  const value = {
    data,
    error,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

// Custom hook to use the blog context
export const useBlogData = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
