import React from "react";
import { useSelector } from "react-redux";
import { auth } from "./logIn/UserData";
import Filter from "./board/Filter";
import Mainboard from "./board/Mainboard";
import Head from "./header/Head";

export default function Home() {
  const result =useSelector((state) =>state)
  console.log(result);
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
