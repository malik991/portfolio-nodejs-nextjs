import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10  border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-2 flex justify-center items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo-alrehman.png"
            alt="logo image"
            width={100}
            height={100}
          />
          <span className="text-lg">
            Made with 💖 by{" "}
            <a
              href="https://www.linkedin.com/in/mubashar-hassan-sci/"
              target="_blank"
              className="hover:underline text-[#DC6B19]"
            >
              Al-Rehman
            </a>{" "}
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
