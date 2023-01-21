import React from "react";
import Filter from "./board/Filter";
import Mainboard from "./board/Mainboard";
import Head from "./header/Head";
import EvaluationRating from "./evaluation/EvaluationRating";
export default function Home() {
  //firestore 저장정보
  // EvaluationRating();
  return (
    <div>
        <div className="bg-violet-200">
          <Head />
          <Filter />
          <Mainboard />
        </div>
    </div>
  );
}
