import React from "react";

export function SidebarBreadcrumbs({children} : {children: React.ReactNode}) {
  return (
    <div className="flex flex-row space-x-[1rem]">
        {children}
    </div>
  );
}
