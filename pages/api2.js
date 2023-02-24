import Router from "next/router";

const api2 = () => {
  const refreshPage = () => Router.reload();
  return (
    <div>
      <h1>Public Api.bi (pic.re)</h1>
      <img src="https://pic.re/image" alt="" />
      <button onClick={refreshPage}>Refresh</button>
    </div>
  );
};

export default api2;
