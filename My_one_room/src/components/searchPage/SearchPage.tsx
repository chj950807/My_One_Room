import React from "react";
import Head from "../header/Head";
import { useSelector } from "react-redux";
import EvaluationRating from "../board/EvaluationRating";
import { Link } from "react-router-dom";

interface Datas {
  id: string;
  displayName: string;
  detailaddress: string;
  score: string;
  date: string;
  address: string;
}
export default function SearchPage() {
  const result = useSelector((state: any) => state);
  const EvaluationDatas = EvaluationRating();
  
  return (
    <div>
      <Head />
      <div className=" py-10 px-10 min-h-screen bg-violet-200 text-gray-800 font-jua text-lg">
        <div className="font-bold text-5xl desktop:whitespace-nowrap border-4 border-black card px-20 py-2 text-center mb-7">
          검색 결과
        </div>

        <div className="hero-content text-center border-4 border-black bg-violet-100 min-w-full card">
          <div>
            <div className="font-bold text-3xl desktop:whitespace-nowrap border-4 border-black card px-20 py-2 mb-3">
              정보
            </div>
            <div className="border-collapse border-white border-4 rounded-2xl bg-gray-800 text-gray-100 ">
              <div>
                <ul className="grid grid-cols-smMainboard desktop:grid-cols-Mainboard grid-rows-1 border-b-2 text-lg font-bold font-jua h-16 ">
                  <li className="hidden desktop:flex"></li>
                  <li className="hidden desktop:flex items-center pl-3">
                    작성자
                  </li>
                  <li className="flex justify-center items-center">주소</li>
                  <li className="flex items-center">평점</li>
                  <li className="hidden desktop:flex items-center">게시일</li>
                </ul>
              </div>
              <div className="flex flex-col items-start pt-2 pb-32">
                {EvaluationDatas.map((data: Datas, idx: number) => {
                  if (result.evaluate.address == data.address) {
                    return (
                      <ul
                        key={data.id}
                        className="grid grid-cols-smMainboard desktop:grid-cols-Mainboard grid-rows-1 whitespace-nowrap text-lg pl-3 h-12 border-b border-gray-600 hover:border-2 hover:border-fuchsia-600 font-jua"
                      >
                        <li className="hidden desktop:flex items-center ">
                          {idx + 1}
                        </li>
                        <li className="hidden desktop:flex items-center">
                          {data.displayName}
                        </li>

                        <li className="flex items-center pr-5 desktop:pr-20">
                          <Link to={`/room/${data.id}`}>
                            {data.detailaddress}
                          </Link>
                        </li>

                        <li className="flex items-center">{data.score}</li>
                        <li className="hidden desktop:flex items-center">
                          {data.date}
                        </li>
                      </ul>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
