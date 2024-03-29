import { useState } from "react";
import Router from "next/router";

const Server3 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const refreshPage = () => Router.reload();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-10 text-center mt-[10vh]">
        Server 3
      </h1>

      <div className="w-[40rem] max-h-92 p-4">
        <img
          className={`rounded-xl drop-shadow-sm`}
          src="https://pic.re/images"
          /* Without CDN
            src="/api/3/image"
            OR
            src="https://pic.re/image"
          */
          alt=""
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
        />
      </div>
      {isError && (
        <div className="flex flex-col text-center justify-center max-w-lg mb-8">
          <h2 className="text-2xl text-red-600 font-semibold">
            An Error Has Occured - Please Try Again Later.
          </h2>
        </div>
      )}
      {isLoading && !isError && (
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 m-10 font-semibold leading-6 text-lg shadow rounded-md text-white bg-blue-500 hover:bg-blue-400 transition ease-in-out duration-150 cursor-not-allowed"
          disabled=""
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </button>
      )}

      <button
        className="bg-blue-700 hover:bg-blue-600 transition duration-150 delay-50 p-4 mt-2 rounded-2xl text-xl font-bold w-28"
        onClick={refreshPage}
      >
        Refresh
      </button>
      <div
        className={`${isLoading ? "mt-[34rem]" : "mt-[21rem]"}`}
        aria-hidden="true"
      />
    </div>
  );
};

export default Server3;
