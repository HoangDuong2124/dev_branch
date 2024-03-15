"use client";
import { useAppContext } from "@/app/provider/theme";
import { ButtonNote, ButtonSidebar } from "./Button";
import {
  Add,
  AnglesBottomSVG,
  AnglesTopSVG,
  CloseSidebarSVG,
  InboxSVG,
  Plus,
  PlusSVG,
  SearchSVG,
  SettingSVG,
} from "./svg";
import { useEffect, useRef, useState } from "react";
import { INote } from "@/interfaces";
import Link from "next/link";
import { fetchJSON } from "@/utils/fetchURL";

const SidebarLayout = () => {
  const randomID = Math.floor(Math.random() * 10000);
  const initNoteData = {
    id: randomID,
    idUser: 1,
    title: "",
    icon: "",
    background: "",
    content: "",
  };
  const { notes, setNotes, close, setClose } = useAppContext();
  const [noteData, setNoteData] = useState<INote>(initNoteData);
  const fetchAddNote = async () => {
    try {
      const addnote = await fetchJSON("/api/note", {
        method: "POST",
        body: JSON.stringify(noteData),
      });
      return addnote
    } catch (error) {}
  };
  const closeSidebar = () => {
    const closed = document.getElementById("main-sidebar");
    closed?.classList.add("close");
  };
  const addNote = async () => {
    setNotes([...notes, noteData]);
    const data = await fetchAddNote();
    setNotes((prev) => {
      const update = prev.map((item) =>
        item.id === noteData.id ? { ...item, id: data.id } : item
      );
      return update;
    });
    setNoteData({...initNoteData,id:randomID})
  };
  return (
    <div
      id="main-sidebar"
      className={
        close
          ? "group w-0 h-screen p-[2px] fixed top-0 left-0  border-r transition-all  ease-linear duration-300"
          : "group w-60 h-screen p-[2px]  fixed top-0 left-0  border-r  transition-all  ease-linear duration-300 "
      }
    >
      <div className="w-full border-b sticky top-0 z-10 bg-[#ffff]">
        <button className=" w-full flex justify-between items-center rounded-[5px] p-2 hover:bg-slate-200 ">
          <div className="flex justify-center items-center">
            <div className="w-[18px] h-[20px] rounded-sm bg-slate-400 flex justify-center items-center">
              <p className="text-black ">T</p>
            </div>
            <div className="mx-2">Traning</div>
            <div>
              <AnglesTopSVG />
              <AnglesBottomSVG />
            </div>
          </div>

          <div
            title="Close Sidebar"
            id="close-sidebar"
            className="w-[25px] h-[25px] rounded-[5px] flex justify-center items-center group-hover:opacity-100 hover:bg-slate-300 opacity-0 "
            onClick={() => setClose(true)}
          >
            <CloseSidebarSVG />
          </div>
        </button>

        <ButtonSidebar path={SearchSVG} name="Search" />
        <ButtonSidebar path={InboxSVG} name="Inbox" />
        <ButtonSidebar path={SettingSVG} name="Setting & members" />

        <button
          onClick={addNote}
          className=" w-full flex  items-center rounded-[5px] p-2 hover:bg-slate-200"
        >
          <div className="w-[15px] h-[15px] rounded-full bg-slate-400  flex justify-center items-center ">
            <Add />
          </div>
          <div className="ml-[14px] text-[14px] text-slate-500 leading-[21px] font-[500]">
            New page
          </div>
        </button>
      </div>

      <div className="w-full h-full max-h-[100vh-190px] overflow-y-auto">
        <div className="w-full py-2 px-3 flex justify-between items-center">
          <button className="w-[45px] h-[18px] flex justify-center items-center rounded-[3px] hover:bg-slate-300 text-[12.3px] text-slate-500 font-[500] leading-[21px]  ">
            Private
          </button>
          <button
            onClick={addNote}
            title="Add a page"
            className="w-[18px] h-[18px] flex justify-center items-center hover:bg-slate-300 rounded-[3px] "
          >
            <PlusSVG />
          </button>
        </div>
        {notes.length === 0 && <ButtonSidebar path={Plus} name="Add a page" />}
        {notes.map((item) => (
          <Link href={`/editor/${item.id}`} key={item.id}>
            <ButtonNote note={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarLayout;
