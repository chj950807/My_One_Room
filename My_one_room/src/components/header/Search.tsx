import React from "react";

export default function Search() {
  return (
    <div className="flex-none hidden smallmobile:block smallmobile:w-20 mobile:block mobile:w-20 desktop:block desktop:w-48 ">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
    </div>
  );
}
