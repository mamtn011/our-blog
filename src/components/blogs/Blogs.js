"use client";
import { useState } from "react";
import BlogCards from "./BlogCards";

const Blogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const pageSize = 12;

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };
  const handleCategoryChange = (categoryName) => {
    setCategory(categoryName);
  };

  return (
    <div>
      <div>Page category</div>
      {blogs && <BlogCards blogs={blogs} />}

      <div>pagination</div>
    </div>
  );
};

export default Blogs;
