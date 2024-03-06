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
import { PopupBackground, PopupIcon, PopupInput } from "@/component/Popup";
import { ButtonEditor, ButtonSidebar } from "@/component/Button";
import { Header } from "@/component/Header";
import Banner from "./Banner";
import Comment from "./Comment";
import { useAppContext } from "./layout";

const Editor = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupIcon, setOpenPopupIcon] = useState(false);
  const [openPopupBackground, setOpenPopupBackground] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const { title, setTitle, icon, setIcon, background, setBackground } =
    useAppContext();
  const openIcon = () => {
    setOpenPopupIcon(true);
  };
  const openBackground = () => {
    setOpenPopupBackground(true);
  };
  const handleOpenComment = () => {
    setOpenComment(true);
  };
  return (
    <div className="w-full h-screen overflow-auto whitespace-normal">
      <Header openPopup={openPopup} setOpenPopup={setOpenPopup} />
      {openPopup && (
        <PopupInput openPopup={openPopup} setOpenPopup={setOpenPopup} />
      )}
      {openPopupIcon && (
        <PopupIcon openPopup={openPopupIcon} setOpenPopup={setOpenPopupIcon} />
      )}
      {openPopupBackground && (
        <PopupBackground
          openPopup={openPopupBackground}
          setOpenPopup={setOpenPopupBackground}
        />
      )}
      <Banner
        setOpenPopupIcon={setOpenPopupIcon}
        setOpenPopupBackground={setOpenPopupBackground}
      />
      <div className="w-full px-[150px]">
        <div className="group w-full ">
          <div className="w-full mt-[80px] mb-[4px] flex opacity-0 group-hover:opacity-100 transition-all duration-300">
            {!icon && (
              <ButtonEditor path={FaceSVG} name="Add icon" onClick={openIcon} />
            )}
            {!background && (
              <ButtonEditor
                path={ImageSVG}
                name="Add cover"
                onClick={openBackground}
              />
            )}
            <ButtonEditor
              path={CommentSVG}
              name="Add comment"
              onClick={handleOpenComment}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Untitled"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Editor;
