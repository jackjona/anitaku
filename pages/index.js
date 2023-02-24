import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const fetchData = async () => {
    const res = await fetch(`https://api.waifu.pics/sfw/waifu`);
    const data = await res.json();
    setImageURL(data.url);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>AniTaku</h1>
        <div className={styles.linkWrapper}>
          <h2 className={styles.link}>
            <a href="/api1">API 1</a>
          </h2>
          <h2 className={styles.link}>
            <a href="/api2">API 2</a>
          </h2>
          <h2 className={styles.link}>
            <a href="/api3">API 3</a>
          </h2>
          <h2 className={styles.link}>
            <a href="/gallery">Gallery</a>
          </h2>
          <h2 className={styles.link}>
            <a href="/random">Random</a>
          </h2>
        </div>
        <button
          className={styles.buttonText}
          onClick={() =>
            !showImage ? setShowImage(true) : setShowImage(false)
          }
        >
          {!showImage ? "Generate A Random Image" : "Hide Image"}
        </button>
        {showImage && (
          <div className={styles.imgURL}>
            <img src={imageURL} alt="" />
            <p>
              <b>Full Size Image:</b> <a href={imageURL}>{imageURL}</a>
            </p>
            <button className={styles.buttonText} onClick={() => fetchData()}>
              Refresh
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
