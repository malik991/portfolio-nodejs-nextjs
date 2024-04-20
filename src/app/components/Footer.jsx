import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-2 flex justify-center">
        <span>
          <Image
            src="/images/logo-alrehman.png"
            alt="logo image"
            // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={100}
            height={100}
          />
        </span>

        {/* <p className="text-slate-600"> @Copyright {new Date().getFullYear()} All rights reserved.</p> */}
        <span className="text-sm text-slate-600 sm:text-center">
          Made with 💖 by{" "}
          <a href="https://hiteshchoudhary.com/" className="hover:underline">
            Al-Rehman
          </a>{" "}
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
