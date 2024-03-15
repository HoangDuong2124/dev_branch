"use client";
import {
  CommentSVG,
  DeleteSVG,
  FaceSVG,
  ImageSVG,
  LinkSVG,
  RenameSVG,
} from "@/component/svg";
import { useEffect, useState } from "react";
import { ButtonEditor, ButtonSidebar } from "@/component/Button";
import { Header } from "@/component/Header";
import { PopupBackground } from "@/component/popup/BackgroundPopup";
import { PopupInput } from "@/component/popup/HeaderPopup";
import { PopupIcon } from "@/component/popup/IconPopup";
import { useAppContext } from "@/app/provider/theme";
import Banner from "../Banner";
import { INote } from "@/interfaces";
import AddComment from "../AddComment";
import Comments from "../Comments";
import Pusher from "pusher-js";
import debounce from "@/utils/debounce";

const Editor = ({ params }: { params: { id: string } }) => {
  const { notes, setNotes, close } = useAppContext();
  const randomID = Math.floor(Math.random() * 10000);
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupIcon, setOpenPopupIcon] = useState(false);
  const [openPopupBackground, setOpenPopupBackground] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [noteID, setNoteID] = useState<INote>({
    id: randomID,
    idUser: 1,
    title: "",
    icon: "",
    background: "",
    content: "",
  });

  const fetchUpdateNote = async (data: INote) => {
    const update = await fetch(`/api/note/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  };

  const openIcon = () => {
    setOpenPopupIcon(true);
  };
  const openBackground = () => {
    setOpenPopupBackground(true);
  };
  const handleOpenComment = () => {
    setOpenComment(true);
  };

  const updateNote = (value:string) => {
    const update = notes.map((item) =>
      item.id === +params.id ? { ...item, title:value} : item
    );
    setNotes(update);
    fetchUpdateNote({ ...noteID, title: value });
  };

  useEffect(() => {
    if (!notes.length) return;
    const resNote = notes.find((item) => item.id === +params.id);
    resNote && setNoteID(resNote);
  }, [notes.length, notes]);

  useEffect(() => {
    const pusher = new Pusher("445ee293670f7b1800e0", {
      cluster: "ap1",
    });
    var channel = pusher.subscribe("my-exercise");
    channel.bind("update-note", (data: any) => {
      if (data.body.id === +params.id) setNoteID(data.body);
      const update = notes.map((prev) => {
        if (prev.id === data.body.id) {
          return data.body;
        }
        return prev;
      });
      setNotes(update);
    });
    return () => {
      pusher.disconnect();
    };
  }, [notes.length]);

  return (
    <div
      className={
        close
          ? "w-full h-screen bg-[#ffff]  z-10  overflow-auto whitespace-normal trasition-[margin-left] duration-500"
          : "w-full h-screen bg-[#ffff] z-10 ml-[240px] overflow-auto whitespace-normal trasition-[margin-left] duration-500 "
      }
    >
      <Header
        noteID={noteID}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
      {openPopup && (
        <PopupInput
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          updateNote={updateNote}
          noteID={noteID}
        />
      )}
      {openPopupIcon && (
        <PopupIcon
          noteID={noteID}
          param={params.id}
          fetchUpdateNote={fetchUpdateNote}
          openPopup={openPopupIcon}
          setOpenPopup={setOpenPopupIcon}
        />
      )}
      {openPopupBackground && (
        <PopupBackground
          noteID={noteID}
          fetchUpdateNote={fetchUpdateNote}
          openPopup={openPopupBackground}
          setOpenPopup={setOpenPopupBackground}
        />
      )}
      <Banner
        noteID={noteID}
        setOpenPopupIcon={setOpenPopupIcon}
        setOpenPopupBackground={setOpenPopupBackground}
      />
      <div className="w-full px-[150px]">
        <div className="group w-full ">
          <div className="w-full mt-[80px] mb- flex opacity-0 group-hover:opacity-100 transition-all duration-300">
            {!noteID.icon && (
              <ButtonEditor path={FaceSVG} name="Add icon" onClick={openIcon} />
            )}
            {!noteID.background && (
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
              value={noteID.title}
              onChange={(e) => updateNote(e.target.value)}
              className="w-full h-[60px] text-[32px] text-slate-800 font-bold placeholder-slate-800 placeholder-opacity-20 outline-none "
            />
          </div>
        </div>
        <div className="w-full h-auto border-b border-b-slate-300">
          <Comments param={params.id} />
          <AddComment param={params.id} />
        </div>
        <div className="content w-full min-h-80"></div>
      </div>
    </div>
  );
};

export default Editor;
