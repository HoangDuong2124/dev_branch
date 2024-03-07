import React from "react";
import Theme from "../provider/theme";
import SidebarLayout from "@/component/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full grid grid-cols-[240px,1fr]">
      <Theme>
          <SidebarLayout />
          <div className="col-auto">{children}</div>
      </Theme>
    </div>
  );
}
