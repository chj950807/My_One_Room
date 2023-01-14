import React from 'react'
import KaKaoRedirect from "./KaKaoRedirect";
import { Link } from 'react-router-dom';

export default function KaKaotmp() {
  KaKaoRedirect();

  return (
    <div>
      <div>
        <Link to={"/"}>
          <div className='text-4xl'>돌아가기</div>
        </Link>
        인증 {'>'} 토큰받기 {'>'} ???
      </div>
    </div>
  );
}
