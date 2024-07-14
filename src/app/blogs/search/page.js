"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Banner from "@/components/shared/Banner";
import { useBlogData } from "@/context/blogProvider";
import { filterBlogBySearchParam } from "@/utils/blog";
import BlogCards from "@/components/blogs/BlogCards";

const SearchPage = () => {
  const [blogs, setBlogs] = useState(null);
  const { data, error } = useBlogData();
  if (error) throw new Error(error);

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    if (data) {
      setBlogs(data);
    }
  }, [data]);

  // filter data by search param
  const filteredBlogs =
    search && blogs ? filterBlogBySearchParam(blogs, search) : [];

  // JSX
  return (
    <div>
      <Banner pageName="Search Result" />
      <div className="max-w-7xl mx-auto py-16 px-4">
        {filteredBlogs && filteredBlogs.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6">
            <BlogCards blogs={filteredBlogs} />
          </div>
        ) : (
          <div className="w-full md:w-3/4 lg:w-2/4 bg-gray-300 rounded h-20 flex items-center justify-center mx-auto">
            <h4 className="text-xl text-center font-semibold">
              No data match with{" "}
              <span className="bg-yellow-300 px-2">{search}</span>
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
