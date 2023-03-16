import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <h1 className="text-8xl font-extrabold mb-20">AniTaku</h1>
      <div className="flex flex-row flex-wrap items-start justify-center px-10">
        <Link
          href="/options/server1"
          className="px-8 py-4 m-4 bg-blue-400 dark:bg-blue-900 rounded-xl text-lg font-bold"
        >
          Server 1
        </Link>
        <Link
          href="/options/server2"
          className="px-8 py-4 m-4 bg-blue-400 dark:bg-blue-900 rounded-xl text-lg font-bold"
        >
          Server 2
        </Link>
        <Link
          href="/options/server3"
          className="px-8 py-4 m-4 bg-blue-400 dark:bg-blue-900 rounded-xl text-lg font-bold"
        >
          Server 3
        </Link>
        <Link
          href="/gallery"
          className="px-8 py-4 m-4 bg-blue-400 dark:bg-blue-900 rounded-xl text-lg font-bold"
        >
          Gallery
        </Link>
        <Link
          href="/random"
          className="px-8 py-4 m-4 bg-blue-400 dark:bg-blue-900 rounded-xl text-lg font-bold"
        >
          Random
        </Link>
      </div>
    </>
  );
};

export default Hero;
