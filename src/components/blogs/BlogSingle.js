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
                blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
                placeholder="blur"
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
