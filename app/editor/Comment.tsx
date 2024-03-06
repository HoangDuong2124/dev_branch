"use client"
import { PaperSVG, SendSVG } from '@/component/svg';
import React, { useState } from 'react'

const Comment = () => {
    const [comment, setComment] = useState("");
  return (
    <div className="group flex justify-start items-center mb-[15px]">
            <div className="w-[22px] h-[22px] rounded-full border border-slate-200 shadow-lg text-center ">
              <p className="text-[13px] text-slate-400">H</p>
            </div>
            <div className="w-full h-[34px] ml-[7px] flex justify-between rounded-[3px]  ">
              <div className="w-[85%]">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  className="w-full h-full pl-[3px] text-[14px] rounded-l-[3px]   outline-none "
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
              </div>
              <div className=" flex items-center">
                <button className="w-[24px] h-[24px] mx-[3px] flex items-center justify-center rounded-[3px] hover:bg-[#e2e1de] relative">
                  <input
                    type="file"
                    className="w-full h-full opacity-0 absolute top-0 left-0"
                  />
                  <PaperSVG />
                </button>
                {comment ? (
                  <button className="mx-[3px]">
                    <SendSVG />
                  </button>
                ) : (
                  <button disabled className="mx-[3px] opacity-30">
                    <SendSVG />
                  </button>
                )}
              </div>
            </div>
          </div>
  )
}

export default Comment