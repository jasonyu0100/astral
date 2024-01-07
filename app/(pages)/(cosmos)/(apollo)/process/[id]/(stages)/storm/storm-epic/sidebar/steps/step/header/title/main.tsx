import React from "react";

export function StormSidePanelSectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-slate-500 font-extraBold text-xl">{children}</p>;
}
