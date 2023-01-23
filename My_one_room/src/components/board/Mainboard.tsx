import React, { useEffect, useState } from "react";
import { database } from "../logIn/UserData";
import { collection, onSnapshot} from "firebase/firestore";
import { Link } from "react-router-dom";
import NewpostButton from "./NewpostButton";
import Pagination from "./Pagination";
import EvaluationRating from "./EvaluationRating";
interface Datas {
  id: string,
  displayName: string,
  detailaddress: string,
  score: string,
  date: string
}

export default function Mainboard() {
  //문제생기면 아래 풀기
  // const [evaluationdatas, setEvaluationDatas] = useState<any>([{ displayName: "", detailaddress: "", score: "", date: "" , id:"initial"}]);
  const [page, setPage] = useState(1);
  const limit = 15;
  const offset = (page - 1) * limit;
  //문제생기면 아래 삭제
  const evaluationdatas = EvaluationRating();
  console.log(evaluationdatas);
  //문제생기면 아래 풀기
  // useEffect(
  //   () =>
  //     onSnapshot(collection(database, "evaluations"), (snapshot) =>
  //       setEvaluationDatas(
  //         snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //       )
  //     ),
  //   []
  // );

  return (
    <div>
      <div className="pt-7">
        <div className="text-black text-3xl font-bold font-jua desktop:w-5/6 ">
          <NewpostButton />
        </div>
        <div className="overflow-x-autoflex flex flex-col items-center pb-32">
          <div className="border-collapse border-white border-4 rounded-2xl bg-gray-800  ">
            {/* <!-- head --> */}
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

            <div>
              {evaluationdatas
                .slice(offset, offset + limit)
                .map((data: Datas, idx: number) => (
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
                      <Link to={`/room/${data.id}`}>{data.detailaddress}</Link>
                    </li>

                    <li className="flex items-center">{data.score}</li>
                    <li className="hidden desktop:flex items-center">
                      {data.date}
                    </li>
                  </ul>
                ))}
            </div>
          </div>
          <div>
            <Pagination
              total={evaluationdatas.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
