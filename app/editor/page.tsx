"use client";
import { CommentSVG, FaceSVG, ImageSVG } from "@/component/svg";
import { useState } from "react";
import { ButtonEditor } from "@/component/Button";
import { Header } from "@/component/Header";
import { PopupBackground } from "@/component/popup/BackgroundPopup";
import { PopupInput } from "@/component/popup/HeaderPopup";
import { PopupIcon } from "@/component/popup/IconPopup";
import { useAppContext } from "../provider/theme";
import Banner from "./Banner";
import Comment from "./AddComment";

const EditorPage = () => {
  const {close} = useAppContext()
  return (
    <div
      className={
        close
          ? "w-full h-screen flex justify-center items-center text-3xl font-[500] overflow-auto whitespace-normal trasition-[margin-left] duration-500 z-10 bg-[#ffff]"
          : "w-full h-screen flex justify-center items-center text-3xl font-[500] ml-[240px] overflow-auto whitespace-normal trasition-[margin-left] duration-500 "
      }
    >
     Noteeeeeee
    </div>
  );
};

export default EditorPage;
