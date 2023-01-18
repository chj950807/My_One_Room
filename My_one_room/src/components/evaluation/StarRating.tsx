import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  check: string;
  id: number;
  getStars: any;
}

export default function App(props: Props) {
  const [stars, setStars] = useState<number[]>([0, 0]);
  const sendStarsValue = () => {
    props.getStars(stars);
  };

  const onClickStar = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let attr_num;
    const attr_string = e.currentTarget.getAttribute("star-num");
    if (attr_string !== null) {
      attr_num = Number(attr_string);
      setStars([props.id, attr_num]);
    }
    const input_star = document.getElementsByClassName(`${props.check}`);
    if (attr_num) {
      if (attr_num > stars[1]) {
        for (let i = 0; i < 5; i++) {
          input_star[i].classList.remove("text-yellow-400");
        }
      }
      for (let i = 0; i < attr_num; i++) {
        input_star[i].classList.add("text-yellow-400");
      }
    }
  };

  return (
    <div className="flex text-7xl justify-evenly text-gray-300 w-full rating">
      <button
        onClick={onClickStar}
        type="button"
        className={props.check}
        star-num="1"
      >
        <FaStar />
      </button>
      <button
        onClick={onClickStar}
        type="button"
        className={props.check}
        star-num="2"
      >
        <FaStar />
      </button>
      <button
        onClick={onClickStar}
        type="button"
        className={props.check}
        star-num="3"
      >
        <FaStar />
      </button>
      <button
        onClick={onClickStar}
        type="button"
        className={props.check}
        star-num="4"
      >
        <FaStar />
      </button>
      <button
        onClick={onClickStar}
        type="button"
        className={props.check}
        star-num="5"
      >
        <FaStar />
      </button>
    </div>
  );
}
