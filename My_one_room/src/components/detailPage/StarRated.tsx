import React from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  id: number;
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
const colors = {
  yellow: "#FACC15",
  grey:"#a9a9a9"
}

export default function StarRating(props: Props) {
  const datas = [
    props.evaluate1,
    props.evaluate2,
    props.evaluate3,
    props.evaluate4,
    props.evaluate5,
    props.evaluate6,
    props.evaluate7,
    props.evaluate8,
    props.evaluate9,
    props.evaluate10,
    props.evaluate11,
    props.evaluate12,
  ];

  const stars = Array(5).fill(0);
  return (
    <div className="flex text-7xl justify-evenly text-gray-300 w-full rating ">
      {stars.map((_:any, idx:number) => {
        return (
          <FaStar
            key={idx}
            color={datas[props.id-1] > idx ? colors.yellow : colors.grey}
          />
        );
      })}
    </div>
  );
}
