import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-4xl lg:text-6xl leading-snug font-bold mb-5">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-100 md:w-3/4 lg:w-3/5 mx-auto mb-5">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and ideas. We offer
          everything you need to get started, from helpful tips and trick.
        </p>
        <div>
          <Link
            href="/contact"
            className="font-medium hover:text-orange-500 inline-flex items-center py-1"
          >
            Learn more <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
