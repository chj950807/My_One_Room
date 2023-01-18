
import React, { useState, useRef, useEffect } from "react";
import DaumPostCode from "react-daum-postcode";
import { HiMagnifyingGlass } from "react-icons/hi2";
interface AddressData {
  address: string;
}
interface Props {
  getAddress: any;
  getDetailAddress: any;

}
export default function Address(props:Props) {
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [showDetail, setShowDetail] = useState<boolean>(false);
   const [detailAddress, setDetailAddress] = useState<string>("");

  const outside = useRef<any>(null);

  const sendAddressValue = () => {
    props.getAddress(address)
    props.getDetailAddress(detailAddress);
  }
  const AddressClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenPostcode(true);
  };
  const selectAddress = (data: AddressData) => {
    setAddress(data?.address);
    setOpenPostcode(false);
  };
  
  const DetailAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDetailAddress(e.currentTarget.value);
    sendAddressValue();
  };


  useEffect(() => {
    address ? setShowDetail(true) : setShowDetail(false);
  }, [address]);

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
        <span className="pr-2">{address}</span>
        <div className="desktop:flex desktop:flex-start  ">
          {showDetail && (
            <input
              placeholder="상세주소입력"
              type="text"
              className="rounded-lg bg-gray-200 border-2 border-black pl-2"
              onChange={DetailAddressHandler}
            />
          )}
        </div>
      </div>

      <div className="flex pt-3">
        <button onClick={AddressClick} className="btn btn-square btn-primary" type="button">
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
