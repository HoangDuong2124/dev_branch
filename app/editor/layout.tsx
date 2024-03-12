import React from "react";
import Theme from "../provider/theme";
import SidebarLayout from "@/component/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex relative">
      <Theme>
        <SidebarLayout />
        {children}
      </Theme>
    </div>
  );
}
