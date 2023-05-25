import DetailsUser from "./context";
import React, { useContext } from "react";

function Home() {
  const detailsUser = useContext(DetailsUser);

  console.log(detailsUser);
  return (
    <div>
      <h1>Home sweet home</h1>
      <p>{detailsUser.firstName}</p>
      <p>{detailsUser.lastName}</p>
    </div>
  );
}

export default Home;
