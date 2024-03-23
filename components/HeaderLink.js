import Link from "next/link";
import React from "react";

const HeaderLink = ({ text, path, gallery }) => {
  return (
    <li className="flex">
      <Link
        href={`${!gallery ? `/options/${path}` : "gallery"}`}
        className="flex items-center px-4 text-white/90 hover:text-blue-400 border-b-2 hover:border-blue-600 transition duration-300 delay-50"
        aria-hidden="true"
      >
        {text}
      </Link>
    </li>
  );
};

export default HeaderLink;
