import { useEffect, useState } from "react";
import Hero from "@/components/Hero";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/1/sfw/waifu", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Error! status: ${res.status}`);
      }

      const data = await res.json();
      setImageURL(data.url);
    } catch (err) {
      console.error(err.message);
      setIsError(true);
    } /* finally {
      console.log("Image Loaded Successfully");
    } */
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main>
        <div
          className={`flex flex-col justify-center items-center h-full  ${
            showImage ? "mt-2" : "mt-[20vh]"
          }`}
        >
          <Hero />
          <div className="flex flex-col justify-center items-center mt-20">
            <button
              className="bg-blue-200 dark:bg-blue-800 p-4 mb-12 rounded-2xl text-xl font-semibold w-80"
              onClick={() =>
                !showImage ? setShowImage(true) : setShowImage(false)
              }
            >
              {!showImage ? "Generate A Random Image" : "Hide Image"}
            </button>
            {showImage && (
              <>
                <a href={imageURL} target="_blank" rel="noopener noreferrer">
                  <img
                    className={`rounded-xl drop-shadow-sm w-[30rem] ${
                      isLoading && "hidden"
                    }`}
                    src={imageURL}
                    alt=""
                    onLoad={() => setIsLoading(false)}
                  />
                </a>
                {isError && (
                  <div className="flex flex-col text-center justify-center max-w-lg mb-8">
                    <h2 className="text-2xl text-red-600 font-semibold">
                      An Error Has Occured - Please Try Again Later.
                    </h2>
                  </div>
                )}
                {isLoading && !isError && (
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-lg shadow rounded-md text-white bg-blue-500 hover:bg-blue-400 transition ease-in-out duration-150 cursor-not-allowed"
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
                  </div>
                )}
                {!isError && (
                  <p className="text-lg p-6">
                    <b>Full Image:</b>{" "}
                    <a className="underline" href={imageURL}>
                      {imageURL}
                    </a>
                  </p>
                )}
                <button
                  className="bg-blue-200 dark:bg-blue-700 p-4 mt-2 rounded-2xl text-xl font-bold w-28"
                  onClick={() => fetchData()}
                >
                  Refresh
                </button>
              </>
            )}
          </div>
        </div>
        <div
          className={`${!showImage ? "mt-[21rem]" : "mt-[4rem]"}`}
          aria-hidden="true"
        />
      </main>
    </>
  );
}
