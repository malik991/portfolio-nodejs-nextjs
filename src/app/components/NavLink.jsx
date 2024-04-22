import Link from "next/link";

const NavLink = ({ href, title }) => {
  // Check if the href starts with # to determine if it's an internal link
  const isInternalLink = href.startsWith("#");

  // If it's an internal link, just render an anchor tag
  if (isInternalLink) {
    return (
      <a
        href={href}
        className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#DC6B19]"
      >
        {title}
      </a>
    );
  }
  // If it's an external link, use Next.js's Link component
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#DC6B19]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
