import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  check: string;
}

export default function App(props: Props) {
  const [stars, setStars] = useState(0);

  const onClickStar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const attr_string = e.currentTarget.getAttribute("star-num");
    let attr_num;
    if (attr_string !== null) {
      attr_num = Number(attr_string);
    }
    const input_star = document.getElementsByClassName(`${props.check}`);
    let current_Star = 0;
    if (attr_num) {
      if (attr_num > current_Star) {
        for (let i = 0; i < 5; i++) {
          input_star[i].classList.remove("text-yellow-400");
        }
      }
      for (let i = 0; i < attr_num; i++) {
        input_star[i].classList.add("text-yellow-400");
        current_Star = i;
        setStars(i);
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
