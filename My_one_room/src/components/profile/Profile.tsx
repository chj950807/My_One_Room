import React from "react";
import Head from "../header/Head";
import { auth } from "../logIn/UserData";
import { useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { TfiPencil } from "react-icons/tfi";
import Rename from "./Rename";
export default function Profile() {
  const navigate = useNavigate();

  const onWithdraw = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auth.currentUser?.delete().then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <Head />
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">회원탈퇴 되었습니다.</h3>
          <p className="py-4">이용해주셔서 감사합니다.</p>
          <div className="modal-action">
            <button onClick={onWithdraw} className="btn btn-secondary">
              확인
            </button>
          </div>
        </div>
      </div>

      <div className=" py-10 px-10 min-h-screen bg-violet-200 text-gray-800 font-jua ">
        <div className="hero-content text-center border-4 border-black bg-violet-100 min-w-full card">
          <div className="max-w-md ">
            <div className="font-bold text-5xl">회원정보</div>
            <div className="flex flex-col items-start pt-2 pb-32">
              <div className="flex flex-row items-center">
                <MdOutlineMail className=" font-sans" />
                <span className="pl-1">이메일: {auth.currentUser?.email}</span>
              </div>
              <div className="flex flex-row items-center">
                <TfiPencil className=" font-sans" />
                <span className="pl-1">닉네임:</span>
                <Rename />
              </div>
            </div>
            <div className="indicator mb-10 ">
              <div className="indicator-item indicator-bottom  ">
                <label
                  htmlFor="my-modal-5"
                  className="btn btn-secondary font-sans"
                >
                  회원탈퇴
                </label>
              </div>
              <div className="card border-4 border-black ">
                <div className="card-body">
                  <h2 className="card-title">떠나지마세요 ㅠ</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
