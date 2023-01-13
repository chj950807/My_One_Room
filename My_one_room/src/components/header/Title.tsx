import React from 'react'
import { Link } from 'react-router-dom';

export default function Title() {
  return (
    <div className="flex-1">
      <Link to={"/"}>
        <div className="text-7xl normal-case font-dohyeon whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          내원룸
        </div>
      </Link>
    </div>
  );
}
