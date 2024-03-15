import { useAppContext } from "@/app/provider/theme";
import { FileSVG, ThreeDotSVG } from "./svg";
import { INote } from "@/interfaces";
import { useState } from "react";
import { SelectPopup } from "./popup/SelectPopup";
export const ButtonSidebar = ({
  path: IconComponent,
  name,
}: {
  path: React.ComponentType;
  name: string;
}) => {
  return (
    <button className="w-full flex items-center rounded-[5px] p-2 hover:bg-slate-200">
      {IconComponent && <IconComponent />}
      <div className="ml-[14px] text-[14px] text-slate-500 leading-[21px] font-[500]">
        {name}
      </div>
    </button>
  );
};

export const ButtonNote = ({ note }: { note: INote }) => {
  const [openPopup,setOpenPopup] = useState(false)
  return (
    <>
      <button className="group-hover:group-hover w-full flex  items-center rounded-[5px]  p-2 hover:bg-slate-200 relative">
      {note.icon ? (
        <img src={`/img/icon/${note.icon}`} alt="" className="w-[18px] h-[18px]" />
      ) : (
        <FileSVG />
      )}
      <p className="ml-2 text-[14px] w-[70%] text-start text-black overflow-hidden text-ellipsis font-[500]">
        {note.title ? note.title: "Untitled"}
      </p>
      <div
        onClick={()=>setOpenPopup(true)}
        title="Delete, Rename, and more..."
        className="w-[25px] h-[20px] flex justify-center items-center  rounded-[5px]  hover:bg-slate-300 absolute right-2"
      >
        <ThreeDotSVG />
      </div>
    </button>
    {openPopup&&<SelectPopup setOpenPopup={setOpenPopup}/>}
    </>
  
  );
};

export const ButtonEditor = ({
  path: IconComponent,
  name,
  onClick,
}: {
  path: React.ComponentType;
  name: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-auto flex items-center rounded-[5px] px-2 py-1 hover:bg-slate-200"
    >
      {IconComponent && <IconComponent />}
      <div className="ml-[5px] text-[14px] text-slate-500 leading-[21px] font-[500]">
        {name}
      </div>
    </button>
  );
};
