import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../header/Head";
import { auth } from "./UserData";
import { useNavigate } from "react-router-dom";
import { KAKAO_AUTH_URI } from "./KakaoLogin";

export default function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const login = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).then(() => {
        console.log("로그인 성공");
        navigate("/");
      });
    } catch (err) {
      if (email == "" && password == "") {
        alert("이메일과 비밀번호를 입력해주세요.");
      } else {
        alert("입력하신 이메일 또는 비밀번호가 일치하지 않습니다.");
      }
    }
  };

  return (
    <div>
      <Head />
      <div className="bg-violet-200">
        <div className="hero min-h-screen font-jua ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center lg:text-left">
              <h1 className="text-6xl pb-5 text-gray-800">Login now!</h1>
              <p className="py-6 text-gray-800">
                집에대한 <span className="text-red-400">상세정보</span>를
                얻고싶으시면 <span className="text-red-400">로그인</span>{" "}
                하세요!
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-4 border-white">
              <form onSubmit={onSubmitHandler}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered font-sans"
                      onChange={onEmailHandler}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered font-sans"
                      autoComplete="off"
                      onChange={onPasswordHandler}
                    />
                    <div className="flex justify-end pt-1">
                      {/* 비밀번호 찾기 */}
                      {/* <Link to={'forgotpassword'}>
                    <span className="label-text-alt link link-hover font-jua">
                    비밀번호찾기
                    </span>
                  </Link> */}
                      <Link to={"signup"}>
                        <span className="text-sm link link-hover font-jua hover:text-blue-500 ">
                          회원가입
                        </span>
                      </Link>
                    </div>
                    <div className="flex justify-center pt-3">
                      <a href={KAKAO_AUTH_URI}>
                        <img src="./src/assets/kakao_login_medium_wide.png" />
                      </a>
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary font-sans">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
