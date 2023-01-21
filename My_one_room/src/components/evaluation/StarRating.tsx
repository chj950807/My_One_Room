import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { evaluates } from "../../redux/evaluate";
interface Props {
  check: string;
  id: number;
}
const colors = {
  yellow: "#FACC15",
  grey:"#a9a9a9"
}

export default function StarRating(props: Props) {
  const result = useSelector((state: any) => state);
  const stars = Array(5).fill(0);
  const dispatch = useDispatch();
  
  const handleClick = (value: number) => {
    result.evaluate.evaluates.splice(props.id - 1, 1, value);
    dispatch(evaluates({ evaluates: result.evaluate.evaluates }));
  };

  return (
    <div className="flex text-7xl justify-evenly text-gray-300 w-full rating">
      {stars.map((_:any, idx:number) => {
        return (
          <FaStar
            key={idx}
            style={{ cursor: "pointer" }}
            color={result.evaluate.evaluates[props.id-1] > idx ? colors.yellow : colors.grey}
            onClick={() => handleClick(idx + 1)}
          />
        );
      })}
    </div>
  );
}
