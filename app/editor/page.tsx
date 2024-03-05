"use client";
import {
  CommentSVG,
  FaceSVG,
  FileSVG,
  ImageSVG,
  PaperSVG,
  SendSVG,
} from "@/component/svg";
import React, { useState } from "react";
import { PopupInput } from "@/component/Popup";
import { ButtonEditor, ButtonSidebar } from "@/component/Button";
import { Header } from "@/component/Header";

const Editor = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [comment, setComment] = useState("");
  return (
    <div className="w-full h-screen overflow-auto whitespace-normal">
      <Header openPopup={openPopup} setOpenPopup={setOpenPopup} />
      {openPopup && (
        <PopupInput openPopup={openPopup} setOpenPopup={setOpenPopup} />
      )}
      <div className="group w-full h-[180px] relative ">
        <img
          src="/img/webb1.jpg"
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div className=" w-auto h-[25px] rounded-[5px] opacity-0 group-hover:opacity-100 transition duration-300 flex bg-[#ffff]  absolute top-[20px] right-[15%]">
          <button className="hover:bg-slate-200 text-[13px] px-[4px] rounded-l-[5px] border-r border-r-slate-200 text-slate-500 leading-[21px] font-[500]">
            Change cover
          </button>
          <button className="hover:bg-slate-200 text-[13px] px-[4px] rounded-r-[5px] text-slate-500 leading-[21px] font-[500]">
            Reposition
          </button>
        </div>
        <div
          title="Change Icon"
          role="button"
          className="w-[78px] h-[78px] absolute bottom-[-39px] left-[150px]"
        >
          <img src="/svg/emoji.svg" alt="Icon" />
        </div>
      </div>
      <div className="w-full px-[150px]">
        <div className="group w-full ">
          <div className="w-full mt-[80px] mb-[4px] flex opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ButtonEditor path={FaceSVG} name="Add icon" />
            <ButtonEditor path={ImageSVG} name="Add cover" />
            <ButtonEditor path={CommentSVG} name="Add comment" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Untitled"
              className="w-full h-[60px] text-[32px] text-slate-800 font-bold placeholder-slate-800 placeholder-opacity-20 outline-none "
            />
          </div>
        </div>
        <div className="w-full h-auto border-b border-b-slate-300">
          <div className="flex justify-start items-center">
            <div className="w-[22px] h-[22px] rounded-full border border-slate-200 shadow-lg text-center ">
              <p className="text-[13px] text-slate-400">H</p>
            </div>
            <div className="text-[14px] text-[#37352F] leading-[21px] font-[600] mx-[7px]">
              Hoàng Dương
            </div>
            <div className="text-[12px] leading-[16px] opacity-55">
              24 phút trước
            </div>
          </div>
          <div className="pl-[29px] text-[14px] text-[#37352F] leading-[21px]">
            <span>Hellooooo everybody</span>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Editor;
