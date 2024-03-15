"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { INote } from "@/interfaces";
import { fetchJSON } from "@/utils/fetchURL";

export const AppContext = createContext<{
  notes: INote[];
  setNotes:React.Dispatch<React.SetStateAction<INote[]>>
  close:boolean;
  setClose:React.Dispatch<React.SetStateAction<boolean>>
}>({
  notes: [],
  setNotes: () => {},
  close:false,
  setClose:() => {},
});

const Theme = ({ children }: { children: React.ReactNode }) => {
  const fetchNote = async () => {
    try {
      const res = await fetchJSON("/api/note/1", {
        method: "GET",
      });
      setNotes(res);
    } catch (error) {}
  };

  const [notes, setNotes] = useState<INote[]>([]);
  const [close,setClose] = useState(false)
  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <AppContext.Provider
      value={{
        notes,
        setNotes,
        close,
        setClose
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Theme;

export const useAppContext = () => useContext(AppContext);
