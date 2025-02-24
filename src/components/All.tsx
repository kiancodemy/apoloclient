import React from "react";
import Prodcuts from "./Prodcuts";
import Filter from "./Filter";
export default function All() {
  return (
    <div className="container max-w-full flex flex-col grow">
      <Filter></Filter>
      <Prodcuts></Prodcuts>
    </div>
  );
}
