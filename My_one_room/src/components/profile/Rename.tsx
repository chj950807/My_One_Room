import React, { useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../logIn/UserData";

export default function Rename() {
  const [nickname, setNickname] = useState<string>("");
    const [print, setPrint] = useState<string | null | undefined>(auth.currentUser?.displayName);

  const onNicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.currentTarget.value);
  };

  const onClickRename = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked");
    let item = document.getElementById("hidden_item");
    item?.classList.remove("hidden");
    let rename_button = document.getElementById("rename_button_item");
    rename_button?.classList.add("hidden");
  };

  const onRenameSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nickname !== auth.currentUser?.displayName && auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: nickname });
        setPrint(auth.currentUser.displayName);
    }

    let item = document.getElementById("hidden_item");
    item?.classList.add("hidden");
    let rename_button = document.getElementById("rename_button_item");
    rename_button?.classList.remove("hidden");
  };
    
    
    return (
      <div className="text-blue-600 flex">
        <span className="pl-1 text-black">{print}</span>
        <div id="hidden_item" className="hidden ">
          <form onSubmit={onRenameSubmit}>
            <input
              type="text"
              className="w-20 rounded-md bg-gray-300 border border-blue-400 ml-3 mr-1 pl-1 text-black"
              onChange={onNicknameHandler}
            />
            <button
              className="border border-black px-1 rounded-lg text-sm"
              type="submit"
            >
              변경하기
            </button>
          </form>
        </div>
        <button
          id="rename_button_item"
          className=" border border-black px-1 rounded-lg text-sm ml-2"
          onClick={onClickRename}
        >
          수정
        </button>
      </div>
    );
}
