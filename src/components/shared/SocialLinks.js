import Link from "next/link";
import {
  FaSquareDribbble,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareXTwitter,
} from "react-icons/fa6";
const SocialLinks = () => {
  return (
    <>
      <Link href="/" className="hover:text-orange-500">
        <FaSquareFacebook />
      </Link>
      <Link href="/" className="hover:text-orange-500">
        <FaSquareDribbble />
      </Link>
      <Link href="/" className="hover:text-orange-500">
        <FaSquareXTwitter />
      </Link>
      <Link href="/" className="hover:text-orange-500">
        <FaSquareGithub />
      </Link>
    </>
  );
};

export default SocialLinks;
