import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 mb-8">
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
          <div className="text-center py-8 text-gray-500">
            Copyright ©2024 All rights reserved | This is made with ❤ by
            Mustakim Al Mobin
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
