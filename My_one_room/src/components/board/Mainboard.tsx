import React, { useEffect, useState } from "react";
import { database } from "../logIn/UserData";
import { collection, onSnapshot,doc,Timestamp } from "firebase/firestore";

import NewpostButton from "./NewpostButton";
interface Datas {
  id?: string;
  displayName: string;
  address: string;
  score: string;
  date: string;
}
export default function Mainboard() {
  const [evaluationdatas, setEvaluationDatas] = useState<any>([{ displayName: "", address: "", score: "", date: "" , id:"initial"}]);
  
  console.log(evaluationdatas);

  
  useEffect(
    () =>
      onSnapshot(collection(database, "evaluations"), (snapshot) =>
        setEvaluationDatas(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );
  
  return (
    <div>
      <div className="pt-7">
        <div className="text-black text-3xl font-bold font-jua desktop:w-5/6 ">
          <NewpostButton />
        </div>
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
              {evaluationdatas.map((data: any, idx: number) => (
                <tr key={data.id}>
                  <th>{idx + 1}</th>
                  <th>{data.displayName}</th>
                  <th>{data.address}</th>
                  <th>{data.score}</th>
                  <th>{data.date}</th>
                </tr>
              ))}
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
