import React, { useState } from "react";
import Head from "../header/Head";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./UserData";
import { updateProfile } from "firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypepassword, setRetypepassword] = useState("");

  const onNicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.currentTarget.value);
  };
  const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };
  const onRetypepasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRetypepassword(e.currentTarget.value);
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== retypepassword) {
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
    } else {
       const newUser = await createUserWithEmailAndPassword(
         auth,
         email,
         password
       );
      await updateProfile(newUser.user, { displayName: nickname });

      console.log("회원가입 성공");
      navigate("/");
    }
  };

  const CheckEmail = async () => {
    // 중복체크 확인하기
    try {
      const check = await createUserWithEmailAndPassword(auth, email, "");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="">
        <Head />
      </div>
      <div className="hero min-h-screen bg-base-200 font-jua">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl pb-5">Sign Up</h1>
            <p className="py-6">
              이사가고 싶은 집에대한{" "}
              <span className="text-red-400">상세정보</span>와{" "}
              <span className="text-red-400">혜택</span>를 얻고 싶으시면{" "}
              <span className="text-red-400">회원가입</span> 하세요!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={onSubmitHandler}>
                <div className="form-control">
                  <label className="label" htmlFor="nickname">
                    <span className="label-text">Nickname</span>
                  </label>
                  <input
                    id="nickname"
                    type="text"
                    placeholder="nickname"
                    className="input input-bordered font-sans"
                    onChange={onNicknameHandler}
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="email">
                    <span className="label-text">Email</span>
                  </label>
                  <div className="flex justify-between items-center">
                    <input
                      id="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered font-sans w-56"
                      onChange={onEmailHandler}
                    />
                    {/* 아래버튼에 확인되었으면 체크버튼 */}
                    <button
                      className="btn btn-sm font-sans"
                      onClick={CheckEmail}
                    >
                      중복체크
                    </button>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="password">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered font-sans"
                    autoComplete="off"
                    onChange={onPasswordHandler}
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="retype_password">
                    <span className="label-text">Retype Password</span>
                  </label>
                  <input
                    id="retype_password"
                    type="password"
                    placeholder="retype password"
                    className="input input-bordered font-sans"
                    autoComplete="off"
                    onChange={onRetypepasswordHandler}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary font-sans" formAction="">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
