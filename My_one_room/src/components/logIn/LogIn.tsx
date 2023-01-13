import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../header/Head";
import { auth } from "./UserData";
import { useNavigate } from "react-router-dom";

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
      const login = await signInWithEmailAndPassword(auth, email, password).then(() => {
        console.log("로그인 성공");
        navigate("/");
      })
    } catch (err) {
      alert('입력하신 이메일 또는 비밀번호가 일치하지 않습니다.');
    };
  }

  return (
    <div>
      <div>
        <Head />
      </div>
      <div className="hero min-h-screen bg-base-200 font-jua">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl pb-5">Login now!</h1>
            <p className="py-6">
              집에대한 <span className="text-red-400">상세정보</span>를
              얻고싶으시면 <span className="text-red-400">로그인</span> 하세요!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                      <span className="label-text-alt link link-hover font-jua">
                        회원가입
                      </span>
                    </Link>
                  </div>
                  <div className="flex justify-center pt-3">
                    <button className="btn btn-circle btn-outline">
                      <svg
                        className="rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        {" "}
                        <g>
                          {" "}
                          <path fill="yellow" d="M0 0h24v24H0z" />{" "}
                          <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z" />{" "}
                        </g>{" "}
                      </svg>
                    </button>
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
  );
}
