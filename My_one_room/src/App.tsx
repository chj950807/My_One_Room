import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPost from "./components/evaluation/NewPost";
import Home from "./components/Home";
import FindPassword from "./components/logIn/FindPassword";
import LogIn from "./components/logIn/LogIn";
import Profile from "./components/profile/Profile";
import SignUp from "./components/logIn/SignUp";
import KaKaotmp from "./components/logIn/KaKaotmp";
import DetailPage from "./components/detailPage/DetailPage";
import SearchPage from "./components/searchPage/SearchPage";

export default function App() {
  return (
    <div>  
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/NewPost" element={<NewPost />} />
            <Route path="/login/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/oauth" element={<KaKaotmp />} />
            <Route path="/room/:roomID" element={<DetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            {/* <Route path="/login/forgotpassword" element={<FindPassword />} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}
