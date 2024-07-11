"use client";
import { useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import { filterBlogByCategory, filterBlogByPageSize } from "@/utils/blog";
import Category from "./Category";

const Blogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const pageSize = 9;

  // handle page and category change
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };
  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
  };
  // filter blogs by category and page size
  const filteredBlogsByCategory = filterBlogByCategory(blogs, selectedCategory);
  const filteredBlogsByPageSize = filterBlogByPageSize(
    filteredBlogsByCategory,
    currentPage,
    pageSize
  );

  // JSX
  return (
    <div>
      {filteredBlogsByPageSize.length > 0 && (
        <>
          <Category
            onSelectCategory={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <div>
            <BlogCards blogs={filteredBlogsByPageSize} />
          </div>
          <Pagination
            onPageChange={handlePageChange}
            totalBlogs={filteredBlogsByCategory.length}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Blogs;
