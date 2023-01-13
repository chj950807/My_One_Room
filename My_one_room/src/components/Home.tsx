import React from "react";
import Filter from "./board/Filter";
import Mainboard from "./board/Mainboard";
import NewpostButton from "./board/NewpostButton";
import Head from "./header/Head";
import { auth } from "./logIn/UserData";
export default function Home() {
  console.log(auth.currentUser);
  return (
    <div>
          <Head />
          <Filter />
          <NewpostButton />
          <Mainboard />
    </div>
  );
}
