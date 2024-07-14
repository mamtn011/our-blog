import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
export default function NotFound() {
  return (
    <div className="py-32">
      <div className="max-w-7xl mx-auto py-16 px-4 flex items-end">
        <div className="w-full md:w-3/4 lg:w-2/4 bg-gray-300 rounded flex flex-col gap-2 items-center justify-center mx-auto py-4">
          <h4 className="text-xl font-semibold">
            <span className="font-extrabold">404:</span> Page Not Found
          </h4>
          <p>Could not find requested resource</p>
          <Link
            href="/"
            className="flex justify-center items-center gap-2 py-1 px-2 m-2 bg-gray-500 border-2 border-white rounded hover:bg-orange-500 text-white"
          >
            Return Home <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
