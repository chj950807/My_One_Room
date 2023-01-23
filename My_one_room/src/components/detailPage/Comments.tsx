import React from "react";

export default function Comments() {
  return (
    <div>
      <div className="text-center border-4 border-black bg-violet-100 card">
        <div className="">
          <div className="font-bold text-3xl desktop:whitespace-nowrap border-4 border-black card py-2 mt-3 mx-10">
            Comments
          </div>
          <div className="flex flex-col items-start pt-5 pb-10 mx-20 desktop:pb-32 ">
            <div className="flex flex-row items-center border-2 border-black  w-full">
              <span className="pl-2 whitespace-nowrap">작성자1</span>
              <div className="pl-10 whitespace-nowrap">훌륭해요</div>
            </div>
          </div>
        </div>
        <div className=" w-full p-10">
          <div>
            <textarea className="bg-gray-100 border border-black rounded-lg h-20 w-full"></textarea>
            <button className="btn btn-block btn-primary">댓글 작성</button>
          </div>
        </div>
      </div>
    </div>
  );
}