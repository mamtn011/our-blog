import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck, FaUserTie } from "react-icons/fa6";

const BlogCards = ({ blogs }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
      {blogs.map((blog) => {
        return (
          <Link
            href={{
              pathname: `/blogs/${blog.id}`,
              query: { title: `${blog.title}` },
            }}
            key={blog.id}
            className="p-5 shadow-lg rounded cursor-pointer"
          >
            <div>
              <Image
                src={blog.image}
                width={320}
                height={280}
                alt="blog"
                className="w-full"
              />
            </div>
            <h3 className="mt-4 mb-3 font-bold hover:text-blue-600 cursor-pointer">
              {blog.title}
            </h3>
            <div className="mb-2 flex justify-between">
              <p className="inline-flex items-center text-gray-500">
                <FaUserTie className="mr-2" />
                {blog.author}
              </p>
              <p className="inline-flex items-center text-gray-500">
                <FaCalendarCheck className="mr-2" /> {blog.published_date}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogCards;
