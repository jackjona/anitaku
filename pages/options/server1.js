import { useEffect, useState } from "react";
import TypeButton from "@/components/TypeButton";

const server1 = () => {
  const [imageType, setImageType] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/1/sfw/${imageType ? imageType : "waifu"}`, {
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
    }
  };

  useEffect(() => {
    fetchData();
  }, [imageType]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-10 text-center">Server 1</h1>
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
      </div>

      <div className="flex flex-col items-center mt-8">
        <h2 className="text-4xl font-bold capitalize">
          Filter
          <span className="font-semibold">{imageType && `: ${imageType}`}</span>
        </h2>
        <h3 className="text-lg pb-6">Narrow Down Your Search</h3>
      </div>
      <div className="flex flex-row flex-wrap items-start justify-center px-10">
        <TypeButton
          type="waifu"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="neko"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="shinobu"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="megumin"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="bully"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="cuddle"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />{" "}
        <TypeButton
          type="cry"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="hug"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="awoo"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="kiss"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="lick"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="pat"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="smug"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="bonk"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="yeet"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="blush"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="smile"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="wave"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="highfive"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="handhold"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="nom"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="bite"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="glomp"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="slap"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="kill"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="kick"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="happy"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="wink"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="poke"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="dance"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
        <TypeButton
          type="cringe"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={fetchData}
        />
      </div>
    </>
  );
};

export default server1;
