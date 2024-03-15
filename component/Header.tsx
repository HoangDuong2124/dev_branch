import { useAppContext } from "@/app/provider/theme";
import { BarSVG } from "./svg";
import { INote } from "@/interfaces";

export const Header = ({
  noteID,
  openPopup,
  setOpenPopup,
}: {
  noteID: INote
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { notes,setNotes, close, setClose } = useAppContext();
  return (
    <div className="title w-full p-3 sticky top-0 z-50 flex justify-between items-center bg-[#ffff] ">
      <div className="flex items-center">
        {close && (
          <div role="button" onClick={() => setClose(false)}>
            <BarSVG />
          </div>
        )}
        <button
          onClick={() => setOpenPopup(!openPopup)}
          className="ml-2  max-w-[278px] h-auto  py-[2px] flex items-center px-[5px] rounded-[3px] hover:bg-slate-200"
        >
          {noteID.icon && (
            <img
              src={`/img/icon/${noteID.icon}`}
              alt=""
              className="w-[18px] h-[18px] mr-[5px]"
            />
          )}
          <p className=" w-full text-[14px] text-black overflow-hidden text-ellipsis ">
            {noteID.title ? noteID.title : "Untitled"}
          </p>
        </button>
      </div>

      <button
        title="Style, export, and more..."
        className="w-[30px] h-[30px] flex justify-center items-center  rounded-[5px]  hover:bg-slate-300 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-[20px] h-[20px] fill-slate-500"
        >
          <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
        </svg>
      </button>
    </div>
  );
};
