import useClickOutSide from "@/hooks/useClickOutSide";
import { ButtonSidebar } from "../Button";
import { DeleteSVG, LinkSVG, RenameSVG } from "../svg";
import { Dispatch, SetStateAction } from "react";

export const SelectPopup = ({
  setOpenPopup,
}: {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
}) => {
  const { documentRef } = useClickOutSide(() => setOpenPopup(false));
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[10000000] ">
      <div
        ref={documentRef}
        className="w-[265px] h-[340px] shadow-2xl fixed top-16 left-44 bg-[#ffff] rounded-[5px]"
      >
        <ButtonSidebar path={LinkSVG} name="Copy Link" />
        <ButtonSidebar path={RenameSVG} name="Rename" />
        <ButtonSidebar path={DeleteSVG} name="Delete" />
      </div>
    </div>
  );
};
