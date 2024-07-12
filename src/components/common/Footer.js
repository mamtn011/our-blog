import Link from "next/link";
import SocialLinks from "../shared/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5  md:grid-cols-4 lg:col-span-4 mb-8">
            {/* cat -1 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    World
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Tech
                  </Link>
                </li>
              </ul>
            </div>
            {/* cat -2  */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Entertainment
                  </Link>
                </li>
              </ul>
            </div>
            {/* cat -3  */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Brochure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Non Profit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            {/* cat -4  */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Entrepreneur
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Personal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Wiki
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Forum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* subscription  */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Subscribe Us
              </p>
              <form className="mt-4 flex flex-col md:flex-row ">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-grow w-full h-10 px-4 mb-3 transition duration-200 bg-whit border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-10 px-6 border font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 mt-2">
                Please, do not hesitate to subscribe us for getting notification
                via email about latest news.
              </p>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div>
          {/* social icons  */}
          <div className="text-gray-300 text-3xl flex gap-4 items-center justify-center mt-6">
            <SocialLinks />
          </div>

          {/* copyright text  */}

          <div className="text-center py-8 text-gray-500">
            Copyright ©2024 All rights reserved | This is made with ❤ by
            <Link
              href="https://almobin.netlify.app/"
              className="ml-2 text-gray-300 cursor-pointer hover:text-orange-500"
            >
              Mustakim Al Mobin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
