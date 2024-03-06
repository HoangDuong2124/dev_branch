import { useEffect, useRef } from "react";
import { FileSVG } from "./svg";
import useClickOutSide from "@/hooks/useClickOutSide";
import { useAppContext } from "@/app/editor/layout";

export const PopupInput = ({
  openPopup,
  setOpenPopup,
}: {
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { documentRef } = useClickOutSide(() => setOpenPopup(false));
  const { title, setTitle } = useAppContext();
  return (
    <div
      ref={documentRef}
      className="w-[380px] h-[36px] bg-[#fff] z-[9999] flex justify-center items-center border rounded-[5px] shadow-lg  fixed top-[40px] left-[110px]"
    >
      <button className="w-[28px] h-[28px] relative mr-[6px] flex justify-center items-center hover:bg-[#f5f3f3] border border-slate-300 rounded-[4px]">
        <input
          type="file"
          accept="image/*"
          className="w-full h-full absolute top-0 left-0 opacity-0"
        />
        <FileSVG />
      </button>
      <input
        type="text"
        placeholder="Untitled"
        value={title}
        className="w-[330px] h-[28px] bg-[#f5f3f3] pl-[8px] border border-slate-300 rounded-[4px] outline-none text[14px] text-[#37352F] leading-[24px] "
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </div>
  );
};
