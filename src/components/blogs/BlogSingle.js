"use client";
import { useEffect, useState } from "react";
import { useBlogData } from "@/context/blogProvider";
import { useParams } from "next/navigation";
import { findBlogById } from "@/utils/blog";
import Image from "next/image";
import { FaCalendarCheck, FaUserTie } from "react-icons/fa6";
import Sidebar from "./Sidebar";
const BlogSingle = () => {
  const [blogs, setBlogs] = useState(null);
  const { data, error } = useBlogData();
  const { id } = useParams();
  useEffect(() => {
    if (data) {
      setBlogs(data);
    }
  }, [data]);

  const blog = blogs && findBlogById(blogs, id);

  return (
    <div className="max-w-7xl mx-auto my-12 px-4 flex gap-4 flex-col lg:flex-row">
      {blog && (
        <>
          <div className="lg:w-3/4 mx-auto">
            {/* blog image  */}
            <div>
              <Image
                src={blog?.image}
                width={600}
                height={480}
                alt="blog"
                className="w-full mx-auto rounded mt-2"
              />
            </div>
            {/* blog title  */}
            <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-700">
              {blog?.title}
            </h2>
            {/* author and published date  */}
            <div className="mb-8 flex gap-4 flex-wrap">
              <p className="inline-flex items-center text-gray-500">
                <FaUserTie className="mr-2" />
                {blog?.author}
              </p>
              <p className="inline-flex items-center text-gray-500">
                <FaCalendarCheck className="mr-2" /> {blog?.published_date}
              </p>
            </div>
            {/* blog content  */}
            <p className="text-gray-700 mb-6">{blog?.content}</p>
            {/* dummy text  */}
            <p className="text-gray-700 mb-6">
              Ipsum dolor sit amet consectetur, adipisicing elit. Labore
              blanditiis omnis dolores, voluptatibus recusandae quaerat atque
              nulla distinctio nam quidem obcaecati incidunt pariatur voluptatem
              odio? Cumque sit quibusdam eligendi maxime omnis quidem
              perspiciatis saepe tempore explicabo magnam officia dolorem,
              voluptatum ad? Rerum temporibus accusantium consequatur totam
              ratione iusto minus deserunt.
            </p>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              aperiam impedit illum rerum perspiciatis quos amet facilis
              excepturi tempora explicabo? Rem dolorem iste impedit explicabo
              incidunt praesentium quis! Corrupti, ad.
            </p>
          </div>
          <div className="lg:w-1/3 xl:w-1/4">
            <Sidebar blogs={blogs} />
          </div>
        </>
      )}
    </div>
  );
};

export default BlogSingle;
