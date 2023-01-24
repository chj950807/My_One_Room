import React from "react";
import Search from "./Search";

export default function Filter() {
  return (
    <div>
      <div className="text-lg font-jua text-gray-800 pt-10 flex justify-center">
        <div className="border bg-violet-300 px-10 py-5 border-4 border-white rounded-3xl text-gray-800 desktop:w-3/5">
          <div>주소 검색</div>
          <Search />
        </div>
      </div>
    </div>
  );
}
