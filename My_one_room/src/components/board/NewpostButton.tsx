import React from "react";
import { Link } from "react-router-dom";
export default function NewpostButton() {
  return (
    <div className="flex justify-end pt-6 pr-5 desktop:pr-0 desktop:flex desktop:justify-end desktop:w-5/6 ">
      <Link to={"/NewPost"}>
        <button className="btn-warning btn btn-sm border border-white">
          새글등록
        </button>
      </Link>
    </div>
  );
}
