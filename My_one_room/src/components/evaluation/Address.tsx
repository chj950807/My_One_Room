import React, { useState, useRef, useEffect } from "react";
import DaumPostCode from "react-daum-postcode";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDispatch,useSelector } from "react-redux";
import { detailaddress, redux_address } from "../../redux/evaluate";
import { LoginSuccess } from "../../redux/user";
interface AddressData {
  address: string;
}

export default function Address() {
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const result = useSelector((state: any) => state);
  
  const dispatch = useDispatch();
  const outside = useRef<any>(null);

  const Localstorage_email = localStorage.getItem("email");
  const Localstorage_displayName = localStorage.getItem("displayName");
  const AddressClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenPostcode(true);
  };
  const selectAddress = (data: AddressData) => {
    setOpenPostcode(false);
    dispatch(
      redux_address({
      address: data.address,
    }))
    dispatch(
      LoginSuccess({
        email: Localstorage_email,
        displayName: Localstorage_displayName,
      })
    );
  };

  const DetailAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let real_addr = result.evaluate.address+ " " + e.currentTarget.value;
    dispatch(
      detailaddress({
        detailaddress: real_addr,
      })
    );
  };
 
  useEffect(() => {
    result.evaluate.address ? setShowDetail(true) : setShowDetail(false);
  }, [result.evaluate.address]);

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
    <div>
      <div className="desktop:flex flex-start pl-5 text-base text-blue-600 whitespace-nowrap desktop:items-center">
        <span className="pr-2">{result.evaluate.address}</span>
        <div className="desktop:flex desktop:flex-start  ">
          {showDetail && (
            <input
              placeholder="??????????????????"
              type="text"
              className="rounded-lg bg-gray-200 border-2 border-black pl-2"
              onChange={DetailAddressHandler}
            />
          )}
        </div>
      </div>

      <div className="flex pt-3">
        <button
          onClick={AddressClick}
          className="btn btn-square btn-primary"
          type="button"
        >
          <HiMagnifyingGlass className="text-xl font-bold text-white" />
        </button>
        <div>
          {openPostcode && (
            <DaumPostCode
              onComplete={selectAddress}
              autoClose={false}
              className="border-black border-2 ml-2"
            />
          )}
        </div>
      </div>
    </div>
  );
}
