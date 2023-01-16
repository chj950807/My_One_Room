import React from "react";
import Head from "../header/Head";
import Address from "./Address";
import { auth } from "../logIn/UserData";
import { TfiPencil } from "react-icons/tfi";
import { BiMap } from "react-icons/bi";
import Evaluation from "./Evaluation";
import EvaluationData from "./evaldata/EvaluationData";
export default function NewPost() {

 EvaluationData()
  return (
    <div>
      <Head />
      <div className=" py-10 px-10 min-h-screen bg-violet-200 text-gray-800 font-jua text-lg">
        <div className="font-bold text-5xl desktop:whitespace-nowrap border-4 border-black card px-20 py-2 text-center mb-7">
          방 평가하기
        </div>
        <div className="hero-content text-center border-4 border-black bg-violet-100 min-w-full card">
          <div className="max-w-md ">
            <div className="font-bold text-3xl desktop:whitespace-nowrap border-4 border-black card px-20 py-2">
              정보
            </div>
            <div className="flex flex-col items-start pt-2 pb-32">
              <div className="flex flex-row items-center">
                <TfiPencil className=" font-sans" />
                <span className="pl-1 py-10 ">닉네임:</span>
                <span className="pl-1 text-base  text-blue-600">
                  {auth.currentUser?.displayName}
                </span>
              </div>
              <div className="flex flex-row items-center">
                <BiMap className=" font-sans" />
                <span className="pl-1 whitespace-nowrap">평가할 방 주소</span>
              </div>
              <Address />
            </div>
          </div>
        </div>
        <div className=" py-10 px-10 min-h-screen bg-violet-200 text-gray-800 font-jua text-lg">
          <div className="hero-content text-center border-4 border-black bg-violet-100 min-w-full card">
            <div className="w-3/4 flex items-center flex-col">
              <div className="w-2/3 text-center text-3xl border-4 border-black bg-violet-100 card mb-5 ">
                평가항목
              </div>
              <Evaluation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
