"use client";
import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import { filterBlogByCategory, filterBlogByPageSize } from "@/utils/blog";
import Category from "./Category";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { useBlogData } from "@/context/blogProvider";
const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const { data, error } = useBlogData();
  if (error) throw new Error(error);
  const pageSize = 9;
  const pathName = usePathname();

  // handle page and category change
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };
  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (data) {
      setBlogs(data);
    }
  }, [data]);

  // filter blogs by category and page size
  const filteredBlogsByCategory = blogs
    ? filterBlogByCategory(data, selectedCategory)
    : null;
  const filteredBlogsByPageSize = filteredBlogsByCategory
    ? filterBlogByPageSize(filteredBlogsByCategory, currentPage, pageSize)
    : null;
  // JSX
  return (
    <div>
      {filteredBlogsByPageSize && filteredBlogsByPageSize.length > 0 && (
        <>
          {pathName === "/blogs" && (
            <Category
              onSelectCategory={handleCategoryChange}
              selectedCategory={selectedCategory}
            />
          )}

          <div className="flex flex-col lg:flex-row gap-6">
            <BlogCards blogs={filteredBlogsByPageSize} />
            {pathName !== "/blogs" && <Sidebar blogs={blogs} />}
          </div>
          {pathName === "/blogs" && (
            <Pagination
              onPageChange={handlePageChange}
              totalBlogs={filteredBlogsByCategory.length}
              pageSize={pageSize}
              currentPage={currentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
