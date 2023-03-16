import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center border-t-4 w-full mt-[2rem] text-center">
      <div className="p-6">
        <p className="text-lg">
          Built by:{" "}
          <a
            href="https://github.com/jackjona"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Jack Jona
          </a>{" "}
          - Powered by:{" "}
          <a
            href="https://waifu.pics/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            waifu.pics,{" "}
          </a>
          <a
            href="https://www.waifu.im/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            waifu.im,
          </a>{" "}
          and{" "}
          <a
            href="https://pic.re/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            pic.re
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
