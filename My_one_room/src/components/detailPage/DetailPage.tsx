import React from "react";
import Head from "../header/Head";
import { TfiPencil } from "react-icons/tfi";
import { BiMap } from "react-icons/bi";
import EvaluationRating from "../board/EvaluationRating";
import { EvaluationData } from "../evaluation/EvaluationData.json";
import StarRated from "./StarRated";
import Comments from "./Comments";
import { auth } from "../logIn/UserData";
import { Link } from "react-router-dom";
interface Question {
  id: number;
  check: string;
  detail: string;
  message: string[];
}

interface Datas {
  id: string;
  displayName: string;
  detailaddress: string;
  score: string;
  date: string;
  evaluate13: string;
  evaluate1: number;
  evaluate2: number;
  evaluate3: number;
  evaluate4: number;
  evaluate5: number;
  evaluate6: number;
  evaluate7: number;
  evaluate8: number;
  evaluate9: number;
  evaluate10: number;
  evaluate11: number;
  evaluate12: number;
}
export default function DetailPage() {
  const EvaluationDatas = EvaluationRating();

  function getLastpath() {
    let params = window.location.pathname;
    let realpath = params.substring(6);
    return realpath;
  }

    let user = auth.currentUser?.email;
    console.log(user)
  const path = getLastpath();

  if (user === null ||user===undefined) {
    return (
      <div>
        <Head />
        <div className=" py-10 px-10 min-h-screen bg-violet-200 text-gray-800 font-jua text-lg">
          <div className="font-bold text-5xl desktop:whitespace-nowrap border-4 border-black card px-20 py-2 text-center mb-7">
            방 세부 정보
          </div>

          <div className="hero-content text-center border-4 border-black bg-violet-100 min-w-full card">
            <div className="max-w-md ">
              <div className="font-bold text-3xl desktop:whitespace-nowrap border-4 border-black card px-20 py-2">
                기본 정보
              </div>
              <div className="flex flex-col items-start pt-2 pb-10 desktop:pb-32 ">
                <div className="flex flex-row items-center">
                  <TfiPencil className=" font-sans" />

                  <span className="pl-1 py-10 ">작성자:</span>

                  {EvaluationDatas.map((data: Datas) => {
                    if (data.id == path) {
                      return (
                        <span
                          key={data.id}
                          className="pl-1 text-base  text-blue-600"
                        >
                          {data.displayName}
                        </span>
                      );
                    }
                  })}
                </div>
                <div className="flex flex-row items-center">
                  <BiMap className=" font-sans" />
                  <span className="pl-1 whitespace-nowrap">방 주소:</span>
                  {EvaluationDatas.map((data: Datas) => {
                    if (data.id == path) {
                      return (
                        <span
                          key={data.id}
                          className="pl-1 text-base  text-blue-600"
                        >
                          {data.detailaddress}
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className=" py-10 px-10 min-h-screen bg-violet-200 text-gray-800 font-jua text-lg">
            <div className="hero-content text-center border-4 border-black bg-violet-100 min-w-full card  ">
              <div className="w-3/4 flex items-center flex-col">
                <div className="desktop:w-2/3 text-center text-3xl border-4 border-black bg-violet-100 card px-5 pt-5">
                  <span className="pb-32">평가 내용</span>
                  <div>
                    <Link to={"/login"}>
                      <span className="text-blue-700">로그인</span>
                    </Link>
                    <span className="pl-2 text-red-500">
                      후 열람가능 합니다.
                    </span>
                  </div>
                  <div className="pt-3 blur-3xl">
                    {EvaluationDatas.map((datas: Datas) => {
                      if (datas.id == path) {
                        {
                          return EvaluationData.map((data: Question) => {
                            return (
                              <div key={data.id}>
                                <div className="text-center text-lg border-4 border-black bg-white card flex flex-col items-start pl-5 mb-2 py-1">
                                  <p>
                                    {data.id}. {data.detail}
                                  </p>
                                </div>
                                <div className="flex justify-evenly mb-3">
                                  <StarRated
                                    key={data.id}
                                    id={data.id}
                                    evaluate1={datas.evaluate1}
                                    evaluate2={datas.evaluate2}
                                    evaluate3={datas.evaluate3}
                                    evaluate4={datas.evaluate4}
                                    evaluate5={datas.evaluate5}
                                    evaluate6={datas.evaluate6}
                                    evaluate7={datas.evaluate7}
                                    evaluate8={datas.evaluate8}
                                    evaluate9={datas.evaluate9}
                                    evaluate10={datas.evaluate10}
                                    evaluate11={datas.evaluate11}
                                    evaluate12={datas.evaluate12}
                                  />
                                </div>
                                <div className="text-sm flex justify-evenly pl-1 mb-2">
                                  <span>{data.message[0]}</span>
                                  <span>{data.message[1]}</span>
                                  <span>{data.message[2]}</span>
                                  <span>{data.message[3]}</span>
                                  <span>{data.message[4]}</span>
                                </div>
                              </div>
                            );
                          });
                        }
                      }
                    })}

                    <div className="text-center text-lg border-4 border-black bg-white card flex flex-col items-start pl-5 py-1 ">
                      <p>
                        13.그 외 좋았던 점, 불편했던 점 자유롭게 적어주세요!!
                      </p>
                    </div>
                    <div className="flex pt-2 mb-10">
                      {EvaluationDatas.map((data: Datas) => {
                        if (data.id == path) {
                          return (
                            <span
                              key={data.id}
                              className="pl-1 text-base  text-blue-600"
                            >
                              {data.evaluate13}
                            </span>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Comments user={user} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Head />
        <div className=" py-10 px-10 min-h-screen bg-violet-200 text-gray-800 font-jua text-lg">
          <div className="font-bold text-5xl desktop:whitespace-nowrap border-4 border-black card px-20 py-2 text-center mb-7">
            방 세부 정보
          </div>

          <div className="hero-content text-center border-4 border-black bg-violet-100 min-w-full card">
            <div className="max-w-md ">
              <div className="font-bold text-3xl desktop:whitespace-nowrap border-4 border-black card px-20 py-2">
                기본 정보
              </div>
              <div className="flex flex-col items-start pt-2 pb-10 desktop:pb-32 ">
                <div className="flex flex-row items-center">
                  <TfiPencil className=" font-sans" />

                  <span className="pl-1 py-10 ">작성자:</span>

                  {EvaluationDatas.map((data: Datas) => {
                    if (data.id == path) {
                      return (
                        <span
                          key={data.id}
                          className="pl-1 text-base  text-blue-600"
                        >
                          {data.displayName}
                        </span>
                      );
                    }
                  })}
                </div>
                <div className="flex flex-row items-center">
                  <BiMap className=" font-sans" />
                  <span className="pl-1 whitespace-nowrap">방 주소:</span>
                  {EvaluationDatas.map((data: Datas) => {
                    if (data.id == path) {
                      return (
                        <span
                          key={data.id}
                          className="pl-1 text-base  text-blue-600"
                        >
                          {data.detailaddress}
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className=" py-10 px-10 min-h-screen bg-violet-200 text-gray-800 font-jua text-lg">
            <div className="hero-content text-center border-4 border-black bg-violet-100 min-w-full card  ">
              <div className="w-3/4 flex items-center flex-col">
                <div className="desktop:w-2/3 text-center text-3xl border-4 border-black bg-violet-100 card px-5 pt-5">
                  평가 내용
                  <div className="pt-3">
                    {EvaluationDatas.map((datas: Datas) => {
                      if (datas.id == path) {
                        {
                          return EvaluationData.map((data: Question) => {
                            return (
                              <div key={data.id}>
                                <div className="text-center text-lg border-4 border-black bg-white card flex flex-col items-start pl-5 mb-2 py-1">
                                  <p>
                                    {data.id}. {data.detail}
                                  </p>
                                </div>
                                <div className="flex justify-evenly mb-3">
                                  <StarRated
                                    key={data.id}
                                    id={data.id}
                                    evaluate1={datas.evaluate1}
                                    evaluate2={datas.evaluate2}
                                    evaluate3={datas.evaluate3}
                                    evaluate4={datas.evaluate4}
                                    evaluate5={datas.evaluate5}
                                    evaluate6={datas.evaluate6}
                                    evaluate7={datas.evaluate7}
                                    evaluate8={datas.evaluate8}
                                    evaluate9={datas.evaluate9}
                                    evaluate10={datas.evaluate10}
                                    evaluate11={datas.evaluate11}
                                    evaluate12={datas.evaluate12}
                                  />
                                </div>
                                <div className="text-sm flex justify-evenly pl-1 mb-2">
                                  <span>{data.message[0]}</span>
                                  <span>{data.message[1]}</span>
                                  <span>{data.message[2]}</span>
                                  <span>{data.message[3]}</span>
                                  <span>{data.message[4]}</span>
                                </div>
                              </div>
                            );
                          });
                        }
                      }
                    })}

                    <div className="text-center text-lg border-4 border-black bg-white card flex flex-col items-start pl-5 py-1 ">
                      <p>
                        13.그 외 좋았던 점, 불편했던 점 자유롭게 적어주세요!!
                      </p>
                    </div>
                    <div className="flex pt-2 mb-10">
                      {EvaluationDatas.map((data: Datas) => {
                        if (data.id == path) {
                          return (
                            <span
                              key={data.id}
                              className="pl-1 text-base  text-blue-600"
                            >
                              {data.evaluate13}
                            </span>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Comments user={user} />
          </div>
        </div>
      </div>
    );
  }
}
