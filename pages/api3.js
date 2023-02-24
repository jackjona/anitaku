import { useEffect, useState } from "react";
import TypeButton from "../components/TypeButton";

const api3 = () => {
  const [imageURL, setImageURL] = useState({});
  const [imageType, setImageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showGifs, setShowGifs] = useState(false);

  const fetchData = async () => {
    try {
      // Exclude nsfw files using query string
      const res = await fetch(
        `https://api.waifu.im/search/?is_nsfw=false${
          showGifs ? `&gif=true` : `&gif=false`
        }${imageType && `&included_tags=${imageType}`}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Accept-Version": "v4",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Error! status: ${res.status}`);
      }

      const data = await res.json();
      setImageURL(data.images[0].url);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [imageType]);

  const includeGifs = () => {
    setShowGifs(true);
    fetchData();
  };

  const excludeGifs = () => {
    setShowGifs(true);
    fetchData();
  };

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.waifu.im/search/?is_nsfw=false${
          imageType && `&included_tags=${imageType}`
        }`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Accept-Version": "v4",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Error! status: ${res.status}`);
      }

      const data = await res.json();
      setImageURL(data.images[0].url);
    } catch (err) {
      console.error(err.message);
    } finally {
      console.log("Image Loaded Successfully");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <main>
        <h1>WAIFU.IM</h1>
        {isLoading && <h1>Your Image Is Loading...</h1>}
        {imageURL && <img src={imageURL} alt="" />}

        <h2>{!imageType ? "No Filter" : imageType}</h2>
        <TypeButton
          type="maid"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="waifu"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="marin-kitagawa"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="mori-calliope"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="raiden-shogun"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="selfies"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="uniform"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
      </main>
      {!showGifs ? (
        <button onClick={includeGifs}>Include Gifs</button>
      ) : (
        <button onClick={excludeGifs}>Exclude Gifs</button>
      )}
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
};

export default api3;
