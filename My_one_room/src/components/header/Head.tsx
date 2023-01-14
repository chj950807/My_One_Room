import React from "react";
import LoginButton from "./LoginButton";
import Search from "./Search";
import Title from "./Title";

export default function Head() {

  return (
    <div>
      <div className="navbar bg-base-100 gap-2 w-full rounded-b-2xl">
        <Title />
        <div className="navbar-end gap-2">
          <Search />
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
