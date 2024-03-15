import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useClickOutSide from "@/hooks/useClickOutSide";
import { useAppContext } from "@/app/provider/theme";
import { INote } from "@/interfaces";

export const PopupIcon = ({
  noteID,
  param,
  fetchUpdateNote,
  openPopup,
  setOpenPopup,
}: {
  noteID: INote;
  param:string;
  fetchUpdateNote: (data: INote) => void;
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { notes, setNotes } = useAppContext();
  const { documentRef } = useClickOutSide(() => {
    setOpenPopup(false);
  });
  const iconHeader = [
    { id: 1, name: "Emojis" },
    { id: 2, name: "Custom" },
  ];
  const [checked, setChecked] = useState(1);
  const [linkIcon, setLinkIcon] = useState("");
  const updateIconNote = () => {
    fetchUpdateNote({ ...noteID, icon: "" });
  };
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[9999] ">
      <div
        ref={documentRef}
        className="w-[395px] h-[334px] bg-[#fff] z-[9999] border rounded-[5px] shadow-2xl fixed top-[40%] left-[18%] break-words"
      >
        <div className="w-full h-auto px-2  flex justify-between items-center border-b">
          <div className="h-full flex items-center">
            {iconHeader.map((item) => (
              <div
                key={item.id}
                role="button"
                onClick={() => setChecked(item.id)}
                className="relative px-2 py-2 rounded-[5px] hover:bg-slate-200 text-[14px] leading-[21px]"
              >
                <span className=" relative">{item.name}</span>
                {item.id === checked && <div className="active"></div>}
              </div>
            ))}
          </div>
          <div
            role="button"
            onClick={() => {
              updateIconNote();
              setOpenPopup(false);
            }}
            className=" px-2 py-2 rounded-[5px] hover:bg-slate-200 text-[14px] leading-[21px] "
          >
            <span className="opacity-55">Remove</span>
          </div>
        </div>
        <div className="w-full">
          {checked === 1 ? (
            <Icon />
          ) : (
            <Custom
              noteID={noteID}
              param ={param}
              linkIcon={linkIcon}
              setLinkIcon={setLinkIcon}
              setOpenPopup={setOpenPopup}
              fetchUpdateNote={fetchUpdateNote}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Icon = () => {
  return <div>ICON</div>;
};
const Custom = ({
  noteID,
  param,
  linkIcon,
  setLinkIcon,
  setOpenPopup,
  fetchUpdateNote,
}: {
  noteID: INote;
  param:string
  linkIcon: String;
  setLinkIcon: Dispatch<SetStateAction<string>>;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  fetchUpdateNote: (data: INote) => void;
}) => {
  const {notes,setNotes}  = useAppContext()
  const uploadImage = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const data = new FormData();
      data.append("file", event.target.files[0]);
      await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      fetchUpdateNote({ ...noteID, icon: event.target.files[0].name });
      const update = notes.map((item) =>
      item.id === +param ? { ...item,icon: event.target.files[0].name} : item
    );
    setNotes(update);
      setOpenPopup(false);
    }
  };
  return (
    <>
      <div className="w-full px-3 flex items-center justify-between my-[16px] ">
        <div className="w-full h-[28px] mr-2 rounded-[5px] border">
          <input
            type="text"
            placeholder="Paste link to an image..."
            onChange={(e) => setLinkIcon(e.target.value)}
            className="w-full h-full pl-[5px] rounded-[5px] border text-[14px] leading-[21px] focus:outline outline-[3px] outline-blue-300"
          />
        </div>
        <div>
          {linkIcon ? (
            <button
              type="submit"
              className="w-[70px] h-[28px] bg-blue-500 rounded-[5px] text-[14px] text-white font-[500] "
            >
              Submit
            </button>
          ) : (
            <button
              disabled
              type="submit"
              className="w-[70px] h-[28px] bg-blue-500 rounded-[5px] text-[14px] text-white font-[500] opacity-40"
            >
              Submit
            </button>
          )}
        </div>
      </div>
      <div
        role="button"
        className="max-w-full h-[32px] ml-3 mr-3 mt-[10px] flex justify-center items-center hover:bg-slate-300 border rounded-[5px] relative"
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => uploadImage(e)}
          className="absolute top-0 left-0 w-full h-full opacity-0"
        />
        <span>Upload file</span>
      </div>
    </>
  );
};
