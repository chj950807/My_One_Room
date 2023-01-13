import React from "react";
import Head from "../header/Head";

export default function FindPassword() {
  return (
    <div>
      <div className="">
        <Head />
      </div>
      <div className="hero min-h-screen bg-base-200 font-jua">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl pb-5">비밀번호 찾기</h1>
            <p className="py-6">
              집에대한 <span className="text-red-400">상세정보</span>를
              얻고싶으시면 <span className="text-red-400">로그인</span> 하세요!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered font-sans"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered font-sans"
                  autoComplete="off"
                />
                <div className="flex justify-between pt-1">
                  {/* <Link to={"forgotpassword"}>
                    <span className="label-text-alt link link-hover font-jua">
                      비밀번호찾기
                    </span>
                  </Link> */}

                  <span>
                    <a
                      href="#"
                      className="label-text-alt link link-hover font-jua"
                    >
                      회원가입
                    </a>
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary font-sans">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
