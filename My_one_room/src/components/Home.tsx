import React from "react";
import Filter from "./board/Filter";
import Mainboard from "./board/Mainboard";
import Head from "./header/Head";

export default function Home() {
  return (
    <div>
        <div className="bg-violet-200">
          <Head />
          <Filter />
          <Mainboard />
        </div>
    </div>
  );
}
