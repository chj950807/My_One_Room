import React from "react";
import { homedata } from "./dummy.json";

interface Datas {
  id: number;
  nickname: string;
  address: string;
  score: number;
  date: string;
}
export default function Mainboard() {
  console.log(homedata);
  return (
    <div>
      <div className="pt-7">
        <div className="overflow-x-autoflex flex flex-col  items-center ">

          <table className=" table table-zebra w-3/4  border-collapse border-white border-4">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>작성자</th>
                <th>주소</th>
                <th>평점</th>
                <th>게시일</th>
              </tr>
            </thead>
            <tbody>
              {homedata.map((data: Datas) => {
                return (
                  <tr key={data.id}>
                    <th>{data.id}</th>
                    <th>{data.nickname}</th>
                    <th>{data.address}</th>
                    <th>{data.score}</th>
                    <th>{data.date}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <h1 className="text-3xl font-bold bg-gray-600 md:bg-gray-100 font-sans">
        Hello World!
        </h1>
        <h2 className="text-7xl bg-indigo-100 desktop:bg-violet-600 font-woowa">
        안녕하세요!
        </h2>
        <h2 className="text-7xl bg-indigo-100 desktop:bg-violet-600 font-dohyeon">
        안녕하세요!
        </h2>
    <input type="range" min="0" max="100" className="range range-primary" /> */}
      </div>
    </div>
  );
}
