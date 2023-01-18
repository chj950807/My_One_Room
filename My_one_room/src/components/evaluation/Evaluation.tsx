import React, { useState } from "react";
import { EvaluationData } from "./EvaluationData.json";
import StarRating from "./StarRating";
interface Datas {
  id: number;
  check: string;
  detail: string;
  message: string[];
}

interface Props {
  getEvals: any;
  getEval13: any;
}
export default function Evaluation(props: Props) {
  const [eval13, setEval13] = useState<string>("");
  const [stars, setStars] = useState<number[]>([0,0]);
  const [evals, setEvals] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const sendEval13Value = () => {
    props.getEval13(evals);
  };
  const sendEvalsValue = () => {
    props.getEvals(evals);
  };

  const getStars = (stars: number[]) => {
    setStars(stars);
  };

  console.log(stars);
  const onEvaluateOthers = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setEval13(e.currentTarget.value);
    sendEval13Value();
  };
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  arr[stars[0]-1] =stars[1];
  console.log(arr);
//stars[0],star[1]
  // useState(() => {
  //   let tmp = [...evals];
  //   tmp[stars[0]] = stars[1];
  //   setEvals(tmp);
  //   console.log(evals);
  // },[]);


  return (
    <div className="min-w-full">
      {EvaluationData.map((data: Datas) => {
        return (
          <div key={data.id}>
            <div className="text-center text-lg border-4 border-black bg-white card flex flex-col items-start pl-5 mb-2 py-1 ">
              <p>
                {data.id}. {data.detail}
              </p>
            </div>
            <div className="flex justify-evenly mb-3">
              <StarRating
                key={data.id}
                check={data.check}
                id={data.id}
                getStars={getStars}
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
      })}
      <div className="text-center text-lg border-4 border-black bg-white card flex flex-col items-start pl-5 mb-2 py-1 ">
        <p>13.그 외 좋았던 점, 불편했던 점 자유롭게 적어주세요!!</p>
      </div>
      <div>
        <textarea
          className="bg-gray-100 border border-black rounded-lg w-full h-20"
          onChange={onEvaluateOthers}
        ></textarea>
      </div>
    </div>
  );
}
