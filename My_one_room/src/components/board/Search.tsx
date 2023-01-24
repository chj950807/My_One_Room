import React, { useState, useRef, useEffect } from "react";
import DaumPostCode from "react-daum-postcode";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import EvaluationRating from "../board/EvaluationRating";
import { redux_address } from "../../redux/evaluate";

interface AddressData {
  address: string;
}
interface Datas{
  id: string;
  address: string;
}
export default function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const outside = useRef<any>(null);
  
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  
  let search_result = "";
  const EvaluationDatas = EvaluationRating();
  
  const DaumPostOpen = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOpenPostcode(true);
  };
  const selectAddress = (data: AddressData) => {
    setValue(data.address);
    setOpenPostcode(false);
  };
  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    EvaluationDatas.map((data: Datas) => {
      if (data.address == value) {
        search_result = data.address;
        dispatch(
          redux_address({
            address: data.address,
          })
        );
      }
    });

    
    if (search_result === "") {
      alert('해당 주소의 평가가 없습니다.')
    } else {
      //해당 방에대한 정보가 여러개 있을수 있으므로 수정해야함
      navigate(`/search`);
    }
  };

      useEffect(() => {
        document.addEventListener("mousedown", handlerOut);
        return () => {
          document.removeEventListener("mousedown", handlerOut);
        };
      }, []);

      const handlerOut = (event: MouseEvent) => {
        if (!outside.current?.contains(event.target)) {
          setOpenPostcode(false);
        }
      };

  
  
  
  return (
    <div className="mt-10">
      <div>
        <form onSubmit={SubmitHandler} className="flex gap-3">
          <input
            type="text"
            placeholder="주소 검색"
            value={value}
            className="input input-bordered w-full bg-violet-100"
            onClick={DaumPostOpen}
            readOnly
          />
          <button type="submit" className="border p-3 rounded-2xl text-white bg-gray-700">
            <BsSearch className="text-2xl"/>
          </button>
        </form>
      </div>
      <div className="mt-2 pr-16">
        {openPostcode && (
          <DaumPostCode
            onComplete={selectAddress}
            autoClose={false}
            className="border-black border-2 ml-2"
          />
        )}
      </div>
    </div>
  );
}
