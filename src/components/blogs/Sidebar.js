import { filterBlogByCategory } from "@/utils/blog";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Sidebar = ({ blogs }) => {
  const filteredBlogs = filterBlogByCategory(blogs, "Startups").slice(0, 6);
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold px-4">Latest Blogs</h3>
        <div className="p-4">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="my-4 border-b-2 border-spacing-2">
              <h4 className="text-base">{blog.title}</h4>
              <Link
                href={`/blogs/${blog.id}`}
                className="text-sm pb-2 inline-flex font-semibold items-center hover:text-orange-500"
              >
                Read now <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
