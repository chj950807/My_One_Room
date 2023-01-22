import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function Pagination({ total, limit, page, setPage }:{total:number, limit:number, page:number, setPage:any}) {
    const page_num = Math.ceil(total / limit);
    return (
      <div className="text-3xl text-black flex items-center py-10 justify-between w-60px">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-gray-700 text-white rounded-lg "
        >
          <FaAngleLeft />
        </button>
        {Array(page_num)
          .fill(0)
          .map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setPage(idx + 1)}
              className="bg-gray-500 text-white rounded-lg w-5 text-lg mx-1 font-dohyeon"
            >
              {idx + 1}
            </button>
          ))}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === page_num}
          className="bg-gray-700 text-white rounded-lg"
        >
          <FaAngleRight />
        </button>
      </div>
    );
}
