import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <h1 className="text-8xl font-extrabold">AniTaku</h1>
      <h2 className="text-2xl font-bold mt-8 mb-1 text-center">Click one of the buttons below to get started.</h2>
      <h3 className="italic">While NSFW filtering is applied, complete accuracy isn’t guaranteed.</h3>
      <div className="flex flex-row flex-wrap items-start justify-center px-10">
        <Link
          href="/options/server1"
          className="px-8 py-4 m-4 bg-blue-900 hover:bg-blue-600 transition duration-150 delay-50 rounded-xl text-lg font-bold"
        >
          Server 1
        </Link>
        <Link
          href="/options/server2"
          className="px-8 py-4 m-4 bg-blue-900 hover:bg-blue-600 transition duration-150 delay-50 rounded-xl text-lg font-bold"
        >
          Server 2
        </Link>
        <Link
          href="/options/server3"
          className="px-8 py-4 m-4 bg-blue-900 hover:bg-blue-600 transition duration-150 delay-50 rounded-xl text-lg font-bold"
        >
          Server 3
        </Link>
        <Link
          href="/gallery"
          className="px-8 py-4 m-4 bg-blue-900 hover:bg-blue-600 transition duration-150 delay-50 rounded-xl text-lg font-bold"
        >
          Gallery
        </Link>
      </div>
    </>
  );
};

export default Hero;
