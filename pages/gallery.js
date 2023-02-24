export default function Gallery({ imgURL }) {
  return (
    <div>
      <main>
        <h1 className="title">Gallery</h1>
        {imgURL.files.map((files, i) => (
          <div key={i} className="hidden">
            <img
              src={files}
              height="800px"
              width="500px"
              alt=""
              loading="lazy"
            />
          </div>
        ))}
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        title {
          margin: 0 0 1rem;
          line-height: 1.15;
          font-size: 3.6rem;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

Gallery.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.waifu.pics/many/sfw/waifu", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ exclude: [] }),
  });
  const json = await res.json();
  return { imgURL: json };
};
