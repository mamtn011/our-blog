"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SocialLinks from "../shared/SocialLinks";
import { FaBars, FaXmark } from "react-icons/fa6";

// JSX
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 shadow-2xl shadow-slate-800">
      <nav className="p-4 max-w-7xl mx-auto flex justify-between items-center">
        {/* logo  */}
        <Link href="/" className="text-xl font-bold text-white">
          Our<span className="text-orange-500">Blog</span>
        </Link>
        {/* nav items for lg device */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, label }) => (
            <li
              key={path}
              className="text-white hover:underline underline-offset-4"
            >
              <Link href={path} className={pathname === path ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* menu social icons */}
        <div className="text-white text-xl hidden md:flex gap-4 items-center">
          <SocialLinks />
        </div>

        {/* mobile menu btn - display on mobile screen */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* nav items for mobile device */}
      <ul
        className={`md:hidden gap-12 text-lg block space-y-2 p-4 mt-14 bg-white h-lvh ${
          isMenuOpen
            ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
            : "hidden"
        }`}
      >
        {navItems.map(({ path, label }) => (
          <li key={path} className="text-black">
            <Link
              href={path}
              className="hover:text-orange-500 hover:underline underline-offset-4"
              onClick={toggleMenu}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
