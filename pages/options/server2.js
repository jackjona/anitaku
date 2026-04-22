import { useEffect, useState } from "react";
import TypeButton from "@/components/TypeButton";

const Server2 = () => {
  const [imageType, setImageType] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [showGIFs, setShowGIFs] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      // Exclude nsfw files using query string
      const res = await fetch("/api/2/images?IsNsfw=False", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Accept-Version": "v7",
        },
      });

      if (!res.ok) {
        throw new Error(`Error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      setImageURL(data.items[0].url);
    } catch (err) {
      console.error(err.message);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [imageType]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-10 text-center">Server 2</h1>
        <div className="w-[30rem] max-h-92 p-4">
          <a href={imageURL} target="_blank" rel="noopener noreferrer">
            <img
              className={`rounded-xl drop-shadow-sm ${isLoading && "hidden"}`}
              src={imageURL}
              alt=""
              onLoad={() => setIsLoading(false)}
            />
          </a>
        </div>
        {isError && (
          <div className="flex flex-col text-center justify-center max-w-lg mb-8">
            <h2 className="text-2xl text-red-600 font-semibold">
              An Error Has Occured - Please Try Again Later.{" "}
            </h2>{" "}
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
        {!isError && (
          <p className="text-lg p-6">
            <b>Full Image:</b>{" "}
            <a className="underline" href={imageURL}>
              {imageURL}
            </a>
          </p>
        )}
        <div className="flex ">
          <button
            className="bg-blue-700 hover:bg-blue-600 transition duration-150 delay-50 p-4 mt-2 rounded-2xl text-xl font-bold w-28"
            onClick={() => fetchData()}
          >
            Refresh
          </button>
        </div>
      </div>

      <div
        className={`${isLoading ? "mt-[22rem]" : "mt-[10rem]"}`}
        aria-hidden="true"
      />
    </>
  );
};

export default Server2;
