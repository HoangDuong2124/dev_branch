import { SidebarLayout } from "@/component/Sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full grid grid-cols-[240px,1fr]">
      <SidebarLayout />
      <div className="col-auto">{children}</div>
    </div>
  );
}
