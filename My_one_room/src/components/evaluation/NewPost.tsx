import React, { useEffect } from "react";

import { TfiPencil } from "react-icons/tfi";
import { BiMap } from "react-icons/bi";
import { auth } from "../logIn/UserData";
import Head from "../header/Head";
import Address from "./Address";
import Evaluation from "./Evaluation";
import { useSelector, useDispatch } from "react-redux";
import { sendEvaluateData } from "./sendEvaluateData";
import { useNavigate } from "react-router-dom";
import { post } from "../../redux/evaluate";

const INITIALSTATE = Array(12).fill(0);
export default function NewPost() {
  const result = useSelector((state: any) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log('dispatched?');
  console.log(result);
  
  useEffect(() => {
    dispatch(
      post({
        evaluates: INITIALSTATE.slice(),
        evaluate13: "",
        address: "",
      })
    );
  },[])
  let check = true;
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(result);
    e.preventDefault();
    console.log(result.evaluate.evaluates);

    //어떻게 해야 체크 안했을때를 찾을까
    for (let i = 0; i < 12; i++) {
      if (result.evaluate.evaluates[i] == 0 || result.evaluate.address =="") {
        alert("입력하지 않은 평가항목이 있습니다.");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        check = false;
        break;
      }
    }

    if (check) {
      const date = new Date();
      const day = ("0"+date.getDate()).slice(-2);
      const month = ("0" +(1+date.getMonth())).slice(-2);
      const year = date.getFullYear();
      const full_day = year +"-"+month+"-"+day
      sendEvaluateData(
        result.evaluate.evaluates,
        result.evaluate.evaluate13,
        result.evaluate.address,
        result.user.displayName,
        full_day
      );
      console.log(result);

      alert("평가해주셔서 감사합니다!");
      navigate("/");
    }
    
  };

  return (
    <div>
      <Head />
      <div className=" py-10 px-10 min-h-screen bg-violet-200 text-gray-800 font-jua text-lg">
        <div className="font-bold text-5xl desktop:whitespace-nowrap border-4 border-black card px-20 py-2 text-center mb-7">
          방 평가하기
        </div>
        <form onSubmit={onSubmitHandler}>
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
              <div className="mt-10">
                <button
                  className="btn btn-wide btn-primary text-lg"
                  type="submit"
                >
                  작성완료
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
