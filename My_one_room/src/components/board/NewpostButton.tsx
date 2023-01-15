import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../logIn/UserData";
export default function NewpostButton() {
  const navigate = useNavigate();
  const isLogin = () => {
    if (auth.currentUser === null) {
      alert('로그인 후 작성가능합니다.');
      navigate('/login');
    } else {
      navigate('/NewPost');
    }
  }
  return (
    <div className="flex justify-end py-6 desktop:pr-0 ">
        <button className="btn-warning btn btn-sm border border-white" onClick={isLogin}>
          새글등록
        </button>
    </div>
  );
}
