"use client";
import { SidebarLayout } from "@/component/Sidebar";
import React, { createContext, useContext, useState } from "react";

interface IContext {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<IContext>({ title: "", setTitle: () => {} });
export default function Layout({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("");
  return (
    <AppContext.Provider value={{ title, setTitle }}>
      <div className="w-full grid grid-cols-[240px,1fr]">
        <SidebarLayout />
        <div className="col-auto">{children}</div>
      </div>
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
