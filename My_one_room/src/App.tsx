import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewPost from './components/evaluation/NewPost';
import Home from './components/Home';
import FindPassword from './components/logIn/FindPassword';
import LogIn from './components/logIn/LogIn';
import SignUp from './components/logIn/SignUp';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/NewPost" element={<NewPost />} />
          <Route path="/login/signup" element={<SignUp />} />
          {/* <Route path="/login/forgotpassword" element={<FindPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
