import { useEffect, useRef } from "react";
import { FileSVG } from "./svg";

export const PopupInput = ({
  openPopup,
  setOpenPopup,
}: {
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (popupRef.current  && !popupRef.current.contains(event.target)) {
        setOpenPopup(false);
      }
    };

    if (openPopup) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openPopup]);
  return (
      <div ref={popupRef} className="w-[380px] h-[36px] bg-[#fff] z-[9999] flex justify-center items-center border rounded-[5px] shadow-lg  fixed top-[40px] left-[110px]">
        <button className="w-[28px] h-[28px] mr-[6px] flex justify-center items-center hover:bg-[#f5f3f3] border border-slate-300 rounded-[4px]">
          <FileSVG />
        </button>
        <input
          type="text"
          placeholder="Untitled"
          className="w-[330px] h-[28px] bg-[#f5f3f3] pl-[8px] border border-slate-300 rounded-[4px] outline-none text[14px] text-[#37352F] leading-[24px] "
        />
      </div>
  );
};
