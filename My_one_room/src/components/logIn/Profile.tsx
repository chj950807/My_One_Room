import React from "react";
import Head from "../header/Head";
import { auth } from "./UserData";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();

  const onWithdraw = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auth.currentUser?.delete().then(() => {
      alert("회원 탈퇴되었습니다.");
      navigate("/");
    });
  };

  return (
    <div>
      <Head />
      <div>
        <div>이메일: {auth.currentUser?.email}</div>
        <div>닉네임: {auth.currentUser?.displayName}</div>
      </div>
      <button className="btn btn-secondary" onClick={onWithdraw}>
        회원탈퇴
      </button>
    </div>
  );
}
