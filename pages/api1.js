import { useEffect, useState } from "react";
import TypeButton from "../components/TypeButton";

const api = () => {
  const [imageType, setImageType] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.waifu.pics/sfw/${imageType ? imageType : "waifu"}`
      );
      const data = await res.json();
      setImageURL(data.url);
    };

    fetchData();
  }, [imageType]);

  const handleClick = async () => {
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${imageType}`, {
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
      setErr(err.message);
    } finally {
      console.log("Done");
    }
  };

  return (
    <div>
      <main>
        <h1>Waifu.pics API</h1>
        <img src={imageURL} alt="" />
        <h2>{imageType && imageType} Filter</h2>
        {!imageType && <p>Narrow Down Your Search</p>}
        <TypeButton
          type="waifu"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="neko"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="shinobu"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="megumin"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="bully"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="cuddle"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />{" "}
        <TypeButton
          type="cry"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="hug"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="awoo"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="kiss"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="lick"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="pat"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="smug"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="bonk"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="yeet"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="blush"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="smile"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="wave"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="highfive"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="handhold"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="nom"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="bite"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="glomp"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="slap"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="kill"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="kick"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="happy"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="wink"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="poke"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="dance"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
        <TypeButton
          type="cringe"
          imageType={imageType}
          setImageType={setImageType}
          handleClick={handleClick}
        />
      </main>
    </div>
  );
};

export default api;
