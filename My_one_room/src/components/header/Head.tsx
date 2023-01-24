import React from "react";
import LoginButton from "./LoginButton";
import Title from "./Title";

export default function Head() {

  return (
    <div>
      <div className="navbar bg-base-100 gap-2 w-full rounded-b-2xl">
        <Title />
        <div className="navbar-end gap-10">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
