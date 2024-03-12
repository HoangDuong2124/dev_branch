"use client";
import React, { createContext, useContext, useState } from "react";
interface IContext {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  icon:string;
  setIcon: React.Dispatch<React.SetStateAction<string>>;
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  close:boolean;
  setClose:React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<IContext>({
  title: "",
  setTitle: () => {},
  icon: "",
  setIcon: () => {},
  background: "",
  setBackground: () => {},
  close:false,
  setClose:()=>{},
});

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [background, setBackground] = useState("webb1.jpg");
  const [close,setClose] = useState(false)
  return (
    <AppContext.Provider
      value={{ title, setTitle, icon, setIcon, background, setBackground,close,setClose }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Theme;

export const useAppContext = () => useContext(AppContext);
