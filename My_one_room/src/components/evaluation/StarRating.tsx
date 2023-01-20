import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { evaluates } from "../../redux/evaluate";
interface Props {
  check: string;
  id: number;
}
const INITIALSTATE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default function App(props:Props) {

  const dispatch = useDispatch();
  const onClickStar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let attr_num;
    const attr_string = e.currentTarget.getAttribute("star-num");
    if (attr_string !== null ) {
      attr_num = Number(attr_string);

    }
    const input_star = document.getElementsByClassName(`${props.check}`);
    if (attr_num) {
      if (attr_num < INITIALSTATE[props.id-1]) {
        for (let i = 0; i < 5; i++) {
          input_star[i].classList.remove("text-yellow-400");
        }
      }
      for (let i = 0; i < attr_num; i++) {
        input_star[i].classList.add("text-yellow-400");
      }
      INITIALSTATE.splice(props.id - 1, 1, attr_num);
    }
    dispatch(
      evaluates({
        evaluates: INITIALSTATE,
      })
    );
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
