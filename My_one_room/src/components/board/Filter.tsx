import React, { useEffect, useState } from "react";

export default function Filter() {
  const [score, setScore] = useState<string>('1');
  const [date, setDate] = useState<string>('1');
  useEffect(() => {
    console.log('Score:'+score);
    console.log('Date:'+date)
  }, [score, date])

  const onHandleScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setScore(e.currentTarget.value);
  };
  const onHandleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setDate(e.currentTarget.value);
  };

  return (
    <div className="pt-10 flex justify-center ">
      <div className="text-lg font-jua text-gray-800">
        <div className="pb-1 pl-8">필터</div>
        <div className="border bg-violet-300 px-10 py-5 border-4 border-white rounded-3xl text-gray-800">
          <form className="desktop:flex">
            <div className="flex flex-col text-base p-2">
              <label htmlFor="rating" className="flex justify-center pb-2 ">
                평점(이상)
              </label>
              <input
                onChange={onHandleScore}
                id="rating"
                type="range"
                min="0"
                max="5"
                value="0"
                className="range range-info border-2 border-white"
                step="0.1"
              />
              <div className="w-80 flex justify-between text-xs px-2 pt-1">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
            <div className="desktop:pl-10 flex flex-col text-base p-2">
              <label htmlFor="rating" className="flex justify-center pb-2 ">
                게시일
              </label>
              <input
                onChange={onHandleDate}
                id="rating"
                type="range"
                min="0"
                max="5"
                value="5"
                className="range range-info border-2 border-white"
                step="1"
              />
              <div className="w-80 flex justify-between text-xs px-2 pt-1">
                <span>~1개월</span>
                <span>~1년</span>
                <span>~3년</span>
                <span>~5년</span>
                <span>전체</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
