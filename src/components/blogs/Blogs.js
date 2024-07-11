"use client";
import { useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import { filterBlog } from "@/utils/blog";

const Blogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);
  const pageSize = 12;

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };
  const handleCategoryChange = (categoryName) => {
    setCategory(categoryName);
    setCurrentPage(1);
  };
  const filteredBlogs = filterBlog(blogs, currentPage, pageSize, category);
  return (
    <div>
      {filteredBlogs && (
        <>
          <div>Page category</div>

          <BlogCards blogs={filteredBlogs} />
          <Pagination
            onPageChange={handlePageChange}
            totalBlogs={blogs.length}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Blogs;
