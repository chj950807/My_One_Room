import React from "react";
import { useDispatch } from "react-redux";
import { EvaluationData } from "./EvaluationData.json";
import StarRating from "./StarRating";
import { evaluating13 } from "../../redux/evaluate";
interface Datas {
  id: number;
  check: string;
  detail: string;
  message: string[];
}


export default function Evaluation() {
  const dispatch = useDispatch();

  const onEvaluateOthers = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    dispatch(
      evaluating13({
        evaluate13: e.currentTarget.value,
      })
    );
  };

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
