import React from 'react'
import KaKaoRedirect from "./KaKaoRedirect";
import { Link } from 'react-router-dom';

export default function KaKaotmp() {
  KaKaoRedirect();

  return (
    <div>
      <Link to={'/'}>
      돌이가기
      </Link>
    </div>
  )
}
