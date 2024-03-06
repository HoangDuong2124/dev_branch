"use client";
import { SidebarLayout } from "@/component/Sidebar";
import { IContext } from "@/interfaces";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<IContext>({
  title: "",
  setTitle: () => {},
  icon: "",
  setIcon: () => {},
  background: "",
  setBackground: () => {},
});
export default function Layout({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("emoji.svg");
  const [background, setBackground] = useState("webb1.jpg");
  return (
    <AppContext.Provider value={{ title, setTitle,icon, setIcon,background,setBackground }}>
      <div className="w-full grid grid-cols-[240px,1fr]">
        <SidebarLayout />
        <div className="col-auto">{children}</div>
      </div>
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
