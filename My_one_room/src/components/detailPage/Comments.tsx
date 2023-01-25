import React, { useState } from "react";
import { sendCommentsData } from "./sendCommentsData";
import getCommentsData from "./getCommentsData";
interface Props {
  user: any;
  display: any;
  pageId: string;
}
interface Data {
    id: string;
  comment: string;
  displayName: string;
  roomID: string;
}
export default function Comments(props: Props) {
  const [value, setValue] = useState("");
  const comment = getCommentsData();
  const noAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const setTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendCommentsData(value, props.display, props.pageId);
  };
    //로그아웃 상태 (Blur)
  if (props.user === null || props.user === undefined) {
    return (
      <div>
        <div className="text-center border-4 border-black bg-violet-100 card">
          <div className="">
            <div className="font-bold text-3xl desktop:whitespace-nowrap border-4 border-black card py-2 mt-3 mx-10">
              Comments
            </div>
            <div className="flex flex-col items-start pt-5 pb-10 mx-20 desktop:pb-32 blur-lg">
              <div className="flex flex-row items-center border-2 border-black  w-full mb-5">
                <span className="pl-2 whitespace-nowrap">작성자1</span>
                <div className="pl-10 whitespace-nowrap">훌륭해요</div>
              </div>
            </div>
          </div>
          <div className=" w-full p-10 blur-lg">
            <div>
              <div className="bg-gray-100 border border-black rounded-lg h-20 w-full mb-3 "></div>
              <button
                className="btn btn-block btn-primary disabled"
                type="button"
                onClick={noAction}
              >
                댓글 작성
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    //로그인 상태 (작성가능)
  } else {
    return (
      <div>
        <div className="text-center border-4 border-black bg-violet-100 card">
          <div className="">
            <div className="font-bold text-3xl desktop:whitespace-nowrap border-4 border-black card py-2 mt-3 mx-10">
              Comments
            </div>
            <div className="flex flex-col items-start pt-5 pb-10 mx-20 desktop:pb-32 ">
              {comment.map((data: Data) => {
                if (props.pageId == data.roomID) {
                  return (
                    <div
                      className="flex flex-row items-center border-2 border-black  w-full mb-5 rounded-lg"
                      key={data.id}
                    >
                      <span className="pl-2 whitespace-nowrap">
                        {data.displayName}
                      </span>
                      <div className="pl-10 whitespace-nowrap">
                        {data.comment}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className=" w-full p-10 ">
            <div>
              <form onSubmit={onSubmitHandler}>
                <textarea
                  className="bg-gray-100 border border-black rounded-lg h-20 w-full pl-2"
                  placeholder="댓글은 삭제가 불가능합니다. 신중히 적어주세요. (*^▽^*)"
                  onChange={setTextArea}
                ></textarea>
                <button className="btn btn-block btn-primary" type="submit">
                  댓글 작성
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
